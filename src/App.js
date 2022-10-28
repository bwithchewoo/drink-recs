import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Alcoholic from "./Alcoholic";
import Nonalcoholic from "./Nonalcoholic";
import Suggestion from "./Suggestion";

function App(){
  const [alcoholicDrinks, setAlcoholicDrinks] = useState([]);
  const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState([]);

    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/alcoholic" element={<Alcoholic alcoholicDrinks={alcoholicDrinks} setAlcoholicDrinks={setAlcoholicDrinks}/>} />
            <Route exact path="/non-alcoholic" element={<Nonalcoholic nonAlcoholicDrinks={nonAlcoholicDrinks} setNonAlcoholicDrinks={setNonAlcoholicDrinks}/>} />
            <Route exact path="/suggestion" element={<Suggestion/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }


export default App;
