import React, { useEffect, useState} from "react";
import Drink from "./Drink";

function Alcoholic() {
    const [alcoholicDrinks, setAlcoholicDrinks] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);


    useEffect(() => {
        fetch("https://drinks-server.herokuapp.com/alcoholic")
            .then((res) => res.json())
            .then((data) => {
                setAlcoholicDrinks(data);
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
            <div >
                <h1 className="home">Alcoholic</h1>
                <div className="drinklist">
                {alcoholicDrinks.map((item) => {
                    return (
                        <Drink name={item.strDrink} src={item.strDrinkThumb} id={item.id}/>
                    )
                })}
                </div>
            </div>
        );
    }


export default Alcoholic;