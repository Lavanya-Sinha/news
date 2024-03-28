import React from 'react'

function News(props) {
    console.log (props)
  return (
    <div className='news'>
    <div className="news-img">
        <img src={props.article.urlToImage} alt="" />
    </div>
    <h1>{props.article.title}</h1>
    <p>{props.article.description?.substring(0,100)+"..."} <a href={props.article.url} target="__blank">Read more</a></p>
    <div className="source">
      <p>Author: {props.article.author?.substring(0,20)}</p>
        <p>{props.article.source.name}</p>
    </div>
    </div>
  )
}

export default News
