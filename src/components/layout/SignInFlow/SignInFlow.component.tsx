import React from 'react';
import { InputType } from '../../commons/InputType/InputType.component';
import { InputRadioGroup } from '../../commons/InputRadioGroup/InputRadioGroup.component';

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
			<InputType
				type='text'
				onChange={onChange}
				label='What is your first Name?'
				inputId='firstName'
				onNext={onNext}
                buttonText='Next'
                isDisable={buttonDisable}
			/>
		)}
		{currentStep === 2 && (
			<InputType
				type='text'
				onChange={onChange}
				label='What is your Address?'
				inputId='address'
				onNext={onNext}
                buttonText='Next'
                isDisable={buttonDisable}
			/>
		)}
		{currentStep === 3 && (
			<InputRadioGroup
				onChange={onChange}
				label='What is your Ocupation?'
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
				label='Do you have children?'
				onNext={onNext}
				inputId='hasChildren'
				buttonText='Next'
                options={childrenOptions}
                isDisable={buttonDisable}
			/>
		)}
		{currentStep === 5 && (
			<InputType
				type='number'
				onChange={onChange}
				label='How many children?'
				inputId='numberOfChildren'
				onNext={onNext}
                buttonText='Next'
                isDisable={buttonDisable}
			/>
		)}
		{currentStep === 6 && (
			<InputType
				type='text'
                onChange={onChange}
                inputId='email'
				label='What is your email?'
				onNext={onNext}
                buttonText='Submit'
                isDisable={buttonDisable}
			/>
		)}
	</div>
);
