import React from 'react';

class AddPlayerForm extends React.Component {

	textInput = React.createRef();

	handleSubmit = (e) => {
		// e.stopPropagation();
		// Reloading되는 기본 이벤트를 막아줌.
		e.preventDefault();

		const form = document.getElementById("form");
		const player = document.getElementById("player");

		console.log(form.checkValidity());
		console.log(player.validity.valid);

		this.props.addPlayer(this.textInput.current.value);
		e.currentTarget.reset();
		// this.setState({value : ''});
	}

	render() {
		console.log("this.props in AddPlayerForm : " , this.props);
		return (
			<form id = "form" className="form" onSubmit={this.handleSubmit}>
				<input id ="player" className="input" type = "text" placeholder="Enter a Player's Name" ref = {this.textInput} required />
				<input className="input" type = "submit" value = "Add Player" />
			</form>
		);
	}
}

export default AddPlayerForm