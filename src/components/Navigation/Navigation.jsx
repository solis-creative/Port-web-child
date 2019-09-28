import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/style.scss';
import '../../assets/css/responsive.scss';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, withRouter  } from 'react-router-dom';
import logo from '../../assets/images/logo-top.png';

 
class Navigation extends React.Component {
    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    // componentDidMount() {
    //     let elementId = document.getElementById("navbar");
    //     document.addEventListener("scroll", () => {
    //         if (window.scrollY > 170) {
    //             elementId.classList.add("is-sticky");
    //             window.history.pushState("", document.title, window.location.pathname);
    //         } else {
    //             elementId.classList.remove("is-sticky");
    //         }
    //     });
    //     window.scrollTo(0, 0);

    //     if (!(window.location.pathname === '/blog' || window.location.pathname === '/blog-details')){
    //         let mainNavLinks = document.querySelectorAll("nav ul li a");

    //         window.addEventListener("scroll", () => {
    //             let fromTop = window.scrollY;
            
    //             mainNavLinks.forEach(link => {
    //             let section = document.querySelector(link.hash);
            
    //                 if (
    //                     section.offsetTop <= fromTop &&
    //                     section.offsetTop + section.offsetHeight > fromTop
    //                 ) {
    //                     link.classList.add("active");
    //                 } else {
    //                     link.classList.remove("active");
    //                 }
    //             });
    //         });
    //     }
    // }

    goToId = (e) => {
        window.location.hash = e;
        window.location.reload(true);
    }

    renderMenus = () => {
        if (window.location.pathname === '/blog' || window.location.pathname === '/blog-details' || window.location.pathname === '/blog-details-pd'){
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/#home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/#welcome"
                            onClick={() => this.goToId("/#welcome")}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  
                            className="nav-link" 
                            to="/#services"
                            onClick={() => this.goToId("/#services")}
                        >Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/#work"
                            onClick={() => this.goToId("/#work")}
                        >Work</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/#contact"
                            onClick={() => this.goToId("/#contact")}
                        >Contact</Link>
                    </li>
                </ul>
            );
        }

        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#home">Home</AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#welcome">About</AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#services">Services</AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#work">Work</AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#blog">Blog</AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#contact">Contact</AnchorLink>
                </li>
            </ul>
        );
    }

    render(){
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light header-sticky">
                <div className="container">
                    <Link 
                        className="navbar-brand" 
                        to="/"
                        onClick={() => window.location.reload()}
                    >
                        <div className="nav-title"><span>SOLIS</span> Creative</div>
                        <img className="nav-img" src={logo} />
                    </Link>
                    <button 
                        onClick={this.toggleNavbar}
                        className={classTwo} 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={classOne} id="navbarSupportedContent">
                        {this.renderMenus()}
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default withRouter(Navigation);