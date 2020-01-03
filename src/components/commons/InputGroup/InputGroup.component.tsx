import React, { Fragment, Children } from 'react';
import styles from './InputGroup.module.scss';

type InputGroupProps = {
	onChange: Function;
	onNext: Function;
	label: string;
	buttonText: string;
};

export const InputGroup: React.FC<InputGroupProps> = ({
	onChange,
	onNext,
	label,
	buttonText
}) => {
	const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value.toLowerCase());
	};

	return (
		<Fragment>
			<div className={styles.container}>
				<div className={styles.wrap}>
					<label data-testid='label-test' htmlFor='input'>
						{label}
					</label>
					<input
						data-testid='input-test'
						type='text'
						id='input'
						onChange={searchInput}
					/>
					<button onClick={() => onNext()}>{buttonText}</button>
				</div>
			</div>
		</Fragment>
	);
};
