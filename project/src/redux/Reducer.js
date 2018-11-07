
var Reducer = function(state,action){
	if(typeof state == 'undefined'){
		return [];
	}
	switch (action.type){
		case "ADD_LIST":
			// 
			state.push(action.text);
			return state;
			break;
		case "REMOVE_LIST":
			// 
			state.splice(action.text,1);
			return state;
			break;
	
		default:
			return state;
			break;
	}
}

export default Reducer;