import calculateWinner from './calculateWinner';
import { PLAY_MOVE, RESET_GAME } from './actions';

const initialState = {
	squares: Array(9).fill(null),
	xIsNext: true,
};

function gameReducer(state = initialState, action) {
	switch (action.type) {
		case PLAY_MOVE:
			if (state.squares[action.payload] || calculateWinner(state.squares)) {
				return state;
			}
			const nextSquares = state.squares.slice();
			nextSquares[action.payload] = state.xIsNext ? 'X' : 'O';
			return {
				...state,
				squares: nextSquares,
				xIsNext: !state.xIsNext,
			};
		case RESET_GAME:
			return initialState;
		default:
			return state;
	}
}

export default gameReducer;
