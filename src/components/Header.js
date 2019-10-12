import React from "react";
import Stats from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const Header = (props) => {
	console.log("props in Header : " , props);
	// result : {title: "NIKE Scoreboard", joinedPlayersCount: 11}
	const { players, title , joinedPlayersCount } = props;
	return (
		<header className="header">

			<Stats/>

			{/*SCOREBOARD*/}
			<h1 className="h1">{props.title}</h1>
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
	title : 'Scoreboard',
}

const mapStateToProps = (state) => ({
	title : state.playerReducer.title ,
});

export default connect(mapStateToProps)(Header);

// export default Header;