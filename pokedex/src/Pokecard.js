import React from "react";
import "./Pokecard.css"
const Pokecard =({id, name, type, base_experience})=>{
    return(    
        <>
            
            <div className="Pokecard">
 
            <div className="Pokecard-title"><b>{name}</b></div>
                <img className="Pokecard-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                <div className="Pokecard-type">Type: {type}</div>
                <div className="Pokecard-experience">Exp: {base_experience}</div>
    
              
            </div>
            
        </>
        );
}


export default Pokecard;



