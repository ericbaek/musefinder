const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));

// Endpoint to get list of arcades sorted by distance from user
app.get('/api/arcades', async (req, res) => {
  // Get user's location from query parameters
//   const userLatitude = parseFloat(req.query.latitude);
//   const userLongitude = parseFloat(req.query.longitude);

    const userLatitude = 37.001054;
    const userLongitude = 127.077652;
  
  // Get list of arcades from database
  const arcades = await prisma.arcade.findMany();

  // Calculate distance between user and each arcade
  arcades.forEach((arcade) => {
    arcade.distance = getDistance(userLatitude, userLongitude, arcade.latitude, arcade.longitude);
  });

  // Sort arcades by distance
  arcades.sort((a, b) => a.distance - b.distance);

  // Return sorted list of arcades
  res.json(arcades);
});

// Helper function to calculate distance between two coordinates
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

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
