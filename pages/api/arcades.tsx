// Import the arcades data from the JSON file
import arcades from '@/Arcades.json';

/*
사용자의 위치를 받고 거리별로 가까운 아케이드를 안내하는 API입니다.
<예정> 필터가 활성화되었다면 필터를 고려하여 가까운 아케이드를 안내합니다.
*/

async function handleArcadeRequest(req: any, res: any) {
  // Get user's location from query parameters
  const userLatitude = parseFloat(req.query.latitude);
  const userLongitude = parseFloat(req.query.longitude);
  // 필터 리스트 받아오기
  const filterList = req.query.filterList ? req.query.filterList.split(',') : null;

  console.log("API Received:", filterList);

  // Filter the arcades by games
  const filteredArcades = arcades.filter((arcade: { games: any[]; }) => {
    if (!filterList) {
      // If filterList is null, return true to include all arcades
      return true;
    }
    return filterList.every((filterGname: any) =>
      arcade.games.some(game => game.Gname === filterGname)
    );
  });
  

  console.log("\n\n\n\nFilteredArcades:", filteredArcades);

  // 유저와의 거리를 계산합니다.
  filteredArcades.forEach((arcade: any) => {
    arcade.distance = getDistance(userLatitude, userLongitude, arcade.latitude, arcade.longitude);
  });

  // 가까운 순으로 다시 정렬합니다.
  filteredArcades.sort((a: any, b: any) => a.distance - b.distance);

  // 정리된 리스트를 json 형태로 보내줍니다.
  res.json(filteredArcades);
}

export default handleArcadeRequest;

// 2개의 위치를 기준으로 거리를 계산해주는 수식
function getDistance(lat1: any, lon1: any, lat2: any, lon2: any) {
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

function deg2rad(deg: any) {
  return deg * (Math.PI / 180);
}
