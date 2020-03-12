import React, { Component } from 'react';
import { connect } from 'react-redux';
class Edit extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch({
			type: 'UPDATE_DATA',
			data: {
				id: e.target.id.value,
				first_name: e.target.first_name.value,
				last_name: e.target.last_name.value
			}
		});
		this.props.history.push('/index');
	};

	render() {
		console.log(this.props.data);
		return (
			<div class="container">
				<h3>Edit Record</h3>
				<form class="form-horizontal" onSubmit={this.handleSubmit}>
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
								defaultValue={this.props.data.id}
								readOnly
							/>
						</div>
					</div>

					<div class="form-group">
						<label class="control-label col-sm-2" for="name">
							First Name:
						</label>
						<div class="col-sm-10">
							<input
								type="text"
								class="form-control"
								name="first_name"
								placeholder="Enter name"
								defaultValue={this.props.data.first_name}
							/>
						</div>
					</div>

					<div class="form-group">
						<label class="control-label col-sm-2" for="name">
							Last Name:
						</label>
						<div class="col-sm-10">
							<input
								type="text"
								class="form-control"
								name="last_name"
								placeholder="Enter name"
								defaultValue={this.props.data.last_name}
							/>
						</div>
					</div>

					<input type="submit" value="Save" class="btn btn-outline-primary" />
				</form>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		data: state.selectedItem || {}
	};
}

export default connect(mapStateToProps)(Edit);
