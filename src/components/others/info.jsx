import facebook from '../../assests/images/facebook.png';
import tweeter from '../../assests/images/twitter.png';
import instagram from '../../assests/images/instagram.png';
import youtube from '../../assests/images/youtube.png';
import linkdine from '../../assests/images/linkedin.png';
import footerImage from '../../assests/images/footer-img.jpg';

export default function Info(){
    return (
        <>
           <div className="info_section">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 ml-auto">
                    <div className="row info_main-row">
                        <div className="col-md-6 pr-0">

                        <section className="contact_section">
                            <h2>
                            Request A Call Back
                            </h2>
                            <form action="">
                            <div>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div>
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div>
                                <input type="text" className="message-box" placeholder="Message" />
                            </div>
                            <div className="d-flex ">
                                <button>
                                SEND
                                </button>
                            </div>
                            </form>
                            <div className="map_container">
                            <div className="map">
                                <div id="googleMap" ></div>
                            </div>
                            </div>
                        </section>

                        <section className=" footer_section ">
                            <div className="social_box">
                            <a href="/">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="/">
                                <img src={tweeter} alt=""/>
                            </a>
                            <a href="/">
                                <img src={linkdine} alt=""/>
                            </a>
                            <a href="/">
                                <img src={instagram} alt=""/>
                            </a>
                            <a href="/">
                                <img src={youtube} alt=""/>
                            </a>
                            </div>
                            <p>
                            &copy; 2020 All Rights Reserved. Design by
                            <a href="https://html.design/">Free Html Templates</a>
                            </p>
                        </section>
                        /
                        </div>
                        <div className="col-md-6  px-0">
                        <div className="img-box">
                            <img src={footerImage} alt=""/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}