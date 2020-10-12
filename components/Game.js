import React,{useState} from "react"
import Board from "./Board"
import { calculateWinner } from "./helpers"


const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? '❌'  : '⚫' ;
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    };

    const renderMoves = () => (
        <button className="btn ml-3" style={{fontSize:"40px",padding:"0px"}} onClick={()=>setBoard(Array(9).fill(null))}>
            🔄 
        </button>
    )

    return (
        <>
        <h1 style={{textAlign:"center",color:"cornsilk"}}>Let's Play! </h1>
        <Board squares={board} onClick={handleClick}/>
        <div className="result">
            <p>{winner ? "Winner 🎉" +winner : "Next Move : "+ (xIsNext?'❌' :'⚫' ) }</p>
            {renderMoves()}
        </div>
        </>
    )
}

export default Game;