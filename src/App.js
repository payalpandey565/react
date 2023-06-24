

import {Route,Routes} from "react-router-dom";

import DefaultHOC from "./HOC/Default.HOC";



import Temp from "./components/temp"

function App() {
  return (
    <>
    <Routes>

    <Route path="/" element={<Temp/>}
    />
    </Routes>

    </>

  );
}

export default App;
