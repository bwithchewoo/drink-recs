import React from 'react';

function Drink({name, src, id}) {
    return (
        <li className="drinks" key={id} style={{width:'150px',height:'150px'}}>
            <div style={{wordWrap: "normal", textAlign: "center"}}>{name}</div>
            <img className="img" src={src}/>
            <button>❤️</button>
        </li>
    )
}

export default Drink;