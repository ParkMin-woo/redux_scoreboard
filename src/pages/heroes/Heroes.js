import React from 'react';
import axios from 'axios';

export class Heroes extends React.Component {

	componentDidMount() {
		// body.data에 원하는 결과값이 있다.
		this.getHeroes();
	}

	// async를 붙이면 비동기가 된다.
	// async 안에는 반드시 await가 한 개 이상 있어야 된다.
	// await 뒤에는 반드시 Promise 객체가 와야 한다.
	// await는 결과가 올때까지 기다렸다가 결과값을 리턴한다.
	async getHeroes() {
		const body = await axios.get('http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000/api/user/heroes?start_index=11&page_size=20');
		console.log("body : " , body);
	}

	render() {
		return (
			<div>
				Heroes WORKS!!
			</div>
		);
	}
}