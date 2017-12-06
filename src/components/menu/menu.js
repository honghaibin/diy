import React from 'react'
import {Menu, Icon, Card} from 'antd'
const SubMenu= Menu.SubMenu;
const MenuItem= Menu.Item;
const MenuItemGroup= Menu.ItemGroup

class MenuComponent extends React.Component{
	render(){
		return (
			<div>
				<Horizontal></Horizontal>
			</div>
		)
	}
}

class Horizontal extends React.Component{
	constructor(){
		super(...arguments)
		
		this.handleClick= this.handleClick.bind(this)
		this.state={
			current:'mail'
		}
	}
	handleClick(e){
		this.setState({
	      	current: e.key,
	    });
	}
	render(){
		return (
			<div style={{height:400}}>
				<Card title="水平的顶部导航栏">
					<Menu
						onClick={this.handleClick}
						selectedKeys={[this.state.current]}
						mode="horizontal"
					>
						<MenuItem key="mail">
							<Icon type="mail" />Navigation One
						</MenuItem>
						<MenuItem key="app" disabled>
				          	<Icon type="appstore" />Navigation Two
				        </MenuItem>
				        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
				          	<MenuItemGroup title="Item 1">
				           		<MenuItem key="setting:1">Option 1</MenuItem>
				            	<MenuItem key="setting:2">Option 2</MenuItem>
				          	</MenuItemGroup>
				          	<MenuItemGroup title="Item 2">
				            	<MenuItem key="setting:3">Option 3</MenuItem>
				            	<MenuItem key="setting:4">Option 4</MenuItem>
				          	</MenuItemGroup>
				        </SubMenu>
				        <MenuItem key="alipay">
			          		<a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
			        	</MenuItem>
					</Menu>
				</Card>
			</div>
		)
	}
}

export default MenuComponent