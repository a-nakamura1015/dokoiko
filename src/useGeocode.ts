// useGeocode.ts
import { useContext, useEffect, useState } from 'react';
import { MapContext } from './App';

declare const google: any;

interface GeocodeResult {
  lat: number;
  lng: number;
}

const useGeocode = () => {
  const {geocodeResult, setGeocodeResult} = useContext(MapContext)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeocodeResult(
        {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      );
    })
  }, [])

  const getCoordinates = (location: string) => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: location }, (results: any, status: any) => {
      if (status === 'OK') {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();
        console.log(longitude)
        setGeocodeResult({ lat: latitude, lng: longitude });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  return { coordinates: geocodeResult, getCoordinates };
};

export default useGeocode;
