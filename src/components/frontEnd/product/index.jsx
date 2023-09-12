import Banner from "../../../theme/frontend/banner"
import Footer from "../../../theme/frontend/fotter"
import Header from "../../../theme/frontend/header"
import NavBar from "../../../theme/frontend/header/navBar"
import ProductBanner from "../../../theme/frontend/product-sidebar"

const ProductsPage = () => {

return(
    <div>
        <div>
            <Header />
            <NavBar />
        </div>
        <div>
            <Banner data={"PRODUCTs"} />
        </div>
        <div className="productDetailsDiv">
            <div>
                <ProductBanner/>
            </div>
            
        </div>
        <div><Footer/></div>
    </div>
)

}

export default ProductsPage
