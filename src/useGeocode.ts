// useGeocode.ts
import { useState } from 'react';

declare const google: any;

interface GeocodeResult {
  lat: number;
  lng: number;
}

const useGeocode = () => {
  const [coordinates, setCoordinates] = useState<GeocodeResult | null>(null);

  const getCoordinates = (location: string) => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: location }, (results: any, status: any) => {
      if (status === 'OK') {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();
        console.log(longitude)
        setCoordinates({ lat: latitude, lng: longitude });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  return { coordinates, getCoordinates };
};

export default useGeocode;
