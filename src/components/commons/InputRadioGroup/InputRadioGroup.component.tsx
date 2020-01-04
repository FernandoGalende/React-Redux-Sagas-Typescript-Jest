import React from 'react';
import styles from './InputRadioGroup.module.scss';
import Input from '../InputRadio/InputRadio.component';

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
		<div className={styles.container}>
			<div className={styles.wrap}>
				<label data-testid='label-test' htmlFor='input'>
					{label}
				</label>
				{options.length > 0 &&
					options.map((option, idx) => (
						<Input
                            key={idx}
							option={option}
							idx={idx}
							inputId={inputId}
							onChange={onChange}
						/>
					))}
				<button
					id='nextButton'
					disabled={isDisable}
					onClick={() => onNext()}>
					{buttonText}
				</button>
			</div>
		</div>
	);
};
