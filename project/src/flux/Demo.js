//视图层
import React from 'react'
class Demo extends React.Component{
	constructor(props){
		super(props)
	}
	add(){
	 	this.props.name(this.refs.ipt.value)
	 	this.refs.ipt.value = ''
	 }
	del(i){
	 	this.props.att(i)
	 }
	render(){
		return (
			<div>
			
				<h1>视图层</h1>
				<input type="text" ref="ipt"/>
				
				<button onClick={this.add.bind(this)}>添加</button>
				<div>
				{
					
					this.props.info.map((item,i)=>{
						return(
							<div key={i}>
							
								{item}----   <button onClick={this.del.bind(this)}>删除</button>
							</div>
							
						)
					})
					
				}
				
				</div>
				
			</div>
		)																					
	}
	
	
}
export default Demo;