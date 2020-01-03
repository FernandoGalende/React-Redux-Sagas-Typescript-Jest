import React from 'react';
import { InputGroup } from '../../commons/InputGroup/InputGroup.component';
import styles from './SignIn.module.scss';

type SignInProps = {
	onChange: Function;
	onNext: Function;
	currentStep: number;
};

export const SignIn: React.FC<SignInProps> = ({
	onChange,
	onNext,
	currentStep
}) => (
	<div className={styles.SignInGroup}>
		{currentStep === 1 && (
			<InputGroup
				onChange={onChange}
				label='What is your first Name?'
                onNext={onNext}
                buttonText="Next"
			/>
		)}
		{currentStep === 2 && (
			<InputGroup
				onChange={onChange}
				label='What is your Address?'
                onNext={onNext}
                buttonText="Next"
			/>
		)}
		{currentStep === 3 && (
			<InputGroup
				onChange={onChange}
				label='What is your Ocupation?'
                onNext={onNext}
                buttonText="Next"
			/>
		)}
		{currentStep === 4 && (
			<InputGroup
				onChange={onChange}
				label='Do you have children?'
                onNext={onNext}
                buttonText="Next"
			/>
		)}
		{currentStep === 5 && (
			<InputGroup
				onChange={onChange}
				label='How many children?'
                onNext={onNext}
                buttonText="Next"
			/>
		)}
		{currentStep === 6 && (
			<InputGroup
				onChange={onChange}
				label='What is your email?'
                onNext={onNext}
                buttonText="Submit"
                
			/>
		)}
	</div>
);
