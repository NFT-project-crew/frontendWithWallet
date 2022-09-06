import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LandingPage, Boilerplate} from "./pages";
import GlobalStyle from "./lib/style/GlobalStyle"


const Test = ()=>{

  return(<>bokic</>)

}

function App() {
  return (
    <Router
    basename={process.env.PUBLIC_URL}
    >
    
        <Routes>
          <Route exact path="/" 
            element={<LandingPage />} />
        <Route exact path="/boiler" 
            element={<Boilerplate />} />
        </Routes>
      </Router>
  );
}

export default App;


