import { Status, Wrapper } from "@googlemaps/react-wrapper";
import Map from './Map';
import "./App.css"
import Header from './Header';
import { createContext, useState } from 'react'

const defaultValue = {
  lat: 0,
  lng: 0
}

interface Position {
  lat: number;
  lng: number;
}

type PositionType = {
  position: Position,
  setPosition: React.Dispatch<React.SetStateAction<Position>>
}

const defaultPosition : PositionType = {
  position: {
    lat: 0,
    lng: 0
  },
  setPosition: () => {}
}

export const MapContext = createContext(defaultPosition)

function App () {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  const [position, setPosition] = useState(defaultValue)
  return (
    <MapContext.Provider value={{position, setPosition}}>
      <Header />
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY!} render={render}>
        <Map/>
      </Wrapper>
    </MapContext.Provider>
  );
}

export default App;
