import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

// 자식에서 부모로 통신하는 예제
class App extends React.Component {

  // maxId = 4;

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      console.log("prevState.players in removePlayer : " , prevState.players);
      return { players : prevState.players.filter(item => item.id !== id) };
    });
  }

  handleScoreUpDown = (id, delta) => {
    console.log("id : " , id , "delta : " , delta);
    // id값에 따라서
    // +, - 버튼을 누르면 증가, 감소하는 함수를 만든다.
    this.setState(prevState => {
      console.log("prevState in handleScoreUpDown : " , prevState);
      prevState.players.forEach(item => {
        if(item.id === id) {
          item.score += delta;
        }
      });
      // return [prevState, ...prevState.players];
      return {players : [...prevState.players]};
    });

  }

  // 내가 만들려고 시도해본거
  // handleAddPlayer = () => {
  // 	alert("Developing!!!");
  // 	console.log("this.state.value in handleAddPlayer : " , this.state.value);
  // 	let maxId;
  // 	this.state.players.forEach(player => {
  // 		maxId = player.id;
  // 	});
  // 	console.log("maxId : ", maxId);
  // 	const element = {name : this.state.value , score : 0 , id : maxId };
  // 	this.setState(prevState => {
  // 		prevState.players.push(
  // 			element
  // 		);
  // 		alert("players in handleAddPlayer : " , prevState.players);
  // 		return {players : [...prevState.players]};
  // 	});
  // 	alert("!!!");
  // }

  // 2019.10.05에서는 이런 방법으로 추가하는 함수를 만들었음.
  // handleAddPlayer = (name) => {
  // 	this.setState(prevState => {
  // 		const players = [...prevState.players];
  // 		players.push({name , score : 0 , id : ++this.maxId});
  // 		return {players};
  // 	});
  // }

  // https://eastflag.co.kr/react/scoreboard-by-c-r-a/controlled-component/
  // 에 올라와있는 모범 답안
  handleAddPlayer = (name) => {
    this.setState(prevState => {
      const maxId = prevState.players.reduce((max, player) => {
        return max > player.id ? max : player.id;
      } , 0);

      return {
        players: [
          ...prevState.players,
          {name , score : 0 , id : maxId + 1}
        ]
      }
    });
  }

  render() {
    console.log("this.props in App : " , this.props);
    return (
      <div className="scoreboard">
        <Header joinedPlayersCount = {this.props.players.length} players = {this.props.players} />
        {this.props.players.map(item =>
          <Player
            name = {item.name}
            score = {item.score}
            key = {item.id.toString()}
            id = {item.id}
            // index = {index}
            removePlayer = {this.handleRemovePlayer}
            scoreUpDown = {this.handleScoreUpDown}
          />)
        }
        <AddPlayerForm addPlayer = {this.handleAddPlayer} />
      </div>
    );

  }
}

const mapStateToProps = (state) => ({
  players : state.playerReducer.players,
});

{/*JSON Array 형태로 나타내보기*/}
// const players = [
// 	{name : "Kim Sooyoung" , id : 1 },
// 	{name : "Park Minwoo"  , id : 2 },
// 	{name : "Kim Dongheon"  , id : 3 },
// 	{name : "Yoo Jaean" , id : 4 },
// ];

export default connect(mapStateToProps)(App);