import './AboutUs.css'

import NavBarTwo from '../../components/NavBarTwo'
import Footer from '../../components/footer'

import imageAboutUs from '../../assets/imageAboutUs.svg'
import icon24H from '../../assets/icon24H.png'
import iconCashback from '../../assets/iconCashback.png'
import iconDelivery from '../../assets/iconDelivery.png'
import iconQualityProduct from '../../assets/iconQualityProduct.png'

function AboutUs(){
    return(
        <>
            <section>
                <div className="containerAboutUs">
                    <NavBarTwo/>
                    <div className="rowAboutUs">
                        <h1 className="rowAboutUsH1">Sobre nós</h1>
                        <div className="sobreNos">
                            <img src={imageAboutUs} alt=""/>
                            <div className="sobreNosLegenda">
                                <h2>Conheça sobre nossos négocios e historia</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, 
                                    malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus 
                                    vitae lobortis quis bibendum quam.
                                </p>
                            </div>
                        </div>
                        <div className="aboutUsOffers">
                            <div className="offer">
                                <img src={iconDelivery}/>
                                <h1>Free Delivery</h1>
                            </div>

                            <div className="offer">
                                <img src={iconCashback}/>
                                <h1>100% Cash Back</h1>
                            </div>

                            <div className="offer">
                                <img src={iconQualityProduct}/>
                                <h1>Quality Product</h1>
                            </div>

                            <div className="offer">
                                <img src={icon24H}/>
                                <h1>24/7 Support</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default AboutUs;