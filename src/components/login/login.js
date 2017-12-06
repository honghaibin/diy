import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Spin, Alert } from 'antd';
import {withRouter,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux.js'

const FormItem= Form.Item;

@withRouter
@Form.create()
@connect(
	state=>state.user,
	{login}
)
class Login extends React.Component{
	constructor(){
		super(...arguments)

		this.handleSubmit= this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();

		this.props.form.validateFields((err,values)=>{
			if(!err){
				console.log('登录表单数据：',values)
				// console.log(this.props.login)
				this.props.login(values)
				// console.log(this.props);
				// this.props.history.push('/home');

			}
		})
	}
	render(){
		const {getFieldDecorator}= this.props.form;
		return(
			<Spin spinning={this.props.loginLoading}>
				<div style={{padding:'10px 20px'}}>
					{this.props.redirectTo? <Redirect to={this.props.redirectTo}/>:null}
					<Form onSubmit={this.handleSubmit}>
						<FormItem>
							{
								getFieldDecorator('user',{
									rules:[{required: true, message:'请输入您的用户名',whitespace:true}]
								})(
									<Input prefix={<Icon type="user" style={{fontSize:13}} />} placeholder="用户名" />
								)
							}
						</FormItem>
						<FormItem>
							{
								getFieldDecorator('pwd',{
									rules:[{required: true, message:'请输入您的密码'}]
								})(
									<Input type="password" prefix={<Icon type="lock" style={{fontSize:13}}/>} placeholder="密码" />
								)
							}
						</FormItem>
						{this.props.loginMsg?<Alert type="error" message={this.props.loginMsg}></Alert>:null}
						<FormItem>
							{
								getFieldDecorator('remember',{
									valuePropName:'checked',
									initialValue: true
								})(
									<Checkbox>记住密码</Checkbox>
								)
							}
						</FormItem>

						<Button type="primary" htmlType="submit" style={{width:'100%'}}>登录</Button>
						<FormItem>
							忘记密码？<a href="#" onClick={this.props.toRegister}>立即注册</a>
						</FormItem>
					</Form>
				</div>
			</Spin>
		)
	}
}

Login.propTypes={
	toRegister: PropTypes.func.isRequired
}

export default Login