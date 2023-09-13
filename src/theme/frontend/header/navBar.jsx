import { Link } from 'react-router-dom';
import Aboutus from '../../../components/frontEnd/aboutus';
import './style.css'

const NavBar =()=>{
  
    return(
        <div className="navContainer"> 
            <div>
                <img src="http://ecart.mangoitsol.com/assets/home_page/img/home/ecart-logo.png"/>
            </div>
            <div className='navContainer-2'>
                <Link to={'/'}><h4>Home</h4></Link> 
                <Link to={'/product'}><h4 >Products</h4></Link>         
                <h4>Apparels</h4>
                <h4>Furniture</h4>
                <h4>Appliances</h4>
                <h4>Mobile Accessories</h4>
                <h4>Virtual Products</h4>
                <h4> <Link to="/about-us"> About US </Link></h4>
                <h4> <Link to="/contact"> Contact </Link></h4>
            </div>
        </div>
    )
}
export default NavBar;