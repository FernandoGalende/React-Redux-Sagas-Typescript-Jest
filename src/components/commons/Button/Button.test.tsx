import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button.component';


describe('<Button />', () => {
    const mockFuntion = jest.fn();
	let getByTestId: Function;
	let container: HTMLElement;

	beforeEach(() => {
		const queries = render(
			<Button
				id='fakeId'
				isDisable={false}
                onClick={mockFuntion}
                children='click here!'
			/> 
		);

		container = queries.container;
		getByTestId = queries.getByTestId;
	});

	it('match snapshot', () => {
		expect(container).toMatchSnapshot();
    });

    it('should be exist', () => {
		expect(getByTestId('button-test')).toBeInTheDocument();
    });
    
    it('should contain click! text', () => {
		expect(getByTestId('button-test')).toHaveTextContent('click here!');
    });
    
    it('click should be fire mock function', () => {
		const button = getByTestId('button-test');
		fireEvent.click(button);
		expect(mockFuntion).toBeCalled();
	});

});

describe('<Button disable={true} />', () => {
    const mockFuntion = jest.fn();
	let getByTestId: Function;

	beforeEach(() => {
		const queries = render(
			<Button
				id='fakeId'
				isDisable={true}
                onClick={mockFuntion}
                children='click here!'
			/> 
		);
		getByTestId = queries.getByTestId;
    });
    
    it('click should not be fire mock function', () => {
		const button = getByTestId('button-test');
		fireEvent.click(button);
		expect(mockFuntion).not.toBeCalled();
	});
});