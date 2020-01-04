import React, { useState } from 'react';
import { SignInFlow } from '../../layout/SignInFlow/SignInFlow.component';
import { dataValidator } from '../../../assets/utils';

import './SignIn.module.scss';

type MasterSignInProps = {
	setUser: Function;
};

const SignIn: React.FC<MasterSignInProps> = ({ setUser }) => {
	const [ currentStep, setStep ] = useState(1);
	const [ buttonDisable, setButtonDisable ] = useState(true);
	const [ user, setUserState ] = useState({
		firstName: '',
		address: '',
		occupation: '',
		hasChildren: false,
		numberOfChildren: 0,
		email: ''
	});

	const handleFormFlow = () => {
		if (currentStep === 6) {
			setUser(user);
			return;
		} else if (currentStep === 4 && !user.hasChildren) {
			setStep(6);
			setButtonDisable(true);
			return;
		}
		setStep(currentStep + 1);
		setButtonDisable(true);
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

export default SignIn;
