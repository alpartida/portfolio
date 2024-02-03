import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import WorkLink from '../../components/WorkLink';
import './Work.css';
import { Link } from 'react-router-dom';

const Work = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className='work-page'>
            <CSSTransition unmountOnExit in={animate} timeout={2000} classNames="page">
                <div>
                    <div className="nav-left">
                        <div className="nav-line"></div>
                        <Link className="left-link" to="/" text="Home">Home</Link>
                        <div className="nav-line"></div>
                    </div>
                    <div className="info-section">
                        <h2>
                            WORK
                        </h2>
                        <p>This is a showcase of my best work in a variety of fields including Web Design, Web Apps, Product Design and Product Management.</p>
                        <p>The world of digital design and web development is constantly evolving and so has my role over the last few years. I’m still learning and gaining new skills every day.</p>
                    </div>
                    <div className="work-items">
                        <WorkLink text="Weather App" link='https://epic-jackson-ede428.netlify.app/' />
                        <WorkLink text="Dog Api" link='https://pensive-gates-015856.netlify.app/' />
                        <WorkLink text="Sltrib Playbook" link='http://playbook.sltrib.com' />
                        {/* <SocialLink class="fa fa-linkedin" link="https://epic-jackson-ede428.netlify.app/" />
                        <SocialLink class="fa fa-github" link="https://github.com/alpartida" />
                        <SocialLink class="fa fa-twitter" link="https://twitter.com/iamalexpartida" /> */}
                    </div>
                </div>
            </CSSTransition>
        </div>
    );

}

export default Work;