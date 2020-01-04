import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/pages/Home/SignIn.container';

const AppRouter = () => (
	<Router>
		<Switch>
			<Route path='/signin' exact component={SignIn} />
			<Route path='/' extact component={SignIn} />
			<Route render={() => <Redirect to='/home' />} />
		</Switch>
	</Router>
);

export default AppRouter;
