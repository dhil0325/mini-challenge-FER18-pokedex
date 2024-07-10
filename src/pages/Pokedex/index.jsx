// import React, {useState, useEffect} from "react";
import NavLinks from "../../component/NavLinks";
import PokedexCard from "../../component/PokedexCard";



const Pokedex = () => {
    return (
        <div className="pokedex-container">
            <NavLinks />
            <div>
                POKEDEX
            </div>
            <div style={{paddingTop: "100px"}}>
                <PokedexCard />
            </div>
        </div>
    )
}

export default Pokedex