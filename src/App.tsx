import { Status, Wrapper } from "@googlemaps/react-wrapper";
import Map from './Map';
import "./App.css"

function App() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  return (
    <Wrapper apiKey={""} render={render}>
      <Map/>
    </Wrapper>
  );
}

export default App;
