import React from 'react';
import PropTypes from 'prop-types';
import {scoreUpDown} from "../redux/actions";
import {connect} from "react-redux";
import classNames from 'classnames'

import styles from '../pages/scoreboard/Scoreboard.module.css';

const Counter = (props) => (
			<div className={styles.counter}>
				<button className = {classNames(styles['counter-action'] , styles.decrement)} onClick = {() => props.scoreUpDown(props.id , -1)}> - </button>
				<span className = {styles['counter-score']}>
					{props.score}
				</span>
				<button className={classNames(styles['counter-action'] , styles.increment)} onClick = {() => props.scoreUpDown(props.id , 1)}> + </button>
			</div>
		);

Counter.propTypes = {
	scoreUpDown : PropTypes.func,
	id : PropTypes.number,
	score : PropTypes.number,
}

const mapActionToProps = (dispatch) => ({
		scoreUpDown : (id, delta) => dispatch(scoreUpDown(id, delta)),
	}
);

export default connect(null , mapActionToProps)(Counter);

// export default Counter;