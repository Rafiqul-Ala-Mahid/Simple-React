import React from 'react';
import './Game.css'
const Game = (props) => {
    const { handleAddToList } = props.game
    const { name, img, details, age, time } = props.game
    return (
        <div className='element'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{details}</p>
            <h5>For Age: {age}</h5>
            <h5>Time required: {time}s</h5>
            <button onClick={()=>props.handleAddToList(props.game)} className='btn'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Game;