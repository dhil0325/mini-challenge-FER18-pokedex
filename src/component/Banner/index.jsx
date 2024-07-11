import "./style.css";
import BannerImage from "../../assets/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <div className="text-container">
          <h1>Find all your favorite Pokemon</h1>
          <p>
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </p>
        </div>
        <Link to="/pokedex">
          <button className="see-pokemons-button">See Pokemons</button>
        </Link>
      </div>
      <img src={BannerImage} alt="" />
    </div>
  );
};

export default Banner;
