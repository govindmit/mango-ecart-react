
import { useEffect, useState } from 'react';
import { customerContact } from '../../../apis/users/home';
import './style.css'

const Footer = () => {
    const [contact, setContact] = useState()

    useEffect(() => {
        customerContact()
            .then((res) => {
                let data = res.data;
                if (data.isError) {
                    toast.error(data.message);
                } else {
                    setContact(data.result.data)
                }

            })
            .catch((e) => {
                console.log("eror", e);
            });
    },[]);


    return (
        <>
            <div className='fotter-container'>
                <div>
                    <h3 className="fotter-title">CONTACT US UPDATES</h3>
                    <ul class="footer-contact">
                        <li ><span >Address :</span><span>{contact?(contact[0].country):""}</span></li>
                        <li ><span >Cell-Phone :</span><span>{contact?(contact[0].phone):""}</span></li>
                        <li ><span >Email :</span><span>{contact?(contact[0].email):""}</span></li>
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