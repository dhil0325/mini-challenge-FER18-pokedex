import './style.css'
import BannerImage from '../../assets/banner.png'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-text'>
                <h1>
                Find all your 
                favorite Pokemon
                </h1>
                <p>
                You can know the type of Pokemon, its strengths, disadvantages and abilities
                </p>
                <Link to='/pokedex'>
                    <button>See Pokemons</button>
                </Link>
            </div>
            <img src={BannerImage} alt="" />
            <div className='rectangle-19'></div>
        </div>
    )
}

export default Banner