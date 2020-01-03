import React, { Fragment, useState } from 'react';
import { SignIn } from '../../layout/SignIn/SignIn.component';

import './MasterSignIn.module.scss';

const MasterSignIn = () => {
	const [ currentStep, setStep ] = useState(1);
	const [ form, setState ] = useState({
		firstName: '',
		address: '',
		numberOfChildren: 0,
		occupation: '',
		email: ''
	});

	const handleNext = (evt: any) => {
        console.log('currentStep -->', currentStep);
        if(currentStep === 6){
            console.log('data', form) 
            return;
        }
		setStep(currentStep + 1);
	};

	const handleChange = (event: any) => {
        console.log('data event', event)
		const { name, value } = event.target;
		setState({
			...form,
			[name]: value
		});
	};

	return (
		<Fragment>
			<SignIn
				onChange={handleChange}
				onNext={handleNext}
				currentStep={currentStep}
			/>
		</Fragment>
	);
};

export default MasterSignIn;
