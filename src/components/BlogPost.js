import React from 'react'
import useWindowSize from './useWindowSize'


const BlogPost = ({ title, text, imgs, imgAlts }) => {

    const windowSize = useWindowSize();

    return <div className='blog-post'>
        <h3 className='blog-title'>{title} </h3>
        <p className='blog-text'>{text}</p>
        <div className='img-container'>
            {imgs.map((img, i) => <img src={img} alt={imgAlts[i]} width={windowSize.width < 600 ? "200" : "300"} height="auto" className='blog-image' />)}
        </div>
    </div>
}

export default BlogPost