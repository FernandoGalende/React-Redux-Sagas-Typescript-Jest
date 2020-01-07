import React from 'react';
import styles from './InputRadio.module.scss';

type RadioOption = {
	value: string | boolean | any;
	label: string;
};

type InputRadioProps = {
	option: RadioOption;
	inputId: string;
	onChange: Function;
};

export const InputRadio: React.FC<InputRadioProps> = ({
	option,
	inputId,
	onChange
}) => (
	<div className={styles.container}>
		<div className={styles.radioWrap}>
			<input
				data-testid={`input-test-${option.value}`}
				type='radio'
				name={inputId}
				value={option.value}
				onChange={(evt) => onChange(evt)}
			/>
			<span>{option.label}</span>
		</div>
	</div>
);
