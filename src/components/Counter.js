import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => (
			<div className="counter">
				<button className="counter-action decrement" onClick = {() => props.scoreUpDown(props.id , -1)}> - </button>
				<span className = "counter-score">
					{props.score}
				</span>
				<button className="counter-action increment" onClick = {() => props.scoreUpDown(props.id , 1)}> + </button>
			</div>
		);

Counter.propTypes = {
	scoreUpDown : PropTypes.func,
	id : PropTypes.number,
	score : PropTypes.number,
}

export default Counter;