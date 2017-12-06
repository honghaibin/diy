import React from 'react'
import {Card, Breadcrumb, Icon} from 'antd'
import {Link} from 'react-router-dom'

class BreadcrumbComponent extends React.Component{
	render(){
		return (
			<div>
				<Card title="面包屑简单用法">
					<Breadcrumb>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
						<Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
						<Breadcrumb.Item>An Application</Breadcrumb.Item>
					</Breadcrumb>
				</Card>
				<Card title="带图标的面包屑">
					<Breadcrumb>
					    <Breadcrumb.Item href="">
					      <Icon type="home" />
					    </Breadcrumb.Item>
					    <Breadcrumb.Item href="">
					      <Icon type="user" />
					      <span>Application List</span>
					    </Breadcrumb.Item>
					    <Breadcrumb.Item>
					      Application
					    </Breadcrumb.Item>
					</Breadcrumb>
				</Card>
				<Card title="通过Breadcrumb的separator属性自定义分隔符">
					<Breadcrumb separator=">">
					    <Breadcrumb.Item>Home</Breadcrumb.Item>
					    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
					    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
					    <Breadcrumb.Item>An Application</Breadcrumb.Item>
					</Breadcrumb>
				</Card>
				<Card title="和react-router-dom@4一起使用">
					<Breadcrumb>
					    <Breadcrumb.Item>
					    	<Link to="/home/Main">点我跳转到Main页面</Link>
					    </Breadcrumb.Item>
					    <Breadcrumb.Item>Application Center</Breadcrumb.Item>
					    <Breadcrumb.Item>Application List</Breadcrumb.Item>
					    <Breadcrumb.Item>An Application</Breadcrumb.Item>
					</Breadcrumb>
				</Card>
			</div>
		)
	}
}

export default BreadcrumbComponent