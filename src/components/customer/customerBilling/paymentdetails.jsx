import { Container, FormControl } from "@mui/material";

const PaymentDetails = ()=>
{
    return(
        <>
    <div>
        <div>
            <h4>Payment method</h4>
            <div>
                <form>
                    <h3>Card Payment</h3>
                    <p>You can pay with your credit card.</p>
                  <a>
                    <img src="http://ecart.mangoitsol.com/assets/home_page/img/payment/1.png"/>
                  </a>
                  <a>
                    <img src="http://ecart.mangoitsol.com/assets/home_page/img/payment/2.png"/>
                  </a>
                  <a>
                    <img src="http://ecart.mangoitsol.com/assets/home_page/img/payment/3.png"/>
                  </a>
                  <a>
                    <img src="http://ecart.mangoitsol.com/assets/home_page/img/payment/4.png"/>
                  </a>
                  <br/>
                  <br/>
                  <div>
                    <div>
                        <label>Card Number</label>
                        <input type="number" placeholder="Enter card Number" name="cardnumber"/>
                    </div>
                    <br/>
                    <div>
                        <label>Expiry Date (MM/YYYY)</label>
                        <br/>
                        <label>Month</label>
                        <select>
                            <option>Choose Expiry Month</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        <br/>
                        <label>Year</label>
                        <select>
                            <option>Choose Expiry Year</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>

                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
        
        </>
    )
};
export default PaymentDetails;