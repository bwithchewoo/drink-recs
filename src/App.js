import React, { useEffect, useState } from "react";
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

function App() {
  const [alcoholicDrinks, setAlcoholicDrinks] = useState([]);
  const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState([]);
  const [dataIsLoadedAlcoholic, setDataIsLoadedAlcoholic] = useState(false);
  const [dataIsLoadedNonAlcoholic, setDataIsLoadedNonAlcoholic] = useState(false);

  const addDrink = (newDrink, isAlcoholic) => {
    isAlcoholic ? setAlcoholicDrinks([...alcoholicDrinks, newDrink]) : setNonAlcoholicDrinks([...nonAlcoholicDrinks, newDrink])
  }

  useEffect(() => {
    fetch("https://drinks-server.herokuapp.com/alcoholic")
      .then((res) => res.json())
      .then((data) => {
        setAlcoholicDrinks(data);
        setDataIsLoadedAlcoholic(true);
      });
    fetch("https://drinks-server.herokuapp.com/non-alcoholic")
      .then((res) => res.json())
      .then((data) => {
        setNonAlcoholicDrinks(data);
        setDataIsLoadedNonAlcoholic(true);
      });
  }, []);

    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/alcoholic" element={<Alcoholic dataLoaded={dataIsLoadedAlcoholic} alcoholicDrinks={alcoholicDrinks} />} />
            <Route exact path="/non-alcoholic" element={<Nonalcoholic dataLoaded={dataIsLoadedNonAlcoholic} nonAlcoholicDrinks={nonAlcoholicDrinks} />} />
            <Route exact path="/suggestion" element={<Suggestion addDrink={addDrink} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }


export default App;
