import React from 'react'

const BlogPost = ({ title, text, imgs, imgAlts }) => {

    return <div className='blog-post'>
        <h3 className='blog-title'>{title} </h3>
        <p className='blog-text'>{text}</p>
        <div className='img-container'>
            {imgs.map((img, i) => <img src={img} alt={imgAlts[i]} width="300" height="auto" className='blog-image'/>)}
        </div>
    </div>
}

export default BlogPost