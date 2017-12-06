### diy
基于React+redux+antd+express+mongodb diy的一个网站，没有一个目标，学到哪做到哪。

### 下载并安装依赖
```
 git clone https://github.com/honghaibin/diy.git

 npm install 
```

### 启动server服务
确保mongodb数据库已安装并启动，详情可查看server/model.js：

启动服务：
```
nodemon server/server.js
```

### 启动项目
```
npm start 
```
# 其他介绍
## 基于create-react-app脚手架
```
//创建项目
create-react-app diy  
//拆解(需要进行脚手架的额外配置)
npm  run eject
```
引入prop-types（React15版后期将prop-types分离出来了）
```
npm install prop-types --save
```
### 引入antd
```
npm install antd --save
```
配置按需加载
```
//引入babel-plugin-import
npm  install babel-plugin-import --save 
//配置package.json，添加plugins
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins":[
      ["import", { "libraryName": "antd", "style": "css" }]
    ]
}
```

### 引入react-router-dom 
```
npm install react-router-dom --save
```

### 项目结构
所有文件都存放于src目录下：
```
components文件夹：存放所有可通用的组件
containers文件夹：存放页面组件
redux文件夹：存放redux文件
index.js：入口文件
index.css：通用css文件
```

### 数据层用redux来实现
```
npm install redux react-redux redux-thunk --save 
```
redux主要提供4个方法：createStore,applyMiddleware,compose,combineReducers

* createStore
```
//创建store
const store= createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension? window.devToolsExtension(): f=>f
))
```
* applyMiddleware
```
收集中间件
```
* compose
```
合并中间件和插件
```
* combineReducers
```
//合并多个reducer,并返回一个总的reducer
import { combineReducers } from 'redux';
import { user } from './redux/user.redux';
import { chatuser } from './redux/chatuser.redux';
import {chat} from './redux/chat.redux.js'

export default combineReducers({user,chatuser,chat})
```

react-redux主要提供了Provider组件（提供全局store）和connect方法

redux-thunk是redux的异步请求的中间件：作用是检测派发的异步action对象（函数）的时候对此action进行拦截（不往下继续派发），等异步完成之后重新派发同步的action对象(是个对象)。

### 异步请求axios
```
npm install axios --save 
```

配置请求地址代理（package.json）：
```
{
    ...
    "proxy":"http://localhost:9093"
}
```
启动express服务(得确保已启动mongoDB数据库),express服务监听在9093端口
```
nodemon server.js
```

### 装饰器模式
```
cnpm install babel-plugin-transform-decorators-legacy --save
```
package.json:
```
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins":[
      ["import", { "libraryName": "antd", "style": "css" }],
      "transform-decorators-legacy"
    ]
},
```

### server
此项目中，使用express+mongoDB搭建服务器与数据库
```
npm install express mongoose --save 
```
使用body-parser获取请求体
```
npm install body-parser --save
```
使用cookie-parser设置cookie
```
npm install cookie-parser --save
```
使用md5对用户密码进行加密
```
npm install utility --save
```

































