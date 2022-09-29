import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import './Exercise.css';

const Exercise = () => {
    const [games, setGames] = useState([])
    
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setGames(data))
        
    }, [])
    const handleAddToList = (games) => {
        console.log(games)
    }
    return (
        <div className='container'>
            <div className='game-list'>
                <h1>Select Favourite Games</h1>
                <h3>Top most popular games {games.length}</h3>
                <div className="game-cart">
                    {
                    games.map(game => <Game
                        key={game.id}
                        game={game}
                        handleAddToList={handleAddToList}
                    ></Game>)
                }
                </div>
            </div>
            <div className='gameBreak'>
                <h3>CSE</h3>
                <div>
                    <h3>Exercise Details</h3>
                    <div>
                        <h4>Exercise time</h4>
                    </div>
                    <div>
                        <h4>Break time</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise;