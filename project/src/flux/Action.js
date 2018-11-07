//动作层

import Dispatch from './Dispatch'

var Action ={
	addItem(text){
		return {
			actionType:'Todo_LIST',
			text:text
		
		}
	},
	rm(text){
		return{
			actionType:'Delelate_List',
			text:text
		}
		
	}
}

export default Action;