import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducer.js'	

import './index.css';
import Entrance from './containers/entrance/entrance.js';
import Home from './containers/home/home.js';
import AuthRouter from './components/authrouter/authrouter.js'

const store= createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension? window.devToolsExtension(): f=>f
))

ReactDOM.render(
	(	
		<Provider store={store}>
			<BrowserRouter>
				<div style={{height:'100%'}}>
					<AuthRouter></AuthRouter>
					<Switch>
						<Route path="/" exact component={Entrance}></Route>
						<Route path="/home" component={Home}></Route>
						<Redirect to="/"></Redirect>
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	)
, document.getElementById('root'));
