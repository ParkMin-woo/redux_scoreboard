// userReducer Action 생성
import {ADD_PLAYER, REMOVE_PLAYER, SCORE_UP_DOWN} from "./actionTypes";

export const addPlayer = (name) => ({
	// type는 필수적
	type : ADD_PLAYER,
	// payload : name,
	name : name
});

export const removePlayer = (id) => ({
	type : REMOVE_PLAYER,
	id
});

export const scoreUpDown = (id, delta) => ({
	type : SCORE_UP_DOWN,
	id,
	delta,
});