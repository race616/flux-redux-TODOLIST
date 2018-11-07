//派发器事件调度中心
import {Dispatcher} from 'flux';
import Store from './Store'
var Dispatch = new Dispatcher();

 Dispatch.register((action)=>{
 	switch (action.actionType){
 		case 'Todo_LIST':
 		//命令store进行操作
 			Store.addValue(action.text) ;
 			Store.change()
 			break;
 		case 'Delelate_List':
 		//命令store进行操作
 			Store.removeValue(action.text)
 			Store.change()
 			break;
 	}
 })



export default Dispatch;