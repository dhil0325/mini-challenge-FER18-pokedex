// import React, {useState, useEffect} from "react";
import NavLinks from "../../component/NavLinks";
import PokedexCard from "../../component/PokedexCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { PokeApi } from "../../utils/data";
import "./style.css";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(PokeApi);
      setPokemons(response.data.results);
    };
    fetchPokemons();
  }, []);

  return (
    <div className="pokedex-container">
      <NavLinks />
      <div className="pokedex-title">POKEDEX</div>
      <div className="pokedex">
        {pokemons.map((item) => {
          return (
            <PokedexCard key={item.name} name={item.name} url={item.url} />
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
