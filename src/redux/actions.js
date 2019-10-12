// userReducer Action 생성
export const addPlayer = (name) => ({
	// type는 필수적
	type : 'ADD_PLAYER',
	// payload : name,
	name : name
});

export const removePlayer = (id) => ({
	type : "REMOVE_PLAYER",
	id
});