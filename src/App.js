import React, { Component } from "react";
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

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/alcoholic" element={<Alcoholic />} />
            <Route exact path="/non-alcoholic" element={<Nonalcoholic />} />
            <Route exact path="/suggestion" element={<Suggestion/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
