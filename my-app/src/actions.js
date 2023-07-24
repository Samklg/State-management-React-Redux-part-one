export const PLAY_MOVE = 'PLAY_MOVE';
export const RESET_GAME = 'RESET_GAME';

export function playMove(i) {
	return { type: PLAY_MOVE, payload: i };
}

export function resetGame() {
	return { type: RESET_GAME };
}
