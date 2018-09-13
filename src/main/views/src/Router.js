import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import SignUpForm from './components/SignUpForm';
export default (

	<Switch>
		<Route exact path='/' component={App} />
		<Route path='signUp' component={SignUpForm} />
		<Route path='head' component={Header} />
		<Redirect to="/" />
	</Switch>
);