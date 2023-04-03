import { FC, useRef, useState, useEffect } from 'react';

const Map: FC<{}> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  
  useEffect(() => {
    if (ref.current && !map) {
      console.log("display map")
      navigator.geolocation.getCurrentPosition((position) => {
        setMap(new window.google.maps.Map(ref.current!, {
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }, zoom: 15
        }));
      });
    }
  }, [ref, map]);

  return <div ref={ref} style={{height: "100%"}} />
}

export default Map;
