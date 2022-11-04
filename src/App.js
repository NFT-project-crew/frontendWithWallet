import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LandingPage, Boilerplate, Buy} from "./pages";
import GlobalStyle from "./lib/style/GlobalStyle"


const Test = ()=>{

  return(<>bokic</>)

}


function App() {
  return (
    <Router
    >
    <GlobalStyle/>
        <Routes>
          <Route exact path="/" 
            element={<LandingPage />} />
        <Route exact path="/boiler" 
            element={<Boilerplate />} />
             <Route exact path="/buy" 
            element={<Buy />} />
        </Routes>
      </Router>
  );
}

export default App;


