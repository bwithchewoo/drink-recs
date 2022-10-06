import React, { Component } from "react";
import Drink from "./Drink";

class Alcoholic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alcoholicDrinks: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://drinks-server.herokuapp.com/alcoholic")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    alcoholicDrinks: data,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, alcoholicDrinks } = this.state;
        if (!DataisLoaded) return <div>
            <h1>Loading...</h1>
        </div>

        return (
            <div className="drinklist">
                {alcoholicDrinks.map((item) => {
                    return (
                        <Drink name={item.strDrink} src={item.strDrinkThumb} id={item.id}/>
                    )
                })}
            </div>

        );
    }
}

export default Alcoholic;