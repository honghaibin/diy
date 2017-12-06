import React from 'react'
import {Card, AutoComplete} from 'antd'

class AutoCompleteComponent extends React.Component{
	constructor(){
		super(...arguments)

		this.state={
			result:[]
		}
	}
	handleSearch=(value)=>{
		let result;
	    if (!value || value.indexOf('@') >= 0) {
	      result = [];
	    } else {
	      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
	    }
	    this.setState({ result });
	}
	render(){
		const { result } = this.state;
	    const children = result.map((email) => {
	      	return <AutoComplete.Option key={email}>{email}</AutoComplete.Option>;
	    });
		return (
			<Card title="输入邮箱">
				<AutoComplete
					onSearch={this.handleSearch}
					placeholder="输入邮箱"
				>{ children }</AutoComplete>
			</Card>
		)
	}
}

export default AutoCompleteComponent