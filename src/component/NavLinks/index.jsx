import './style.css'
import LogoPokemon from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
const NavLinks = () => {

    return (
        <div className='navlink-container'>
            <img src={LogoPokemon} alt="" />
            <div  className='navlink-text'>
                <Link to="/">Home</Link>
                <Link to="/pokedex">Pokédex</Link>
            </div>
        </div>
    )
}

export default NavLinks