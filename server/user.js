const express= require('express');
const Router= express.Router();
const model= require('./model.js');
const utility= require('utility');

const User= model.getModel('user');

//获取users列表
Router.get('/list',function(req,res){
	//get的参数用req.query来获取
	User.find({},function(err,doc){
		return res.json({code:0,data:doc});
	})
})

//用户登录
Router.post('/login',function(req,res){
	const {user, pwd}= req.body;
	console.log('收到登录请求，正在验证...')
	User.findOne({user,pwd:md5Pwd(pwd)},function(err, doc){
		if(!doc){
			return res.json({code:1, msg:'用户名和密码错误'})
		}
		//登录成功设置cookie
		res.cookie('userid', doc._id);
		return res.json({code:0, data:doc });
	})
})

//注册功能
Router.post('/register', function(req,res){
	const {user, pwd}= req.body;
	//判断是否已存在
	User.findOne({user},function(err,doc){
		if(doc){
			return res.json({code:1, msg:'用户名已存在'})
		}
		//使用save方法创建，目的是为了得到_id
		const userModel= new User({user,pwd:md5Pwd(pwd)});
		userModel.save(function(err, doc){
			if(err){
				return res.json({code:1, msg:'服务出现错误'})
			}
			const {user, _id}= doc;
			res.cookie('userid',_id);
			return res.json({code:0, data:{user,_id}})
		})
		// User.create({user,pwd:md5Pwd(pwd)},function(e,d){
		// 	if(e){
		// 		return res.json({code:1,msg:' 后端出错了'})
		// 	}

		// 	return  res.json({code:0})
		// })
	})
})

//获取用户信息
Router.get('/info',function(req,res){
	const {userid}= req.cookies;
	if(!userid){
		return res.json({code:1});
	}

	User.findOne({_id: userid},function(err,doc){
		if(err){
			return res.json({code:1, msg:'后端出错了'})
		}
		return res.json({code:0,data:doc})
	})
})

//删除所有用户
Router.get('/list/delete',function(req,res){
	User.remove({}, function(e,d){
		if(e){
			return res.json({code:1,msg:'服务出现错误'})
		}
		res.json({code:0,msg:'用户已全部删除'})
	})
})

//防止强硬解密，加盐加密
function md5Pwd(pwd){
	const salt= 'hhb_adadhkahfkhsdklahkdajkda&&**';
	return utility.md5(utility.md5(pwd+salt));
}

module.exports= Router