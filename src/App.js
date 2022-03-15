import React from "react";
import { BrowserRouter} from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Teste from "./Teste";


function App(){
return (
  <BrowserRouter>
    <HomePage/>
  </BrowserRouter>
  );
}

export default App;