import React from 'react'
import Action from './Action'
import Store from './Store'
class Demo extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			arr:Store.getState()
		}
		this.updatedata = this.updatedata.bind(this)
	}
	add(){
	 	Store.dispatch(Action.addItem(this.refs.ipt.value));
	 	this.refs.ipt.value = ''
	 }
	del(i){
		Store.dispatch(Action.remove(i))
	}
	
	render(){
		return (
			<div>
			
				<h1>视图层--redux</h1>
				<input type="text" ref="ipt"/>
				
				<button onClick={this.add.bind(this)}>添加</button>
				<div>
				
				{
					this.state.arr.map((item,i)=>{
						return(
							<div key={i}>
								{item}----<button onClick={this.del.bind(this,i)}>删除</button>
							</div>
						)
					})
				}
				</div>
				
			</div>
		)																					
	}
	
	updatedata(){
		this.setState({arr:Store.getState()})
	}
	componentDidMount(){
		Store.subscribe(this.updatedata)
	}
	
}
export default Demo;