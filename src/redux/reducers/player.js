import {ADD_PLAYER, REMOVE_PLAYER, SCORE_UP_DOWN} from "../actionTypes";

const playerInitialState = {
	// title : "NIKE Scoreboard",
	players : [
		{name : "Kim Sooyoung" , score : 0 , id : 1 },
		{name : "Park Minwoo"  , score : 0 , id : 2 },
		{name : "Kim Dongheon" , score : 0 , id : 3 },
		{name : "Yoo Jaean" , score : 0 , id : 4 },
	],
}

let maxId = 4;

export const playerReducer = (state = playerInitialState , action) => {
	let players;
	switch (action.type) {
		case ADD_PLAYER :
			console.log('addPlayer');
			players = [...state.players];
			players.push({name : action.name , id : ++maxId, score : 0});
			return {
				...state ,
				players ,
			};
		case REMOVE_PLAYER :
			console.log("removePlayer");
			// const players2 = state.players.filter(player => player.id !== action.id );
			players = state.players.filter(player => player.id !== action.id );
			return {
				...state,
				players ,
			};
		case SCORE_UP_DOWN :
			console.log("scoreUpDown" , action.id, action.delta);
			players = [...state.players];
			/*
			const player = players.find(player => player.id === action.id);
			player.score += action.delta;
			 */

			players.forEach(player => {
				if(player.id === action.id) {
					player.score += action.delta;
				}
			});

			return {
				...state,
				players ,
			};
	}
	return state;
}