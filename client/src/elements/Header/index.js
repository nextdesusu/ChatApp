import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../common/ButtonLink';

import { MAIN_P, REG_P, CHAT_P, LOG_P, PROFILE_P, NEWS_P } from '../../consts/PageRoutes';
import './Header.css';

export default function Header({ user }){
	return (
		<header className = "nav__block">
			<nav className = "nav__buttons">
				<ButtonLink to = {MAIN_P} text = 'Главная' />
				<ButtonLink to = {REG_P} text = 'Регистрация' />
				<ButtonLink to = {CHAT_P} text = 'Чат' />
				<ButtonLink to = {LOG_P} text = 'Войти' />
				<ButtonLink to = {PROFILE_P} text = 'Профиль' />
			</nav>
		</header>
	)
}