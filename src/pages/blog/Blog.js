import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Blog.css';
import { Link } from 'react-router-dom';
import familypicture from '../../assets/familypicture.jpeg';
import otis from '../../assets/otis.jpeg';
import merandfiru from '../../assets/merandfiru.jpeg';
import alexandzach from '../../assets/alexandzach.jpeg';
import BlogPost from '../../components/BlogPost';

const POSTS = [{ title: 'Meet my Family 😍', text: 'Welcome to my blog page! I’m Alex and I live with my boyfriend Zach and my daughter Surie. We have a few furry friends, Otis the Miniature Poodle, Meredith Grey the Neblung Cat, and Firulais the Black Cat. We’ve made quite the home for ourselves in the sunny and beautiful city of Los Angeles. We all have our fair share of hobbies and together we make a great unit. You can find us at the stables on the weekends horse riding, or sitting in our living room enjoying tunes around the piano, or just relaxing on a Saturday night watching a family movie. One thing we all have in common is we like to spend time reading. I enjoy books about mysteries, romance, fiction, Zach enjoys books about computer science and history, and Surie enjoys books about girls empowerment and animals.', imgs: [familypicture], imgAlts: ["family portrait"] }, { title: "My Lovely Pets 🐾", text: "All my pets are adopted. Otis, the black poodle, was taken to a shelter because he was `too big`. Meredith, the grey kitty, was a pregnant stray roaming the streets of Anaheim, California before Surie and I adopted her from the local shelter. All her kittens were adopted and she was the last one left in her family. Firu just showed up at my patio one day and my daughter fed him. He decided to come back day after day and just never left.", imgs: [otis, merandfiru], imgAlts: ["Dummies", "Dummies"] }, { title: "Coding: A Love Story ❤️", text: "It's no understatement that learning to code changed my life incredibly. There are the obvious benefits, like gaining this amazing new skill that opened so many doors for me. But on my journey to tech, I never thought I'd be finding my forever person along the way. Zach was an ambitious teacher's assistant with the dream of working at a big tech firm one day. I was a single mom changing careers in her late 20s. Fast-forward to today... Zach works as a Software Engineer at Google. I am working my remote job as a Web Developer at The Salt Lake Tribune. We couldn't be happier with how our careers turned out. But more importantly, we found the love and companionship in each other that we both did not expect. We are partners who have shared values, who have achievable goals, and who love each other unconditionally. Photo cred: Surie <3", imgs: [alexandzach], imgAlts: ["alex and zach forever"] }];

function Blog() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <div className='blog-page'>
            <CSSTransition unmountOnExit in={animate} timeout={2000} classNames="page">
                <div>
                    <div className="nav-left">
                        <div className="nav-line"></div>
                        <Link className="left-link" to="/" text="Home">Home</Link>
                        <div className="nav-line"></div>
                    </div>
                    <div className='blog-section'>
                        <h1 className='blog-header'>Alex's Blog </h1>
                        <h2 className='quote'> Hello, and welcome to Alex's Blog</h2>
                        <hr style={{ margin: '5px 0 30px 0' }} />
                        {POSTS.map((post) => (<BlogPost title={post.title} text={post.text} imgs={post.imgs} imgAlts={post.imgAlts} />))}
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Blog