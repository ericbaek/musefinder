import React from 'react';

function CalulateDistance(location1: any, location2: any) {
      const EARTH_RADIUS = 6371; // in km

      const lat1 = location1.latitude;
      const lng1 = location1.longitude;
      const lat2 = location2.latitude;
      const lng2 = location2.longitude;
    
      const dLat = toRadians(lat2 - lat1);
      const dLng = toRadians(lng2 - lng1);
    
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = EARTH_RADIUS * c;
    
      return distance;
}

function toRadians(degrees: number): number {
      return degrees * (Math.PI / 180);
}

export default CalulateDistance;