import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {loadData} from '../../redux/user.redux.js'
import axios from 'axios'

@withRouter
@connect(
	null,
	{loadData}
)
class AuthRouter extends React.Component{
	componentDidMount(){
		//是entrance页面就不跳转
		const publicList= ['/']
		const pathname= this.props.location.pathname
		if(publicList.indexOf(pathname)>-1){
			return;
		}

		//获取用户信息
		axios.get('/user/info')
			.then(res=>{
				if(res.status==200){
					if(res.data.code==0) {
						//有登录信息
						this.props.loadData(res.data.data);
					}else {
						//没有登录信息跳转login界面
						this.props.history.push('/')
					}
					console.log(res.data);
				}
			})
	}
	render(){
		return null;
	}
}

export default AuthRouter