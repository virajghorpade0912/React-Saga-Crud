import React, { Component } from 'react';

import { Link, Route, BrowserRouter } from 'react-router-dom';

import App from './container/App';
import Add from './components/Add';
import Edit from './components/Edit';
import Login from './components/Login';
class Start extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<h3 />
					<Link to="/index">Home</Link>|
					{/* <Link to="/add">
						{' '}
						<button type="button" class="btn btn-success">
							Add Record
						</button>
					</Link> */}
					{/* <Link to="/Login">Login</Link> */}
					<br />
					<br />
					<Route path="/" exact component={App} />
					<Route path="/index" exact component={App} />
					<Route path="/add" exact component={Add} />
					<Route path="/edit" exact component={Edit} />
					<Route path="/Login" exact component={Login} />
				</div>
			</BrowserRouter>
		);
	}
}
export default Start;
