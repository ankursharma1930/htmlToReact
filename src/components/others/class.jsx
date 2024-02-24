import c1 from '../../assests/images/c1.jpg'
import playIcon from '../../assests/images/play-icon.png'
import c2 from '../../assests/images/c2.jpg'
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Class(){
    return (
        <>
        
   

            <section className="class_section ">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-lg-8 mx-auto">
                    <div className="class_container">
                        <div className="row">
                        <div className="col-lg-9 col-md-10">
                            <div className="heading_container">
                            <h2>
                                Our Classes Videos
                            </h2>
                            <p>
                                iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n
                                ostrud exercitation ullamco laboris iusmod tempor incididunt ut labore et dolore
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="class_box-container">
                        <OwlCarousel className='owl-carousel owl_carousel1' loop margin={10} nav >
                        
                            <div className="item">
                            <div className="box">
                                <div className="img-box">
                                <img src={c1} alt="" />
                                <div className="detail-box">
                                    <button>
                                    <img src={playIcon} alt=""/>
                                    </button>
                                    <h2>
                                    Boxing
                                    </h2>
                                </div>
                                </div>
                                <div className="btn-box">
                                <a href="/">
                                    See More
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="box">
                                <div className="img-box">
                                <img src={c2} alt=""/>
                                <div className="detail-box">
                                    <button>
                                    <img src={playIcon} alt=""/>
                                    </button>
                                    <h2>
                                    Boxing
                                    </h2>
                                </div>
                                </div>
                                <div className="btn-box">
                                <a href="/">
                                    See More
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="box">
                                <div className="img-box">
                                <img src={c1} alt=""/>
                                <div className="detail-box">
                                    <button>
                                    <img src={playIcon} alt=""/>
                                    </button>
                                    <h2>
                                    Boxing
                                    </h2>
                                </div>
                                </div>
                                <div className="btn-box">
                                <a href="/">
                                    See More
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="box">
                                <div className="img-box">
                                <img src={c2} alt=""/>
                                <div className="detail-box">
                                    <button>
                                    <img src={playIcon} alt=""/>
                                    </button>
                                    <h2>
                                    Boxing
                                    </h2>
                                </div>
                                </div>
                                <div className="btn-box">
                                <a href="/">
                                    See More
                                </a>
                                </div>
                            </div>
                            </div>
                        
                        </OwlCarousel>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}