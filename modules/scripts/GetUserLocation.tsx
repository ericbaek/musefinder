console.log("GETTING USER LOCATION");

export const getUserLocation = (timeout = 10000) => {
      return new Promise((resolve, reject) => {
        const timerId = setTimeout(() => {
          reject(new Error('Timeout expired'));
        }, timeout);
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              clearTimeout(timerId);
              const userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              };
              resolve(userLocation);
            },
            (error) => {
              clearTimeout(timerId);
              reject(error);
            }
          );
        } else {
          clearTimeout(timerId);
          reject(new Error('Geolocation is not supported by this browser.'));
        }
      });
    };
    