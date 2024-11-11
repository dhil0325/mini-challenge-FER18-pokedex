import "./style.css";
// import pokeImg from '../../assets/cardImg.png'
import { useState, useEffect } from "react";
import axios from "axios";

const PokedexCard = ({ name, url }) => {
  const [itemData, setItemData] = useState({
    name,
    imageUrl: "",
    attack: "",
    defense: "",
    type1: "",
    type2: "",
  });

  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(url);
      setItemData((prev) => ({
        ...prev,
        imageUrl: response.data.sprites.other.dream_world.front_default,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type1: response.data.types[0].type.name,
        type2: response.data.types[1] ? response.data.types[1].type.name : "",
      }));
    };

    fetchItem();
  }, [url]);
  return (
    <div className="pokedex-card">
      <div className="pokedex-card-container">
        <div className="pokedex-card-content">
          <h1>{itemData.name}</h1>
          <div className="pokedex-card-stats">
            <div className="pokedex-card-attack">
              <h2>{itemData.attack}</h2>
              <h3>Attack</h3>
            </div>
            <div className="pokedex-card-defense">
              <h2>{itemData.defense}</h2>            
              <h3>Defense</h3>
            </div>
          </div>
          <div className="pokedex-card-types">
            <p className={`type-${itemData.type1.toLowerCase()}`}>
              {itemData.type1}
            </p>
            <p className={`type-${itemData.type2.toLowerCase()}`}>
              {itemData.type2}
            </p>
          </div>
        </div>
        <div className={`pokedex-card-image ${itemData.type1.toLowerCase()}`}>
          <img src={itemData.imageUrl} alt={itemData.name}  />
        </div>
      </div>
    </div>
  );
};
export default PokedexCard;
