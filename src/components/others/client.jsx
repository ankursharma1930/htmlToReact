import client1 from '../../assests/images/client1.png';
import client2 from '../../assests/images/client2.png';
import quote from '../../assests/images/quote.png';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Client(){
    return (
        <>
            <section className="client_section layout_padding-bottom">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-lg-8 mx-auto">
                    <div className="client_container">
                        <div className="heading_container">
                        <h2>
                            What Says Our students
                        </h2>
                        <p>
                            iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n
                        </p>
                        </div>
                        <div className="client_box-container">
                        <div className="carousel-wrap ">
                        <OwlCarousel className='owl_carousel1' loop margin={10} nav >
                            
                                <div className="item">
                                    <div className="box">
                                    <div className="img-box">
                                        <img src={client1} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h4>
                                        Jone Moe
                                        </h4>
                                        <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
                                        <img src={quote} alt="" />
                                    </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box">
                                    <div className="img-box">
                                        <img src={client2} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h4>
                                        Lio Uji
                                        </h4>
                                        <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
                                        <img src={quote} alt="" />
                                    </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box">
                                    <div className="img-box">
                                        <img src={client1} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h4>
                                        Jone Moe
                                        </h4>
                                        <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
                                        <img src={quote} alt="" />
                                    </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box">
                                    <div className="img-box">
                                        <img src="images/client2.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h4>
                                        Lio Uji
                                        </h4>
                                        <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
                                        <img src={quote} alt="" />
                                    </div>
                                    </div>
                                </div>
                            
                        </OwlCarousel>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}