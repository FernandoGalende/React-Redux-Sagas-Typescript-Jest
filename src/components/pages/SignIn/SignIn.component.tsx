import React, { useState } from 'react';
import { SignInFlow } from '../../layout/SignInFlow/SignInFlow.component';
import { dataValidator } from '../../../assets/utils';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './SignIn.module.scss';

type SignInProps = {
    getRecomentation: Function;
};

const SignIn: React.FC<SignInProps & RouteComponentProps> = ({ getRecomentation, history }) => {
	const [ currentStep, setStep ] = useState(1);
	const [ buttonDisable, setButtonDisable ] = useState(true);
	const [ user, setUserState ] = useState({
		firstName: '',
		address: '',
		occupation: '',
		hasChildren: 'no',
		numberOfChildren: 0,
		email: ''
	});

	const handleFormFlow = () => {
		if (currentStep === 6) {
            getRecomentation(user);
            history.push('/recommendation')
			return;
		} else if (currentStep === 4 && user.hasChildren === 'no') {
			setStep(6);
			setButtonDisable(true);
			return;
		} else {
			setStep(currentStep + 1);
			setButtonDisable(true);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setButtonDisable(dataValidator(name, value));
		setUserState({
			...user,
			[name]: value
		});
	};

	return (
		<SignInFlow
			onChange={handleChange}
			onNext={handleFormFlow}
			currentStep={currentStep}
			buttonDisable={buttonDisable}
		/>
	);
};

export default withRouter(SignIn);