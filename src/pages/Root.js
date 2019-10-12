import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./heroes/Heroes";
import Scoreboard from "./scoreboard/Scoreboard";
import {Menu} from "./Menu";

// 최초 loading되는 Component
export class Root extends React.Component {
	render() {
		return (
			<BrowserRouter>
				{/*<p>공통메뉴영역</p>*/}
				<Menu />
				{/* Path와 반드시 일치하는 것이 아니라 시작하는 URL로 Mapping하게 된다. */}
				<Switch>
					<Route exact path = "/" component = {Home}></Route>
					<Route path = "/heroes" component = {Heroes}></Route>
					<Route path = "/scoreboard" component = {Scoreboard}></Route>
				</Switch>
			</BrowserRouter>
		);
	}
}