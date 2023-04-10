import { Status, Wrapper } from "@googlemaps/react-wrapper";
import Map from './Map';
import "./App.css"

function App() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  return (
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY!} render={render}>
      <Map/>
    </Wrapper>
  );
}

export default App;
