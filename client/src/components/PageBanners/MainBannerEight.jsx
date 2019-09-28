import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ReactTypingEffect from 'react-typing-effect';
 
class MainBanner extends React.Component {
    render(){
        return (
            <div id="home" className="main-banner item-bg-two">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="main-banner-text">
                                        <h4>We Are Creative</h4>
                                        <h1>We Are 
                                            <ReactTypingEffect
                                                text={['Professional.', 'Passionate.', 'Creative.', 'Designer.', 'Unique.', 'Best.', 'Support.']}
                                                speed={200}
                                                eraseDelay={100}
                                            />
                                        </h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <AnchorLink href="#welcome" className="btn btn-primary">Get Started</AnchorLink>
                                        <AnchorLink href="#work" className="btn btn-primary view-work">View Work</AnchorLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;