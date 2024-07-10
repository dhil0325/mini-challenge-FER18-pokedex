import './style.css'
import pokeImg from '../../assets/cardImg.png'

const PokedexCard = () => {
    return (
        <div className="pokedex-card-container">
            <div className="pokedex-card-content">
                <h1>Pachirisu</h1>
                <div className="pokedex-card-stats">
                    <h2>419</h2>
                    <h2>49</h2>
                </div>
                <div className="pokedex-card-abilities">
                    <h2>Attack</h2>
                    <h2>Defense</h2>
                </div>
                <div className="pokedex-card-types">
                    <p>Grass</p>
                    <p>Poison</p>
                </div>
                
            </div>
            <img src={pokeImg}/>
      </div>
    );
  }
  export default PokedexCard