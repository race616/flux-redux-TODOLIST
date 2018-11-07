import EventEmitter from 'events'
//拷贝
import assign from 'object-assign'
var Store = assign({},EventEmitter.prototype,{
	Todos:[],
	addValue(text){
		this.Todos.push(text)
	},
	
	change(){
		this.emit('change')
	},
	changeListen(cb){
		this.on('change',cb)
	},
	getAll(){
		//一次性得到添加后的数据
		return this.Todos;
	},
	removeValue(text){
		this.Todos.splice(text,1)
	}
	
})


export default Store;