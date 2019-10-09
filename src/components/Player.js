import React from 'react';
import Counter from "./Counter";
import PropTypes from 'prop-types';

// const Player = (props) => {
class Player extends React.Component {
	static propTypes = {
		removePlayer : PropTypes.func,
		id : PropTypes.number,
	}

	render() {
		console.log(this.props.name , " rendered");
		const {removePlayer , id , name, score , scoreUpDown} = this.props;
		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => {removePlayer(id)}} > X </button>
					{name}
				</span>
				<Counter score = {score} scoreUpDown = {scoreUpDown} id = {id} />
			</div>
		);

	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		// console.log("nextProps in shouldComponentUpdate : " , nextProps);
		return nextProps.score !== this.props.score ? true : false;
	}

}

export default Player;