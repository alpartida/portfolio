import React from 'react';
import { CSSTransition } from 'react-transition-group';
import NavLink from '../../components/Link';
import SocialLink from '../../components/SocialLinks';
import './Homepage.css';

const Homepage = ({ animate }) => {
    return (
        <div>
            <CSSTransition unmountOnExit in={animate} timeout={2000} classNames="homepage">
                <div>
                    <div className="nav-left">
                        <div className="nav-line"></div>
                        <SocialLink class="fa fa-linkedin" link="https://www.linkedin.com/in/alexandra-partida/" />
                        <SocialLink class="fa fa-github" link="https://github.com/alpartida" />
                        <SocialLink class="fa fa-twitter" link="https://twitter.com/iamalexpartida" />
                        <div className="nav-line"></div>
                    </div>
                    <div className="info-section">
                        <h2>
                            Alex Partida
                        </h2>
                        <p>Web Developer. Designer.</p>
                        <p>Creating beautiful and engaging digital experiences in Los Angeles, CA</p>
                    </div>
                    <div className="nav-items">
                        <NavLink text="Work" />
                        <NavLink text="Blog" />
                        <NavLink text="About" />
                    </div>
                </div>
            </CSSTransition>
        </div>
    );

}

export default Homepage;