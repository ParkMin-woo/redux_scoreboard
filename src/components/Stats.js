import React from 'react';

const Stats = (props) => {
	console.log("props in Stats : " , props);
	let joinedPlayersCount = props.joinedPlayersCount;

	let totalScores = 0;
	props.players.forEach(player => {
		totalScores += player.score;
	});

	console.log("totalScores in Stats : " , totalScores);

	return (
		<table>
			<tbody>
			<tr>
				<td>Players :</td>
				<td>{joinedPlayersCount}</td>
			</tr>
			<tr>
				<td>Total Scores :</td>
				<td>{totalScores}</td>
			</tr>
			</tbody>
		</table>
	);
}

export default Stats;