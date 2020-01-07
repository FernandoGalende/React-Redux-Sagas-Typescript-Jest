import React, { Fragment } from 'react';
import { Button } from '../index'
import styles from './InputTypeTN.module.scss';

type InputTypeTextNumberProps = {
	onChange: Function;
	onNext: Function;
	label: string;
	buttonText: string;
	inputId: string;
	type: string;
	isDisable: boolean;
};

export const InputTypeTextNumber: React.FC<InputTypeTextNumberProps> = ({
	onChange,
	onNext,
	label,
	buttonText,
	inputId,
	type,
	isDisable = true
}) => (
	<Fragment>
		<div className={styles.container} data-testid='inputTN-test'>
			<div className={styles.wrap}>
				<label data-testid='labelTN-test' htmlFor='input'>
					{label}
				</label>
				<div className={styles.inputButtonWrap}>
					<input
						data-testid='inputTN-text'
						type={type}
						id={inputId}
						name={inputId}
						onChange={(evt) => onChange(evt)}
					/>
					<Button
						id='nextButton'
						isDisable={isDisable}
						onClick={onNext}>
						{buttonText}
					</Button>
				</div>
			</div>
		</div>
	</Fragment>
);
