import Banner from "../../component/Banner"
import NavLinks from "../../component/NavLinks"
import './style.css'

const Home = () =>{

    return (
        <div className='home-container'>
            <NavLinks />
            <Banner />
        </div>
    )
}

export default Home