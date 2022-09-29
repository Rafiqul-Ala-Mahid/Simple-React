import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import './Exercise.css';

const Exercise = () => {
    const [games, setGames] = useState([])
    
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setGames(data))
        
    },[])
    return (
        <div className='container'>
            <div className='game-list'>
                <h1>Rafiqul Ala Mahid {games.length}</h1>
                <div className="game-cart">
                    {
                    games.map(game => <Game
                        key={game.id}
                        game={game}
                    ></Game>)
                }
                </div>
            </div>
            <div className='gameBreak'>
                <h3>CSE</h3>
            </div>
        </div>
    );
};

export default Exercise;