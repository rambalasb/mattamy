// TODO: Update reducer

const LookupReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_BASIC_DATA':
			return {
				...state,
				...action.payload,
			}
		case 'UPDATE_DIVISION_ARRAY':
			return {
				...state,
				divisions: action.payload,
			}
		default:
			return state
	}
}

export default LookupReducer
