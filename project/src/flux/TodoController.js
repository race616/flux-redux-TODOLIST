//顶层容器
import React from 'react'


import Demo from './Demo'
import Action from './Action'
import Dispatch from './Dispatch'
import Store from './Store'
 class TodoController extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			arr:Store.getAll()
		}
		this.onchange = this.onchange.bind(this)
	}
	tap(text){
		//子组件向父组件传值，向子组件标签上绑定自定义函数，函数参数是要想父组件要推送的数据，在父组件内部通过自定义函数参数接收传递的值，这里text是形参，向自定义函数传入形参，并向函数传入实参this.refs.ipt.value
		
		Dispatch.dispatch(Action.addItem(text));
		
		
	}
	remove(i){
		Dispatch.dispatch(Action.rm(i));
	}
	//定义一个可以最新拿到数据的函数
	onchange(){
		this.setState({arr:Store.getAll()})
	}
	componentDidMount(){
		Store.changeListen(this.onchange)
	}
	render(){
		return (
			<div>
			
				<h1>顶层容器----TODOLIST完整版</h1>
				
				<Demo name={this.tap.bind(this)} info={this.state.arr} att={this.remove.bind(this)}/>
			</div>
		)
	}
	
	
}
 export default TodoController;
