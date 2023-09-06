
import './style.css'

const Footer = () => {

    return (
        <>
            <div className='fotter-container'>
                <div>
                    <h3 className="fotter-title">CONTACT US UPDATES</h3>
                    <ul class="footer-contact">
                        <li ><span >Address :</span>"</li>
                        <li ><span >Cell-Phone :</span>6589451236</li>
                        <li ><span >Email :</span>tp@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3 className="fotter-title">EMAIL NEWSLETTERS</h3>
                    <div class="footer-subscribe">
                        <form novalidate="" class="ng-untouched ng-pristine ng-invalid">
                            <div class="form-group">
                                <input type="text" placeholder="Enter email" name="email" className="fotter-email-input" />
                            </div>
                            <button type="submit" data-text="Subscribe" className="footer-button">Subscribe</button>
                        </form>
                    </div>
                </div>

            </div>
            <div className='fotter-container-1'>
                <div>
                    <p className="mb-0">© <a target="_blank">MangoIT E-cart </a> 2022. All Rights Reserved .</p>
                </div>
                <div className='image-container'> 
                    <img src='http://ecart.mangoitsol.com/assets/home_page/img/payment/1.png' />
                    <img src='http://ecart.mangoitsol.com/assets/home_page/img/payment/2.png' />
                    <img src='http://ecart.mangoitsol.com/assets/home_page/img/payment/3.png' />
                    <img src='http://ecart.mangoitsol.com/assets/home_page/img/payment/4.png' />
                </div>
            </div>
        </>
    )

}
export default Footer;