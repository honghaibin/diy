import React from 'react'
import {Row, Col, Tabs, Icon, Spin} from 'antd'
import Login from '../../components/login/login.js'
import Register from '../../components/register/register.js'
import './entrance.css'


class Entrance extends React.Component{
	constructor(){
		super(...arguments)

		this.state={key:'1'}
	}
	toRegister=(e)=>{
		e.preventDefault();
		if(this.state.key==='2') return;
		this.setState({key:'2'})
	}
	toLogin=()=>{
		if(this.state.key==='1') return;
		this.setState({key:'1'})
	}
	render(){
		const style={color:'#fff'}
		return(
			<Row type="flex" align="middle" justify="center" style={{height:'100%',minHeight:438}} id="diy-entrance">
				<Col xs={24} sm={12} md={10} lg={8} xl={6}>
					<div style={style}>
						<div>
							<h2 className="title">随便起居</h2>
							<h4 className="subTitle">Do it yourself</h4>
						</div>
						<Tabs activeKey={this.state.key}>
							<Tabs.TabPane key="1"  tab={<span onClick={this.toLogin}><Icon type="login" />登录</span>}>
								<Login toRegister={this.toRegister}></Login>
							</Tabs.TabPane>
							<Tabs.TabPane key="2" tab={<span onClick={this.toRegister}><Icon type="edit" />注册</span>}>
								<Register></Register>
							</Tabs.TabPane>
						</Tabs>
					</div>
				</Col>
			</Row>
		)
	}
}

export default Entrance