import React from 'react';
import './App.css';
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { Map } from './Map';

function App() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  return (
  <Wrapper apiKey={"GOOGLE_MAP_API_KEY"} render={render}>
    <Map style={{ flexGrow: "1", height: "100%" }} />
  </Wrapper>
);
}

export default App;
