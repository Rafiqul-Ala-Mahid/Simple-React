import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Game from '../Game/Game';
import './Exercise.css';

const Exercise = () => {
    const [games, setGames] = useState([])
    const [cart, setCart]=useState([])
    
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setGames(data))
        
    }, [])
    const handleAddToList = (game) => {
        console.log(game.time)
        const newCart = [...cart, game]
        setCart(newCart)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Exercise;