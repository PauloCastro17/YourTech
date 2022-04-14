import './ContactUs.css'

import NavBarTwo from '../../components/NavBarTwo'
import Footer from '../../components/footer'

import imageContactUs from '../../assets/imageContactUs.svg'

function ContactUs(){
    return(
        <section>
            <div className="containerContactUs">
                <NavBarTwo/>
                <div className="rowContactUs">
                    <div className="contactUs">
                        <h1 className="rowContactUsH1">Contate-nos</h1>
                        <img src={imageContactUs} alt=""/>
                    </div>
                    <div className="contactUsBody">
                        <div className="informationContactUs">
                            <h1>Information About us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, 
                                malesuada diam est. Malesuada sem tristique amet erat vitae 
                                eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                            </p>
                        </div>
                            <div className="contactWay">
                                <h1>Contact Way</h1>
                                <div className="contactWayTodo">
                                    <div className="contactWayTitle">
                                        <div className="contactWayText">
                                            <p>Tel: xxx-xx-xx-xxx</p>
                                            <p>E-Mail: email@email.  com</p>
                                        </div>

                                        <div className="contactWayText">
                                            <p>Support Forum</p>
                                            <p>For over 24hr</p>
                                        </div>
                                    </div>

                                    <div className="contactWayTitle">
                                        <div className="contactWayText">
                                            <p>20 Margaret st, London</p>
                                            <p>Great britain, 3NM98-LK</p>
                                        </div>

                                        <div className="contactWayText">
                                            <p>Free standard shipping</p>
                                            <p>on all orders.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
}

export default ContactUs;