import React from 'react';
import Square from './Square';
import { useDispatch, useSelector } from 'react-redux';
import { playMove } from './actions';
import calculateWinner from './calculateWinner';

function Board() {
	const dispatch = useDispatch();
	const squares = useSelector((state) => state.squares);
	const xIsNext = useSelector((state) => state.xIsNext);

	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		dispatch(playMove(i));
	}

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = 'Победил: ' + winner;
	} else if (squares.every((square) => square)) {
		status = 'Ничья';
	} else {
		status = 'Ходит: ' + (xIsNext ? 'X' : 'O');
	}

	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-row">
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-row">
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
		</>
	);
}

export default Board;
