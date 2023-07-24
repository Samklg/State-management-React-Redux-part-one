import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from './Board';
import { resetGame, playMove } from './actions';
import calculateWinner from './calculateWinner';

function Game() {
	const dispatch = useDispatch();
	const squares = useSelector((state) => state.squares);
	const xIsNext = useSelector((state) => state.xIsNext);

	function handlePlay(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		dispatch(playMove(i));
	}

	function handleResetGame() {
		dispatch(resetGame());
	}

	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
			</div>
			<div className="game-info">
				{calculateWinner(squares) ? (
					<div className="status">Победил: {calculateWinner(squares)}</div>
				) : squares.every((square) => square) ? (
					<div className="status">Ничья</div>
				) : (
					<div className="status">Ходит: {xIsNext ? 'X' : 'O'}</div>
				)}
				<button onClick={handleResetGame}>Начать игру</button>
			</div>
		</div>
	);
}

export default Game;
