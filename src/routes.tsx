import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MasterSignIn from './components/pages/Home/MasterSignIn.container';

const AppRouter = () => (
	<Router>
		<Switch>
			<Route path='/home' exact component={MasterSignIn} />
			<Route path='/' extact component={MasterSignIn} />
			<Route render={() => <Redirect to='/home' />} />
		</Switch>
	</Router>
);

export default AppRouter;
