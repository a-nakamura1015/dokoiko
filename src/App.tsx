import { Status, Wrapper } from "@googlemaps/react-wrapper";
import Map from './Map';
import "./App.css"
import Header from './Header';
import { createContext, useState } from 'react'

const defaultValue = {
  lat: 0,
  lng: 0
}

interface GeocodeResult {
  lat: number;
  lng: number;
}

type GeocodeResultType = {
  geocodeResult: GeocodeResult,
  setGeocodeResult: React.Dispatch<React.SetStateAction<GeocodeResult>>
}

const defaultGeocodeResult : GeocodeResultType = {
  geocodeResult: {
    lat: 0,
    lng: 0
  },
  setGeocodeResult: () => {}
}

export const MapContext = createContext(defaultGeocodeResult)

function App () {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  const [map, setMap] = useState(defaultValue)
  return (
    <MapContext.Provider value={{geocodeResult:map, setGeocodeResult:setMap}}>
      <Header />
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY!} render={render}>
        <Map/>
      </Wrapper>
    </MapContext.Provider>
  );
}

export default App;
