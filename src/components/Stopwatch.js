import React from 'react';

export class Stopwatch extends React.Component {

	tickRef;

	constructor() {
		super();
		this.state = {
			isRunning : false,
			timer : 0,
		}
	}

	handleStopWatch = () => {
		this.setState(prevState => ({isRunning : !prevState.isRunning}));
		console.log("this.state.isRunning in handleStopWatch : " , this.state.isRunning);
	}

	render() {
		return (
			<div className = "stopwatch">
				<h2>Stopwatch</h2>
				<span className = "stopwatch-time">{this.state.timer}</span>
				<button onClick={this.handleStopWatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}

	tick = () => {
		if(this.state.isRunning) {
			this.setState(prevState => ({timer : prevState.timer + 1}));
		}
	}

	handleReset = () => {
		// this.setState(prevState => ({timer : 0}));
		this.setState({timer : 0});
		console.log("this.state.timer in handleReset : " , this.state.timer);
	}

	// DOM이 렌더링 된 직후에 호출되는 라이프 사이클
	// 3rd 라이브러리 로딩, 네트워크 호출
	componentDidMount() {
		this.tickRef = setInterval(this.tick, 1000);
	}

	// DOM이 파괴되기 직전에 호출되는 라이프 사이클
	// 리소스 해제 등등
	componentWillUnmount() {
		clearInterval(this.tickRef);
	}
}