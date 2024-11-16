import { NavLink } from 'react-router-dom';
import Logo from '../assets/Image/Logo/logo.png';

function NavBar() {

    return (
        <div className="container">
            <div className="row main-section-color fixed-top">
                <div className="col">
                    <div className="navbar navbar-expand-lg">
                        <div className="navbar-brand">
                            <img src={Logo} alt="logo" />
                        </div>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-lg-end" id="myNavbar">
                            <ul className="navbar-nav nav-tabs">
                                <li className="nav-item overflow-hidden">
                                    <NavLink to="/" className="nav-link anch px-4" data-toggle="tab">Home</NavLink>
                                </li>
                                <li className="nav-item overflow-hidden">
                                    <NavLink to="/about-us" className="nav-link anch px-4">About Us</NavLink>
                                </li>
                                <li className="nav-item overflow-hidden">
                                    <NavLink to="/explore-foods" className="nav-link anch px-4">Explore Foods</NavLink>
                                </li>
                                <li className="nav-item overflow-hidden">
                                    <NavLink to="/review" className="nav-link anch px-4">Reviews</NavLink>
                                </li>
                                <li className="nav-item overflow-hidden">
                                    <NavLink to="/faq" className="nav-link anch px-4">FAQ</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar