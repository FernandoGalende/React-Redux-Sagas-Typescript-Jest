import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputRadioGroup } from './InputRadioGroup.component';

const fakeOptions = [
	{
		value: 'fakeValue1',
		label: 'fakeLabel1'
	},
	{
		value: 'fakeValue2',
		label: 'fakeLabel2'
	}
];

describe('<InputRadioGroup />', () => {
	const mockFuntion = jest.fn();
	const mockNext = jest.fn();
	let getByTestId: Function;
	let container: HTMLElement;

	beforeEach(() => {
		const queries = render(
			<InputRadioGroup
				onChange={mockFuntion}
				label='label text'
				inputId='fake id'
				onNext={mockNext}
				options={fakeOptions}
				isDisable={false}
				buttonText='Next'
			/>
		);

		container = queries.container;
		getByTestId = queries.getByTestId;
	});

	it('match snapshot', () => {
		expect(container).toMatchSnapshot();
	});

	it('should be exist', () => {
		expect(getByTestId('inputGroup-test')).toBeInTheDocument();
	});

	it('should render first option', () => {
		expect(
			getByTestId(`input-test-${fakeOptions[0].value}`)
		).toBeInTheDocument();
	});

	it('click on first input fire onChange event', () => {
		const button = getByTestId(`input-test-${fakeOptions[0].value}`);
		fireEvent.click(button);
		expect(mockFuntion).toBeCalled();
	});

	it('click on second input fire onChange event', () => {
		const button = getByTestId(`input-test-${fakeOptions[1].value}`);
		fireEvent.click(button);
		expect(mockFuntion).toBeCalled();
	});

	it('should contains a label text', () => {
		expect(getByTestId('label-test')).toHaveTextContent('label text');
	});
});
