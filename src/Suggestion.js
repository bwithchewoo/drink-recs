import React, { useState } from 'react';


function Suggestion() {
    const [drink, setDrink] = useState("");
    const [image, setImage] = useState("");
    const [isAlcoholic, setIsAlcoholic] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setDrink('');
        setImage("");
        setIsAlcoholic(false);
        if (isAlcoholic === false) {
            fetch('https://drinks-server.herokuapp.com/non-alcoholic', {
            method: 'POST',
            body: JSON.stringify({
                "strDrink": drink,
                "strDrinkThumb": image
            }),
            headers: { 'Content-type': 'application/json'}
            
        })
        }
            fetch('https://drinks-server.herokuapp.com/alcoholic', {
            method: 'POST',
            body: JSON.stringify({
                "strDrink": drink,
                "strDrinkThumb": image
            }),
            headers: { 'Content-type': 'application/json'}
            })
    }

    const checkFieldComplete = (drinkinput, imageinput) => {
        if (drinkinput === '' || imageinput === '' || !imageinput.includes(".jpeg")) {
           setIsDisabled(true)
        }
        else {
            setIsDisabled(false)
        }
    }
  
    
    return (
        <form onSubmit={handleSubmit} className="suggestion">
            <img style={{marginBottom: "10px"}} src="https://icons.iconarchive.com/icons/graphicloads/food-drink/256/drink-icon.png"/>
            <label style={{marginBottom: "10px"}}>Enter drink name:
                <input
                    type="text"
                    value={drink}
                    onChange={(e) => {
                        setDrink(e.target.value); 
                        checkFieldComplete(e.target.value, image);
                    }}
                />
            </label>
            <label style={{marginBottom: "10px"}}>Enter image url(must end with .jpeg):
                <input
                    type="text"
                    value={image}
                    onChange={(e) => {
                        setImage(e.target.value);
                        checkFieldComplete(drink, e.target.value);
                    }}
                />
            </label>
            <label style={{marginBottom: "10px"}}>Check if alcoholic.
                <input 
                type="checkbox"
                onChange={(e) => setIsAlcoholic(e.target.checked)}
                checked={isAlcoholic}
                />
            </label>
            <input type="submit" value="Submit" disabled={isDisabled}></input>
        </form>
    )
}

export default Suggestion;