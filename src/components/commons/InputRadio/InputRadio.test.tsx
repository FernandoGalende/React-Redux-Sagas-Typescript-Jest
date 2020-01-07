import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputRadio } from './InputRadio.component';

 const fakeOption = {
    value: 'fakeValue',
    label: 'fakeLabel'
}

describe('<InputRadio />', () => {
    const mockFuntion = jest.fn();
	let getByTestId: Function;
	let container: HTMLElement;

	beforeEach(() => {
		const queries = render( <InputRadio
            key={1}
            option={fakeOption}
            inputId='occupation'
            onChange={mockFuntion}                
        />);

		container = queries.container;
		getByTestId = queries.getByTestId;
	});

	it('match snapshot', () => {
		expect(container).toMatchSnapshot();
    });

    it('should exist', () => {
		expect(getByTestId(`input-test-${fakeOption.value}`)).toBeInTheDocument();
    });
    
    it('should fire mock function', () => {
		const button = getByTestId(`input-test-${fakeOption.value}`);
		fireEvent.click(button);
		expect(mockFuntion).toBeCalled();
	});
});