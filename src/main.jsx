require('./site.scss');

import React from 'react';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';


import { Shell } 	  from './components/shell';
import { Dashboard }  from './components/dashboard';
import { Unknown } 	  from "./components/unknown";
import { Category }   from './components/category';
import { Product }    from './components/product';
import { ReviewList } from './components/review-list';
import { About } 	  from './components/about';

const root = (
	<Router history={ browserHistory }>
		<Route path="/" component={ Shell }>
			<IndexRoute component={ Dashboard }/>
			
			<Route path="category/:category" component={ Category }>
				<Route path="product/:product" component={ Product }>
					<Route path="reviews" component={ ReviewList }/>
				</Route>
			</Route>

			<Route path="about" component={About}/>
			<Route path="**" component={Unknown}/>
		</Route>
	</Router>
);

ReactDOM.render(root, document.querySelector('main'));