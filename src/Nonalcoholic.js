import React, { useEffect, useState } from "react";
import Drink from "./Drink";

function Nonalcoholic({nonAlcoholicDrinks, dataIsLoadedNonAlcoholic}) {
    

    if (dataIsLoadedNonAlcoholic === false) {
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