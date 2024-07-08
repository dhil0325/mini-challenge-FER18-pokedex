import './style.css'
import BannerImage from '../../assets/banner.png'

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
                <button>See Pokemons</button>
            </div>
            <img src={BannerImage} alt="" />
            <div className='rectangle-19'></div>
        </div>
    )
}

export default Banner