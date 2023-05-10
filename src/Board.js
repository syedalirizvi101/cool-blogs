
import { useState } from 'react';
import Square from "./Square";

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill({
        player: null,
        highlighted: false
    }));
    console.log(squares);
    const [turnX, setTurnX] = useState(true);


    const calculateWinner = (squares) => {
        let winConfigurations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];


        for (let i = 0; i < winConfigurations.length; i++) {
            let [a, b, c] = winConfigurations[i];

            if (squares[a].player && squares[a].player === squares[b].player && squares[b].player === squares[c].player) {
                return [a,b,c];
            }
        }

        return null;
    };

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = `Winner: ${winner}`;
    }
    else if(!winner && squares.every((square)=>square.player != null)) {
        status = 'Its a Draw';
    }
    else {
        status = 'Turn: ' + (turnX ? "X" : "O");
    }

    const handleSquareClick = (i) => {
        const squaresCopy = squares.slice();

        if (squares[i].player || calculateWinner(squares)) {
            return;
        }

        if (turnX) {

            squaresCopy[i].player = "X";
        }
        else {
            squaresCopy[i].player = "0";
        }

        setTurnX(!turnX);
        setSquares(squaresCopy);
    };

    return (
        <div>
            <h1>{status}</h1>
            <div className="boardGrid">
                <Square value={squares[0].player} onSquareClick={() => {
                    handleSquareClick(0);
                }} />
                <Square value={squares[1].player} onSquareClick={() => {
                    handleSquareClick(1);
                }} />
                <Square value={squares[2].player} onSquareClick={() => {
                    handleSquareClick(2);
                }} />
                <Square value={squares[3].player} onSquareClick={() => {
                    handleSquareClick(3);
                }} />
                <Square value={squares[4].player} onSquareClick={() => {
                    handleSquareClick(4);
                }} />
                <Square value={squares[5].player} onSquareClick={() => {
                    handleSquareClick(5);
                }} />
                <Square value={squares[6].player} onSquareClick={() => {
                    handleSquareClick(6);
                }} />
                <Square value={squares[7].player} onSquareClick={() => {
                    handleSquareClick(7);
                }} />
                <Square value={squares[8].player} onSquareClick={() => {
                    handleSquareClick(8);
                }} />
            </div>
        </div>


    );
}

export default Board;