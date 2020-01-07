import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputTypeTextNumber } from './InputTypeTN.component';

describe('<InputTypeTN />', () => {
	const mockFuntion = jest.fn();
	const mockNext = jest.fn();
	let getByTestId: Function;
	let container: HTMLElement;

	beforeEach(() => {
		const queries = render(
			<InputTypeTextNumber
                type='text'
                onChange={mockFuntion}
                label='label text'
				inputId='fake id'
				onNext={mockNext}				
				buttonText='Next'
				isDisable={false}
			/>
		);

		container = queries.container;
		getByTestId = queries.getByTestId;
	});

	it('match snapshot', () => {
		expect(container).toMatchSnapshot();
	});

	it('should be exist', () => {
		expect(getByTestId('inputTN-test')).toBeInTheDocument();
	});

    it('should contains a label text', () => {
        expect(getByTestId('labelTN-test')).toHaveTextContent('label text');
    });	

	it('text on input should fire onChange function', () => {
        const input = getByTestId('inputTN-text');        
        fireEvent.change(input, {target: {value: 'a'}});
		expect(mockFuntion).toHaveBeenCalledTimes(1);
	});

});
