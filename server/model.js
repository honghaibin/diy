const mongoose= require('mongoose')

//连接mongoDB数据库
const DB_URL= 'mongodb://127.0.0.1:27017/diy';
mongoose.connect(DB_URL, {
	useMongoClient: true
})

const models={
	user:{
		user: {type:String, require: true},
		pwd: {type: String, require: true}
	},
	chat: {
		chatid:{type:String, require: true},
		from: {type:String, require: true},
		to: {type: String, require: true},
		content: {type: String, require: true, default:''},
		create_time: {type:Number, default:Date.now()},
		//是否已读，默认为false
		read: {type:Boolean, default: false}
	}
}

//动态注册所有的model
for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports= {
	getModel: function(name){
		return mongoose.model(name);
	}
}