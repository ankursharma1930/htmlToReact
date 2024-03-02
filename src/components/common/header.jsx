import logo from '../../assests/images/logo.png';
import telephone from '../../assests/images/telephone.png';
import mail from '../../assests/images/mail.png';
import location from '../../assests/images/location.png';
import { Outlet, Link } from 'react-router-dom';

export default function Header(){

    return(
        <>
        
            <header className="header_section">
            <div className="container">
                <div className="header_nav">
                <a className="navbar-brand brand_desktop" href="/">
                    <img src={logo} alt="" />
                </a>
                <div className="main_nav">
                    <div className="top_nav">
                    <ul className=" ">
                        <li className="">
                        <Link to="/">
                            <img src={telephone} alt="" />
                            <span> +01 1234567890</span>
                        </Link>
                        </li>
                        <li className="">
                        <a className="" href="/">
                            <img src={mail} alt="" />
                            <span>demo@gmail.com</span>
                        </a>
                        </li>
                        <li className="">
                        <a className="" href="/">
                            <img src={location} alt="" />
                            <span>Den mark Loram ipusum</span>
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="bottom_nav">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <Link className="navbar-brand brand_mobile" to="/">
                        <img src={logo} alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav  ">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"> About </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/classes"> Classes </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blog</Link>
                            </li>
                            </ul>
                            <form className="form-inline">
                            <button className="btn ml-3 ml-lg-5 nav_search-btn" type="submit"></button>
                            </form>
                        </div>
                        </div>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            </header>
            <Outlet />
        </>
    )

}