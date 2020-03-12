import React from 'react';

//import Info from './Info';
import './Login.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			fields: { username: '', password: '' },
			errors: '',
			isadmin: false
		};
	}

	// handleChange = (e) => {
	// 	this.setState({
	// 		[e.target.name]: e.target.value
	// 	});
	// };

	handleChange = (e) => {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch({
			type: 'LOGIN',
			fields: this.state.fields
		});

		console.log('in handle submit--->' + this.props.error);
		if (this.state.fields.username == 'viraj' && this.state.fields.password == 'viraj') {
			this.props.history.push('/Index');
		} else {
			this.props.history.push('/');
		}
	};

	render() {
		console.log('--->' + this.props.error);

		if (this.props.error == '') {
			return (
				<div id="main-registration-container">
					<div id="register">
						<h3>Login admin</h3>
						<form method="post" name="userRegistrationForm" onSubmit={this.handleSubmit}>
							<label>Name</label>
							<input
								type="text"
								name="username"
								value={this.state.fields.username}
								onChange={this.handleChange}
							/>

							<label>Password</label>
							<input
								type="password"
								name="password"
								value={this.state.fields.password}
								onChange={this.handleChange}
							/>

							<input type="submit" className="button" value="Login" />
						</form>
					</div>
				</div>
			);
		} else {
			return (
				<div id="main-registration-container">
					<div id="register">
						<h3>Login admin</h3>
						<form method="post" name="userRegistrationForm" onSubmit={this.handleSubmit}>
							<label>Name</label>
							<input
								type="text"
								name="username"
								value={this.state.fields.username}
								onChange={this.handleChange}
							/>
							<div className="errorMsg">{this.props.error}</div>

							<label>Password</label>
							<input
								type="password"
								name="password"
								value={this.state.fields.password}
								onChange={this.handleChange}
							/>
							<div className="errorMsg">{this.props.error}</div>
							<input type="submit" className="button" value="Login" />
						</form>
					</div>
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		fields: state.fields,
		error: state.error
	};
}

export default connect(mapStateToProps)(Login);
