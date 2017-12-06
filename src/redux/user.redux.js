import axios from 'axios'


//action类型
const LOGIN_START= 'LOGIN_START'
const LOGIN_SUCCESS= 'LOGIN_SUCCESS'
const LOGIN_FAIL= 'LOGIN_FAIL'

const REGISTER_START= 'REGISTER_START'
const REGISTER_SUCCESS= 'REGISTER_SUCCESS'
const REGISTER_FAIL= 'REGISTER_FAIL'

const LOAD_DATA= 'LOAD_DATA'

const initState= {
	redirectTo:'',
	user:'',
	pwd:'',
	loginLoading:false,
	loginMsg:'',
	registerLoading:false,
	registerMsg:''
}
//reducer
export function user(state=initState, action){
	switch(action.type){
		case LOGIN_START:
			return {...state, loginLoading: true}
		case LOGIN_SUCCESS:
			return {...state, ...action.payload, redirectTo:'/home', loginLoading: false, loginMsg:''}
		case LOGIN_FAIL:
			return {...state, loginLoading: false, loginMsg:action.msg}
		case REGISTER_START:
			return {...state, registerLoading: true}
		case REGISTER_SUCCESS:
			return {...state, ...action.payload, redirectTo:'/home', registerLoading: false, registerMsg:''}
		case REGISTER_FAIL:
			return {...state, registerLoading: false, registerMsg:action.msg}
		case LOAD_DATA:
			return {...state, ...action.payload}
		default:
			return state
	}
}

//生成action对象的方法，返回一个action对象(分同步和异步action对象)
function loginStart(){
	return {type: LOGIN_START}
}
function loginSuccess(data){
	return {type:LOGIN_SUCCESS, payload:data}
}

function loginFail(msg){
	return {msg, type:LOGIN_FAIL}
}

export function login({user,pwd}){
	return dispatch=>{
		dispatch( loginStart() )
		axios.post('/user/login',{user,pwd})
			.then(res=>{
				if( res.status===200 && res.data.code===0){
					//请求成功
					dispatch(loginSuccess(res.data.data))
				}else {
					//请求失败
					dispatch(loginFail(res.data.msg))
				}
			})
	} 
}

function registerStart(){
	return {type: REGISTER_START}
}
function registerSuccess(data){
	return {type:REGISTER_SUCCESS, payload:data}
}

function registerFail(msg){
	return {msg, type:REGISTER_FAIL}
}

export function register({user,pwd}){
	return dispatch=>{
		dispatch( registerStart() )
		axios.post('/user/register',{user,pwd})
			.then(res=>{
				if( res.status===200 && res.data.code===0){
					//请求成功
					dispatch(registerSuccess(res.data.data))
				}else {
					//请求失败
					dispatch(registerFail(res.data.msg))
				}
			})
	} 
}


export function loadData(userinfo){
	return {type:LOAD_DATA,payload:userinfo}
}