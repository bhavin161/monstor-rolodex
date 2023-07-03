import React from "react";
import './car.style.css';

export const Card = props =>{
    // console.log(props.monstor.name);
    return <div className="Card-container">
        <img src={`https://robohash.org/${props.monstor.id}?set=set1&size=180x180`}/>
        <h1>{props.monstor.name}</h1>
        <p>{props.monstor.email}</p></div>
}