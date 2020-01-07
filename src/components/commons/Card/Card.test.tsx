import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './Card.component';

const mock = {
	type: 'FAKE_TYPE',
	amount: '1000',
	periodicity: 'fackePeriodicity'
};

describe('<Card />', () => {
	let getByTestId: Function;
	let container: HTMLElement;

	beforeEach(() => {
		const queries = render(
			<Card
				type={mock.type}
				amount={mock.amount}
				periodicity={mock.periodicity}
			/>
		);

		container = queries.container;
		getByTestId = queries.getByTestId;
	});

	it('match snapshot', () => {
		expect(container).toMatchSnapshot();
    });
    
	it('should card exist in the document', () => {
		expect(getByTestId('card-test')).toBeInTheDocument();
	});
	it('should format type text', () => {
		expect(getByTestId('card-type-test')).toHaveTextContent('Fake Type');
	});
});
