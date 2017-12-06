import React from 'react'
import { Card, Pagination} from 'antd'

class PaginationComponent extends React.Component{
	showTotal(total, range){
		return `当前 ${range[0]}-${range[1]} 总共 ${total} 页`;
	}
	itemRender(current, type, originalElement){
		// console.log(current, type, originalElement)
		if (type === 'prev') {
		    return <a>上一页</a>;
		} else if (type === 'next') {
		    return <a>下一页</a>;
		}
		return originalElement;
	}
	render(){
		return (
			<div>
				<Card title="基本的分页">
					<Pagination showTotal={this.showTotal} showSizeChanger  showQuickJumper total={500}></Pagination>
				</Card>
				<Card title="迷你版本">
					<Pagination size="small" showTotal={this.showTotal}  showSizeChanger  showQuickJumper total={500}></Pagination>
				</Card>
				<Card title="简单的翻页">
					<Pagination simple defaultCurrent={2} total={50} />
				</Card>
				<Card title="受控制的分页">
					<ControlPage></ControlPage>
				</Card>
				<Card title="自定义页码的结构 itemRender">
					<Pagination showTotal={this.showTotal} showSizeChanger  showQuickJumper total={500} itemRender={this.itemRender}></Pagination>
				</Card>
			</div> 
		)
	}
}

class ControlPage extends React.Component{
	state = {
	    current: 3,
	}
	onChange = (page) => {
	    console.log(page);
	    this.setState({
	      	current: page,
	    });
	}
	render(){
		return (
			<Pagination current={this.state.current} onChange={this.onChange} total={50} />
		)
	}
}

export default PaginationComponent