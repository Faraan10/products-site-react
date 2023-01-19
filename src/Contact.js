import React, { Component } from 'react'

export default class Contact extends Component {
	state={
		data:[
			{id:1,name:"ravi"},
			{id:2,name:"siva"},
			{id:3,name:"ram"},
			{id:4,name:"teja"},
			{id:3,name:"funny"},
			{id:4,name:"siri"},
			{id:4,name:"faraan"}
		],
		text:""
	}
	handleSave=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
  render() {
	//converting the data into lowercase
	let pair=this.state.text.toString().trim().toLowerCase();
	//variable fro string matched data
	let duplicateData=[];
	//logic
	if(pair && pair.length>0){
		duplicateData=this.state.data.filter((i)=>{
			//gives the data which matches with pair information
			//by converting into lowercase
			return i.name.toLowerCase().match(pair) 
		})
	}
	return (
	  <div>
		<input
			name="text" 
			className="inputfield"
			placeholder="Search"
			onChange={this.handleSave}/>
		{
			duplicateData.map((i)=>(
				<p key={i.id}>{i.name}</p>
			))
		}
	  </div>
	)
  }
}
