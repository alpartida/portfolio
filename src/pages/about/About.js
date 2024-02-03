import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './About.css';
import { Link } from 'react-router-dom';
import alexpicture from '../../assets/alexpicture.jpeg';
import AlexPartidaResume from '../../assets/AlexPartidaResume.pdf';

const About = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <div className='about-page'>
            <CSSTransition unmountOnExit in={animate} timeout={2000} classNames="page">
                <div>
                    <div className="nav-left">
                        <div className="nav-line"></div>
                        <Link className="left-link" to="/" text="Home">Home</Link>
                        <div className="nav-line"></div>
                    </div>
                    {/* <div className="container"> */}
                    <div className='about-section'>
                        <img className="profile-image" src={alexpicture} alt="alex portrait" />
                        <h1 className='about-title'>
                            About
                        </h1>
                        <span className="quote">From Apparel to Tech</span>
                        <p className='paragraph'>Hi 👋, all! Welcome to my portfolio page. I am an apparel production manager turned web developer. I graduated a 6 month coding bootcamp and have also completed SheCodes for additional learning on web development. I have fully made my transition into tech and am currently working as Web Developer at The Salt Lake Tribune. The Tribune being a non-profit news organication, make me me feel like my work is impactful and adds meaning to what I do everyday. Not to mention, this new career has made an impact to my life and the at of my daughter's. She sees her mom making it everyday in a field where there isnt a lot of female representation. Hopefully I inspire her to do the same one day!</p>
                        <br></br>
                        <p>I am experienced in e-commerce with a demonstrated understanding of all things web. Skilled in WordPress, HTML, CSS, Javascript, Adobe Photoshop, and React. I've built a few apps, such as a weather app, dog api app, github-clone app, and many more. Check out my projects page for a full list of my applications and feel free to follow me on github.</p>
                        <br></br>
                        <p>For more information on my experience, download my resume below.</p>
                        <br></br>
                        <a download href={AlexPartidaResume}>
                            <button className='button'>My CV</button>
                        </a>
                    </div>
                </div>
                {/* </div> */}
            </CSSTransition>
        </div>
    );

}

export default About;