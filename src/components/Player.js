import React from 'react';
import Counter from "./Counter";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";

// const Player = (props) => {
class Player extends React.PureComponent {
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
					{this.props.children}
					{name}
				</span>
				{/*<Counter score = {score} scoreUpDown = {scoreUpDown} id = {id} />*/}
				<Counter score = {score} id = {id} />
			</div>
		);

	}

	/*
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		// console.log("nextProps in shouldComponentUpdate : " , nextProps);
		return nextProps.score !== this.props.score ? true : false;
	}
	 */

}

const mapActionToProps = (dispatch) => ({
		removePlayer : (id) => dispatch(removePlayer(id)),
	}
);

export default connect(null , mapActionToProps)(Player);


// export default Player;