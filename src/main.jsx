require('./site.scss');

import React from 'react';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import {Shell} from './components/shell';

const root = (
	<h1>
		React Router
	</h1>
);

ReactDOM.render(root, document.querySelector('main'));