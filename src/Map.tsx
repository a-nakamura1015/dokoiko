import { FC, useRef, useState, useEffect, useContext } from 'react';
import { MapContext } from './App';

const Map: FC<{}> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const map = useContext(MapContext)
  
  useEffect(() => {
    if (ref.current) {
      console.log("display map")
      new window.google.maps.Map(ref.current!, {
        center: {
          lat: map.lat,
          lng: map.lng
        },
        zoom: 15
      });
    }
  }, [ref, map]);

  return <div ref={ref} style={{height: "100%"}} />
}

export default Map;
