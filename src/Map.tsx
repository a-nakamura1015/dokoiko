import { FC, useRef, useEffect } from 'react';
import usePosition from './usePosition';

const Map: FC<{}> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { position } = usePosition()

  useEffect(() => {
    if (ref.current) {
      console.log("display map")
      new window.google.maps.Map(ref.current!, {
        center: {
          lat: position.lat,
          lng: position.lng
        },
        zoom: 15
      });
    }
  }, [ref, position]);

  return <div ref={ref} style={{height: "100%"}} />
}

export default Map;
