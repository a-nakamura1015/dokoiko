import { FC, useRef, useState, useEffect, useContext } from 'react';
import { MapContext } from './App';
import useGeocode from './useGeocode';

const Map: FC<{}> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { coordinates } = useGeocode()
  
  useEffect(() => {
    if (ref.current) {
      console.log("display map")
      new window.google.maps.Map(ref.current!, {
        center: {
          lat: coordinates.lat,
          lng: coordinates.lng
        },
        zoom: 15
      });
    }
  }, [ref, coordinates]);

  return <div ref={ref} style={{height: "100%"}} />
}

export default Map;
