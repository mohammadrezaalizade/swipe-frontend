class LocationService {
  constructor() {}

  async getUserLocation() {
    if (!this.isLocationSupported()) {
      throw new Error(
        "Location service in this device is not avibale please check your browser and device setting."
      );
    }

    const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
        },
        (positionError) => {
          reject(positionError);
        }
      );
    });

    return promise;
  }

  isLocationSupported() {
    return "geolocation" in navigator;
  }
}

export default LocationService;
