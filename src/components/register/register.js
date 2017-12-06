import React from 'react'
import { Form, Icon, Input, Button, Spin, Alert } from 'antd';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux.js'

const FormItem= Form.Item;

@withRouter
@Form.create()
@connect(
	state=>state.user,
	{register}
)
class Register extends React.Component{
	constructor(){
		super(...arguments)
		this.handleSubmit= this.handleSubmit.bind(this);
		this.checkPassword= this.checkPassword.bind(this);
		this.checkConfirm= this.checkConfirm.bind(this);
		this.handleConfirmBlur= this.handleConfirmBlur.bind(this);

		this.state={
			confirmDirty: false
		}
	}
	handleSubmit(e){
		e.preventDefault();

		this.props.form.validateFields((err,values)=>{
			if(!err){
				console.log('注册表单数据：',values)
				this.props.register(values);
			}
		})
	}
	checkPassword(rule, value, callback){
		const form= this.props.form;
		if(value && value!== form.getFieldValue('pwd')){
			callback('两次密码不一致')
		}else {
			callback()
		}
	}
	checkConfirm(rule, value, callback){
		const form= this.props.form;
		if(value && this.state.confirmDirty){
			form.validateFields(['confirm'],{force: true});
		}
		callback()
	}
	handleConfirmBlur(e){
		const value= e.target.value;
		this.setState({
			confirmDirty: this.state.confirmDirty || !!value
		})
	}
	render(){
		const {getFieldDecorator}= this.props.form;
		return(
			<Spin spinning={this.props.registerLoading}>
				<div style={{padding:'10px 20px',minHeight:272}}>
					<Form onSubmit={this.handleSubmit}>
						<FormItem>
							{
								getFieldDecorator('user',{
									rules:[{required: true, message:'请输入您的用户名', whitespace:true }]
								})(
									<Input prefix={<Icon type="user" style={{fontSize:13}} />} placeholder="用户名" />
								)
							}
						</FormItem>
						<FormItem>
							{
								getFieldDecorator('pwd',{
									rules:[{
										required: true, message:'请输入您的密码'
									},{
										validator:this.checkConfirm
									}]
								})(
									<Input type="password" prefix={<Icon type="lock" style={{fontSize:13}}/>} placeholder="密码" />
								)
							}
						</FormItem>
						<FormItem>
							{
								getFieldDecorator('confirm',{
									rules:[{
											required: true, message:'请确认您的密码'
										},{
											validator:this.checkPassword
										}
									]
								})(
									<Input type="password" 
											prefix={<Icon type="lock" style={{fontSize:13}}/>} 
											placeholder="确认密码" 
											onBlur={this.handleConfirmBlur}
									/>
								)
							}
						</FormItem>
						<FormItem>
							{this.props.registerMsg?<Alert type="error" message={this.props.registerMsg}></Alert>:null}
						</FormItem>
						<Button type="primary" htmlType="submit" style={{width:'100%'}}>注册</Button>
					</Form>
				</div>
			</Spin>
			
		)
	}
}

export default Register