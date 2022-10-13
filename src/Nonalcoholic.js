import React, { Component } from "react";
import Drink from "./Drink";

class Nonalcoholic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nonAlcoholicDrinks: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://drinks-server.herokuapp.com/non-alcoholic")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    nonAlcoholicDrinks: data,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, nonAlcoholicDrinks } = this.state;
        if (!DataisLoaded) return <div>
            <h1>Loading...</h1>
        </div>

        return (
            <div className="home">
                <div className="drinklist">
                {nonAlcoholicDrinks.map((item) => {
                    return <Drink name={item.strDrink} src={item.strDrinkThumb} id={item.id}/>
                })}
                </div>
            </div>
        );
    }
}

export default Nonalcoholic;