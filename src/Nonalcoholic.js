import React, { useEffect, useState } from "react";
import Drink from "./Drink";

function Nonalcoholic() {
    const [nonAlcoholicDrinks, setnonAlcoholicDrinks] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);


    useEffect(() => {
        fetch("https://drinks-server.herokuapp.com/non-alcoholic")
            .then((res) => res.json())
            .then((data) => {
                setnonAlcoholicDrinks(data);
                setDataIsLoaded(true);
            });
    });

    if (dataIsLoaded === false) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>);
    }
    return (
        <div className="home">
            <h1>Non-Alcoholic</h1>
            <div className="drinklist">
                {nonAlcoholicDrinks.map((item) => {
                    return <Drink name={item.strDrink} src={item.strDrinkThumb} id={item.id} />;
                })}
            </div>
        </div>
    );
}

export default Nonalcoholic;