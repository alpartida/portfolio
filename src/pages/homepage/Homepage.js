import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import NavLink from '../../components/Link';
import SocialLink from '../../components/SocialLinks';
import './Homepage.css';

const Homepage = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div>
            <CSSTransition unmountOnExit in={animate} timeout={2000} classNames="page">
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
                        <p>Web Developer. Software Engineer. Designer.</p>
                        <p>Creating beautiful and engaging digital experiences in Los Angeles, CA</p>
                        <p>Currently working as a web developer at The Salt Lake Tribune.</p>
                    </div>
                    <div className="nav-items">
                        <NavLink text="Work" link='/work' />
                        <NavLink text="Blog" link='/blog' />
                        <NavLink text="About" link='/about' />
                    </div>
                </div>
            </CSSTransition>
        </div>
    );

}

export default Homepage;