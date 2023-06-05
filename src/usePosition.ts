// useGeocode.ts
import { useContext, useEffect } from 'react';
import { MapContext } from './App';

declare const google: any;

const usePosition = () => {
  const {position, setPosition} = useContext(MapContext)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition(
        {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      );
    })
  }, [setPosition])

  const updatePosition = (place: string) => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: place }, (results: any, status: any) => {
      if (status === 'OK') {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();
        console.log(longitude)
        setPosition({ lat: latitude, lng: longitude });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  return { position, updatePosition };
};

export default usePosition;
