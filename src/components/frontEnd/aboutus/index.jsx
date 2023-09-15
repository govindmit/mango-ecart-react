import Footer from '../../../theme/frontend/fotter';
import Header from '../../../theme/frontend/header';
import NavBar from '../../../theme/frontend/header/navBar';
import './style.css'


const Aboutus = () => {
  return (
    <>
    <Header/>
    <NavBar/>
      <div className="product-area">
        <div className="about-container">
          <div className="about-row">
            <div className="about-column">
              <div className="our-story">
                <h2>Our Story</h2>
                <p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur odio aliquid asperiores ex quidem, deserunt odit
                    temporibus culpa, voluptatibus magni mollitia recusandae non
                    placeat deleniti vitae suscipit error voluptatum, facere
                    facilis hic quisquam molestias totam quo. Corrupti, libero?
                    Architecto adipisci labore dignissimos fugiat tenetur quae
                    quod repellendus quos debitis eum? sit amet consectetur
                    adipisicing elit. Pariatur odio aliquid asperiores ex
                    quidem, deserunt odit temporibus culpa, voluptatibus magni
                    mollitia recusandae non placeat deleniti vitae suscipit
                    error voluptatum, facere facilis hic quisquam molestias
                    totam quo.
                  </p>
                  <p>
                    Corrupti, libero? Architecto adipisci labore dignissimos
                    fugiat tenetur quae quod repellendus quos debitis eum? sit
                    amet consectetur adipisicing elit. Pariatur odio aliquid
                    asperiores ex quidem, deserunt odit temporibus culpa,
                    voluptatibus magni mollitia recusandae non placeat deleniti
                    vitae suscipit error voluptatum, facere facilis hic quisquam
                    molestias totam quo. Corrupti, libero? Architecto adipisci
                    labore dignissimos fugiat tenetur quae quod repellendus quos
                    debitis eum? facilis hic quisquam molestias totam quo.
                    Corrupti, libero? Architecto adipisci labore dignissimo
                  </p>
                </p>
              </div>
            </div>
            <div className='img-column'>
              <div className="our-img">
                <img className='about-img' src="http://103.127.29.85:3006/uploads/portfolio-5.jpg" alt="Portfolio Image" />
              </div>
            </div>
          </div>
          <div className='row mt-5'></div>
        </div>
      </div>

      <Footer/>
    </>

  );
};
export default Aboutus;
