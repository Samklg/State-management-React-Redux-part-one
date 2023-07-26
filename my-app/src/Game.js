import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from './Board';
import { resetGame } from './actions';
import calculateWinner from './calculateWinner';

function Game() {
	const dispatch = useDispatch();
	const squares = useSelector((state) => state.squares);
	const xIsNext = useSelector((state) => state.xIsNext);

	function handleResetGame() {
		dispatch(resetGame());
	}

	return (
		<div className="game">
			<div className="game-board">
				<Board />
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
