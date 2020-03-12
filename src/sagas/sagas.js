import { put, call, takeEvery } from 'redux-saga/effects';

function fetchIncrement() {
	return fetch('http://localhost:9000/persons')
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			return data;
		})
		.catch((err) => console.log(err));
}

function* addEmployeeAsync(action) {
	fetch('http://localhost:9000/persons', {
		method: 'POST',
		body: JSON.stringify(action.data),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	})
		.then((response) => response.json())
		.then((result) => {
			console.log('Success:', result);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
	yield put({ type: 'ADD_DATA_ASYNC', value: yield call(fetchIncrement) });
}

function* deleteEmployeeAsync(action) {
	console.log(action.id);
	fetch(`http://localhost:9000/persons/${action.id}`, {
		method: 'GET',
		headers: {
			//  'Content-Type': 'application/json',
			//  'Accept': 'application/json',
			//  "Access-Control-Allow-Origin" : "*",
			// "Access-Control-Allow-Credentials" : true
		}
	})
		.then((response) => response.json())
		.then((result) => {
			console.log('Success:', result);
		})
		.catch((error) => {
			console.error('Error:', error);
		})
		.then(yield put({ type: 'DELETE_DATA_ASYNC', value: yield call(fetchIncrement) }));
}

function* editEmployeeAsync(action) {
	let result = yield call(fetchIncrement);

	let selectedItem = result.find((d) => d.id == action.id);

	console.log('--->' + selectedItem);
	yield put({ type: 'EDIT_DATA_ASYNC', value: selectedItem });
}

function* UpdateEmployeeAsync(action) {
	fetch(`http://localhost:9000/persons/${action.data.id}`, {
		method: 'POST',
		body: JSON.stringify(action.data),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	})
		.then((response) => response.json())
		.then((result) => {
			console.log('Success:', result);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
	yield put({ type: 'ADD_DATA_ASYNC', value: yield call(fetchIncrement) });
}

export default function* watchData() {
	yield put({ type: 'FETCH_DATA', value: yield call(fetchIncrement) });
	yield takeEvery('ADD_DATA', addEmployeeAsync);
	yield takeEvery('DELETE_DATA', deleteEmployeeAsync);
	yield takeEvery('EDIT_DATA', editEmployeeAsync);
	yield takeEvery('UPDATE_DATA', UpdateEmployeeAsync);
}
