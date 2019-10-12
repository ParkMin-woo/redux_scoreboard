import {combineReducers} from "redux";
import {playerReducer} from "./player";

export const allReducers = combineReducers({
	// title : "NIKE SCOREBOARD",
	playerReducer,
});
