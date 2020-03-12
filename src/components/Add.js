import React, { Component } from 'react';

import { connect } from 'react-redux';

class Add extends React.Component {
	constructor() {
		super();
		this.state = {
			id: '',
			first_name: '',
			last_name: ''
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch({
			type: 'ADD_DATA',
			data: this.state
		});

		this.props.history.push('/');
	};

	render() {
		return (
			<div class="container">
				<h3>Add Record</h3>
				<form class="form-horizontal">
					<div class="form-group">
						<label class="control-label col-sm-2" for="id">
							ID:
						</label>
						<div class="col-sm-10">
							<input
								type="text"
								class="form-control"
								name="id"
								placeholder="Enter id"
								value={this.state.id}
								onChange={this.handleChange}
							/>
						</div>
					</div>

					<div class="form-group">
						<label class="control-label col-sm-2" for="name">
							Name:
						</label>
						<div class="col-sm-10">
							<input
								type="text"
								class="form-control"
								name="first_name"
								placeholder="Enter name"
								value={this.state.first_name}
								onChange={this.handleChange}
							/>
						</div>
					</div>

					<div class="form-group">
						<label class="control-label col-sm-2" for="name">
							Name:
						</label>
						<div class="col-sm-10">
							<input
								type="text"
								class="form-control"
								name="last_name"
								placeholder="Enter name"
								value={this.state.last_name}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<button onClick={this.handleSubmit} class="btn btn-outline-success">
						Click ME!!!
					</button>
				</form>
			</div>
		);
	}
}

export default connect()(Add);
