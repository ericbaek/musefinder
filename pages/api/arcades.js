const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});


/*
사용자의 위치를 받고 거리별로 가까운 아케이드를 안내하는 API입니다.
<예정> 필터가 활성화되었다면 필터를 고려하여 가까운 아케이드를 안내합니다.
*/
export default async (req, res) => {
  // Get user's location from query parameters
  const userLatitude = parseFloat(req.query.latitude);
  const userLongitude = parseFloat(req.query.longitude);
  
  // 데이터베이스에서 아케이드 리스트를 받아옵니다.
  const arcades = await prisma.arcade.findMany();

  // 유저와의 거리를 계산합니다.
  arcades.forEach((arcade) => {
    arcade.distance = getDistance(userLatitude, userLongitude, arcade.latitude, arcade.longitude);
  });

  // 가까운 순으로 다시 정렬합니다.
  arcades.sort((a, b) => a.distance - b.distance);

  // 정리된 리스트를 json 형태로 보내줍니다.
  res.json(arcades);
}

// 2개의 위치를 기준으로 거리를 계산해주는 수식
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
