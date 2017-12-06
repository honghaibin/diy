const express= require('express');
const app= express();
const bodyParser= require('body-parser');
const cookieParser= require('cookie-parser');

const model= require('./model.js')

//引用cookie-parser中间件，让app有能力解析cookie
app.use(cookieParser());

//引用body-parser中间件，让它能解析post过来的json
app.use(bodyParser());

//引入获取user表数据的路由
const userRouter= require('./user.js')
app.use('/user',userRouter);

app.listen(9093,function(){
	console.log(`Listen on 9093`)
})	