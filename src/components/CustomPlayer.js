import React from 'react';
import Player from "./Player";

export const CustomPlayer = (props) => {
	console.log("props in CustomPlayer : " , props);
	return (
		<Player {...props}>

		</Player>
	);
}