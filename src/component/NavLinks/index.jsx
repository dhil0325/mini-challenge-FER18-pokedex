import './style.css'
import LogoPokemon from '../../assets/Logo.png'
const NavLinks = () => {

    return (
        <div className='navlink-container'>
            <img src={LogoPokemon} alt="" />
            <div  className='navlink-text'>
                <a href="">Home</a>
                <a href="">Pokédex</a>
                <a href="">Legendaries</a>
                <a href="">Documentation</a>
            </div>
        </div>
    )
}

export default NavLinks