import React from 'react';
import { InputRadioGroup, InputTypeTextNumber } from '../../commons';

import { occupationOptions, childrenOptions } from '../../../assets/dictionary/InputRadioOptions';

type SignInFlowProps = {
	onChange: Function;
	onNext: Function;
    currentStep: number;
    buttonDisable: boolean;
};

export const SignInFlow: React.FC<SignInFlowProps> = ({
	onChange,
	onNext,
    currentStep,
    buttonDisable
}) => (
	<div>
		{currentStep === 1 && (
			<InputTypeTextNumber
				type='text'
				onChange={onChange}
				label="What's your first Name?"
				inputId='firstName'
				onNext={onNext}
                buttonText='Next'
                isDisable={buttonDisable}
			/>
		)}
		{currentStep === 2 && (
			<InputTypeTextNumber
				type='text'
				onChange={onChange}
				label="What's your address?"
				inputId='address'
				onNext={onNext}
                buttonText='Next'
                isDisable={buttonDisable}
			/>
		)}
		{currentStep === 3 && (
			<InputRadioGroup
				onChange={onChange}
				label="What's your occupation?"
				inputId='occupation'
				onNext={onNext}
				buttonText='Next'
                options={occupationOptions}
                isDisable={buttonDisable}
			/>
		)}
		{currentStep === 4 && (
			<InputRadioGroup
				onChange={onChange}
				label='Do you have any children?'
				onNext={onNext}
				inputId='hasChildren'
				buttonText='Next'
                options={childrenOptions}
                isDisable={buttonDisable}
			/>
		)}
		{currentStep === 5 && (
			<InputTypeTextNumber
				type='number'
				onChange={onChange}
				label='How many children do you have?'
				inputId='numberOfChildren'
				onNext={onNext}
                buttonText='Next'
                isDisable={buttonDisable}
			/>
		)}
		{currentStep === 6 && (
			<InputTypeTextNumber
				type='text'
                onChange={onChange}
                inputId='email'
				label="What's your email?"
				onNext={onNext}
                buttonText='Submit'
                isDisable={buttonDisable}
			/>
		)}
	</div>
);
