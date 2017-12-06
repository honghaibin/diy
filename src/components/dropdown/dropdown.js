import React from 'react'
import {Card, Dropdown, Icon, Menu, Button, message} from 'antd'
import {Row, Col} from 'antd'

const SubMenu= Menu.SubMenu;

class OverlayVisible extends React.Component {
  state = {
    visible: false,
  };
  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  }
  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" href="#">
          Hover me <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}


class DropdownComponent extends React.Component{
	handleClick= ({key})=>{
		message.info(`Click on item ${key}`);
	}
	handleContextMenu=(event)=>{
		console.log(event.nativeEvent)
		event.nativeEvent.returnValue= false;
	}
	render(){
		const menu=(
				<Menu>
				    <Menu.Item>
				      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
				    </Menu.Item>
				    <Menu.Item>
				      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
				    </Menu.Item>
				    <Menu.Item>
				      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
				    </Menu.Item>
				</Menu>
			);
		const menu2=(
				<Menu>
				    <Menu.Item key="0">
				      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
				    </Menu.Item>
				    <Menu.Item key="1">
				      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
				    </Menu.Item>
				    <Menu.Divider />
    				<Menu.Item key="2" disabled>3rd menu item（disabled）</Menu.Item>
				</Menu>
			);
		const menu3=(
				<Menu onClick={this.handleClick}>
				    <Menu.Item key='1'>
				      1st menu item
				    </Menu.Item>
				    <Menu.Item key='2'>
				      2nd menu item
				    </Menu.Item>
				    <Menu.Item key='3'>
				      3rd menu item
				    </Menu.Item>
				</Menu>
			);
		const menu4=(
				<Menu>
				    <Menu.Item>1st menu item</Menu.Item>
				    <Menu.Item>2nd menu item</Menu.Item>
				    <SubMenu title="sub menu">
				      <Menu.Item>3rd menu item</Menu.Item>
				      <Menu.Item>4th menu item</Menu.Item>
				    </SubMenu>
				    <SubMenu title="disabled sub menu" disabled>
				      <Menu.Item>5d menu item</Menu.Item>
				      <Menu.Item>6th menu item</Menu.Item>
				    </SubMenu>
				</Menu>
			);
		return (
			<div>
				<Card title="最简单的下拉菜单">
					<Dropdown overlay={menu}>
						<a href="#">
					      Hover me <Icon type="down" />
					    </a>
					</Dropdown>
				</Card>
				<br/>
				<Card title="placement属性支持6个弹出位置：（top/bottom）搭配（Left/Center/Right）">
					<Row gutter={16}>
						<Col span={4}>
							<Dropdown placement="topLeft" overlay={menu}>
								<Button type="primary">topLeft</Button>
							</Dropdown>
						</Col>
						<Col span={4}>
							<Dropdown placement="topCenter" overlay={menu}>
								<Button type="primary">topCenter</Button>
							</Dropdown>
						</Col>
						<Col span={4}>
							<Dropdown placement="topRight" overlay={menu}>
								<Button type="primary">topRight</Button>
							</Dropdown>
						</Col>
						<Col span={4}>
							<Dropdown placement="bottomLeft" overlay={menu}>
								<Button type="primary">bottomLeft</Button>
							</Dropdown>
						</Col>
						<Col span={4}>
							<Dropdown placement="bottomCenter" overlay={menu}>
								<Button type="primary">bottomCenter</Button>
							</Dropdown>
						</Col>
						<Col span={4}>
							<Dropdown placement="bottomRight" overlay={menu}>
								<Button type="primary">bottomRight</Button>
							</Dropdown>
						</Col>
					</Row>
				</Card>
				<br/>
				<Row gutter={16}>
					<Col xs={24} sm={12} md={6}>
						<Card title="分割线和不可用菜单项" style={{height:200}}>
							<Dropdown overlay={menu2} placement="bottomRight">
								<Button type="primary">bottomRight</Button>
							</Dropdown>
						</Card>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<Card title="默认为hover触发，改成click触发 trigger={['click']}" style={{height:200}}>
							<Dropdown overlay={menu} trigger={['click']}>
								<a href="#">
							      Click me <Icon type="down" />
							    </a>
							</Dropdown>
						</Card>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<Card title="点击选项触发回调" style={{height:200}}>
							<Dropdown overlay={menu3}>
							    <a href="#">
							      Hover me, Click menu item <Icon type="down" />
							    </a>
							</Dropdown>
						</Card>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<Card title="左边是按钮，右边是额外的相关功能菜单" style={{height:200}}>
							<Dropdown.Button overlay={menu} >
						      Dropdown
						    </Dropdown.Button>
						</Card>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<Card title="传入的菜单里有多个层级" style={{height:200}}>
							<Dropdown overlay={menu4} >
						      <Button>多级菜单</Button>
						    </Dropdown>
						</Card>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<Card title="控制点击菜单不隐藏" style={{height:200}}>
							<OverlayVisible></OverlayVisible>
						</Card>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<Card title="右键触发" style={{height:200}}>
							<Dropdown overlay={menu} trigger={['contextMenu']} >
							    <span style={{ userSelect: 'none' }} >Right Click on Me</span>
							</Dropdown>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

class RightClick extends React.Component{
	render(){
		const menu=(
				<Menu>
				    <Menu.Item>
				      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
				    </Menu.Item>
				    <Menu.Item>
				      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
				    </Menu.Item>
				    <Menu.Item>
				      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
				    </Menu.Item>
				</Menu>
			);
		return (
			<Dropdown overlay={menu} trigger={['contextMenu']}>
			    <span style={{ userSelect: 'none' }}>Right Click on Me</span>
			</Dropdown>
		)
	}
}

export default DropdownComponent