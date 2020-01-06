import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/pages/SignIn/SignIn.container';
import Recommendation from './components/pages/Recommendation/Recommendation.container';

const AppRouter = () => (
	<Router>
		<Switch>
			<Route path='/recommendation' exact component={Recommendation} />
			<Route path='/signin' exact component={SignIn} />
			<Route path='/' extact component={SignIn} />
			<Route render={() => <Redirect to='/home' />} />
		</Switch>
	</Router>
);

export default AppRouter;
