import React from 'react'
import "./Card.Module.css";

function Card(props) {
    return(
        <div className='card'>
            
            <div className='innerCard'>
                <img src={props.image} alt="User1" className='image' />
                <p>{props.designation}</p>
                <h4>{props.name}</h4>
                <small>{props.description}</small>
            </div>
            
        </div>
    );
};       
export default Card;


