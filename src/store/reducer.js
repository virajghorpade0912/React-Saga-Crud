const intialState = {
	data: [],
	error: '',
	isclick: false,
	fields: { username: 'viraj', password: 'viraj' },
	checkLogin: false,
	selectedItem: ''
};

const dataReducer = (state = intialState, action) => {
	console.log(action);
	switch (action.type) {
		case 'FETCH_DATA':
			console.log(action.value);
			return {
				data: [ ...action.value ],
				checkLogin: true
			};

		case 'ADD_DATA_ASYNC':
			console.log('--->' + action.value);
			return {
				data: [ ...action.value ],
				checkLogin: true
			};

		case 'DELETE_DATA_ASYNC':
			console.log('in reducer DELETE_DATA', action.value);
			return {
				data: [ ...action.value ],
				checkLogin: true
			};

		case 'EDIT_DATA_ASYNC':
			console.log('in reducer EDIT_DATA-->', action.value);
			return {
				...state,
				selectedItem: action.value,
				checkLogin: true
			};
		case 'LOGIN':
			console.log('REducer login ' + state.fields.username);
			console.log(action.fields.username);
			if (state.fields.username === action.fields.username && state.fields.password === action.fields.password) {
				console.log('Sucessful');
				return {
					...state,
					checkLogin: true
				};
			} else {
				return {
					...state,
					error: 'Please enter the valid details',
					checkLogin: false
				};
			}

		default:
			return state;
	}
};
export default dataReducer;
