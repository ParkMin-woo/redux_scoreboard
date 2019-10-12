import React from 'react';
import {connect} from "react-redux";

import styles from '../pages/scoreboard/Scoreboard.module.css';
import className from "classnames";

const Stats = (props) => {
	console.log("props in Stats : " , props);
	// let joinedPlayersCount = props.joinedPlayersCount;
	let joinedPlayersCount = props.players.length;

	let totalScores = 0;
	props.players.forEach(player => {
		totalScores += player.score;
	});

	console.log("totalScores in Stats : " , totalScores);

	return (
		<table  className={styles.stats}>
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

const mapStateToProps = (state) => ({
	players : state.playerReducer.players,
});

export default connect(mapStateToProps)(Stats);

// export default Stats;