import React from 'react';
import styles from './InputRadioGroup.module.scss';
import { InputRadio, Button } from '../index';

type RadioOption = {
	value: string | boolean | any;
	label: string;
};

type InputRadioGroupProps = {
	onChange: Function;
	onNext: Function;
	label: string;
	buttonText: string;
	inputId: string;
	options: RadioOption[];
	isDisable: boolean;
};

export const InputRadioGroup: React.FC<InputRadioGroupProps> = ({
	onChange,
	onNext,
	label,
	buttonText,
	options = [],
	inputId,
	isDisable = true
}) => {
	return (
		<div className={styles.container} data-testid='inputGroup-test'>
			<div className={styles.wrap}>
				<label data-testid='label-test' htmlFor='input'>
					{label}
				</label>
				{options.length > 0 &&
					options.map((option, idx) => (
						<InputRadio
							key={idx}
							option={option}
							inputId={inputId}
							onChange={onChange}
						/>
					))}
				<Button
					id='nextButton'
					isDisable={isDisable}
					onClick={() => onNext()}>
					{buttonText}
				</Button>
			</div>
		</div>
	);
};
