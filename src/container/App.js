import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Add from '../components/Add';
import './App.css';
import Login from '../components/Login';
class App extends React.Component {
	delete(e) {
		var id = e.target.getAttribute('data-key');
		this.props.dispatch({
			type: 'DELETE_DATA',
			id: id
		});
		this.props.history.push('/');
	}

	edit(e) {
		var id = e.target.getAttribute('data-key');
		this.props.dispatch({
			type: 'EDIT_DATA',
			id: id
		});
		this.props.history.push('/edit');
	}

	onhandleclick() {
		this.props.dispatch({
			type: 'CHECK',
			isclick: true
		});
		this.props.history.push('/add');
	}

	render() {
		let v = this.props.isclick;
		console.log('console log login in App ->>>' + this.props.checkLogin);
		let c = this.props.checkLogin;

		if (c) {
			if (v) {
				return (
					<div>
						<Add />
					</div>
				);
			} else {
				return (
					<div class="container">
						<div class="row">
							<h3>Employee Details</h3>

							<div class="col-md-10 col-md-offset-1">
								<div class="panel panel-default panel-table">
									<div class="panel-heading">
										<div class="row">
											<div class="col col-xs-6">
												<h3 class="panel-title" />
											</div>
											<div class="col col-xs-6 text-right">
												<button
													type="button"
													class="btn btn-sm btn-primary btn-create"
													onClick={this.onhandleclick.bind(this)}
												>
													Add Record
												</button>
											</div>
											<br />
											<br />
										</div>
									</div>
									<div className="panel-body">
										<table class="table table-striped table-bordered table-list">
											<thead align="center">
												<tr>
													<th>
														<em class="fa fa-cog" />
													</th>
													<th class="hidden-xs">ID</th>
													<th>First Name</th>
													<th>Last Name</th>
												</tr>
											</thead>
											<tbody>
												{this.props.data.map((s, index) => (
													<tr key={s.id} align="center">
														<td>
															<a
																class="btn btn-info fas fa-edit"
																onClick={this.edit.bind(this)}
																data-key={s.id}
															/>
															&nbsp;&nbsp;
															<a
																class="btn btn-danger fa fa-trash"
																onClick={this.delete.bind(this)}
																data-key={s.id}
															/>
														</td>

														<td>{s.id}</td>

														<td>{s.first_name}</td>
														<td>{s.last_name}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			}
		} else {
			return <Login />;
		}
	}
}

function mapStateToProps(state) {
	return {
		data: state.data,
		isclick: state.isclick,
		checkLogin: state.checkLogin
	};
}

export default connect(mapStateToProps)(App);
