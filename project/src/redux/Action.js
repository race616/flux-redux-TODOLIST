
var Action ={
	addItem(text){
		return {
			type:'ADD_LIST',
			text:text
		}
	},
	remove(text){
		return {
			type:'REMOVE_LIST',
			text:text
		}
	}
}

export default Action;