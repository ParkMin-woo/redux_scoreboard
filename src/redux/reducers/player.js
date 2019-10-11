const playerInitialState = {
	// title : "NIKE Scoreboard",
	players : [
		{name : "Kim Sooyoung" , score : 0 , id : 1 },
		{name : "Park Minwoo"  , score : 0 , id : 2 },
		{name : "Kim Dongheon" , score : 0 , id : 3 },
		{name : "Yoo Jaean" , score : 0 , id : 4 },
	],
}

export const playerReducer = (state = playerInitialState , action) => {
	return state;
}