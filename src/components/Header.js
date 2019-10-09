import React from "react";
import Stats from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';

const Header = (props) => {
	console.log("props in Header : " , props);
	// result : {title: "NIKE Scoreboard", joinedPlayersCount: 11}
	const { players, title , joinedPlayersCount } = props;
	return (
		<header className="header">

			<Stats joinedPlayersCount = {joinedPlayersCount} players = {players}/>

			{/*SCOREBOARD*/}
			<h1 className="h1">{title}</h1>
			{/*<span className="stats">PLAYERS : {props.joinedPlayersCount}</span>*/}

			<Stopwatch />
		</header>
	);
}

Header.propTypes = {
	// players : PropTypes.arrayOf(PropTypes.object),
	players : PropTypes.arrayOf(PropTypes.shape({
		id : PropTypes.number,
		score : PropTypes.number,
		name : PropTypes.string,
	})),
	title : PropTypes.string,
	joinedPlayersCount : PropTypes.number,
}

Header.defaultProps = {
	title : 'Ordinary Scoreboard',
}

export default Header;