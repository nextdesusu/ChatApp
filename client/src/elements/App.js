import React from 'react';
import Main from './MainPage';
import Registration from './RegPage';
import Login from './LogPage';
import Chat from './ChatPage';
import Profile from './ProfilePage';
import Thread from './ThreadPage';
import CreateNewsPage from './CreateNewsPage';

import Header from './Header';

import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { MAIN_P, REG_P, CHAT_P, LOG_P, PROFILE_P, THREAD_P, NEWS_P } from '../consts/PageRoutes';

export default function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Header />
				<div className = "page__block">
					<Switch>
						<Route exact path = {MAIN_P} component = {Main}/>
						<Route path = {REG_P} component = {Registration} />
						<Route path = {CHAT_P} component = {Chat} />
						<Route path = {LOG_P} component = {Login} />
						<Route path = {PROFILE_P} component = {Profile} />
						<Route path = {THREAD_P} component = {Thread}/>
						<Route path = {NEWS_P} component = {CreateNewsPage} />
					</Switch>
				</div>
			</BrowserRouter>
		</React.Fragment>
	)
}