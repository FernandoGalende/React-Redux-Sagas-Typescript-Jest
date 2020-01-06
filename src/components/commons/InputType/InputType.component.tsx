import React, { Fragment } from 'react';
import { Button } from '../index'
import styles from './InputType.module.scss';

type InputTypeProps = {
	onChange: Function;
	onNext: Function;
	label: string;
	buttonText: string;
	inputId: string;
	type: string;
	isDisable: boolean;
};

export const InputType: React.FC<InputTypeProps> = ({
	onChange,
	onNext,
	label,
	buttonText,
	inputId,
	type,
	isDisable = true
}) => (
	<Fragment>
		<div className={styles.container}>
			<div className={styles.wrap}>
				<label data-testid='label-test' htmlFor='input'>
					{label}
				</label>
				<div>
					<input
						data-testid='input-test'
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
