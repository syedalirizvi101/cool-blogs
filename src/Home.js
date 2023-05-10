import { useState } from 'react';
import Board from './Board';
const Home = () => {

    function handleClick(name) {
        console.log("Clicked", name)
    };

    return (
        <div>
            <Board/>
        </div>
    )
};

export default Home;