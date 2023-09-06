import './style.css'

const NavBar =()=>{
    return(
        <div className="navContainer"> 
            <div>
                <img src="http://ecart.mangoitsol.com/assets/home_page/img/home/ecart-logo.png"/>
            </div>
            <div className='navContainer-2'>
                <h4>Home</h4>
                <h4>Products</h4>
                <h4>Apparels</h4>
                <h4>Furniture</h4>
                <h4>Appliances</h4>
                <h4>Mobile Accessories</h4>
                <h4>Virtual Products</h4>
                <h4>About US</h4>
                <h4>Contact</h4>
            </div>
        </div>
    )
}
export default NavBar;