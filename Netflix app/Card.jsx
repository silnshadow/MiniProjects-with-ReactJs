import React from 'react';
function Card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
            <img src={props.imgsrc}
            alt="mypic" 
            className="card_img"/>
    
            <div className="card__info">
                <span className="card__category">{props.title}</span>
                <h3 className="card_title">{props.sname}</h3>
                <a href={props.link} 
                target="_blank">
                <button className="buttonStyle">Watch Now</button></a>
            </div>
            </div>
        </div>
        <div className="aboutSeries">
            <h2>About</h2>
            {/*This code needs to be changed */}
            <p >Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want,
without a single ad – all for one low monthly price.
There's always something new to discover, 
and new TV shows and movies are added every week!</p>
        </div>
    </>        
    )
}

export default Card;