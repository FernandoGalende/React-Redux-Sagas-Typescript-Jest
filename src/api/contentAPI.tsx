import axios from 'axios';
import { logError } from './errorAPI';

type GetTokenProps = {
	firstName: string;
	address: string;
	occupation: string;
	numberOfChildren: number;
	email: string;
};

export const getToken = ({
	firstName,
	address,
	occupation,
	numberOfChildren,
	email
}: GetTokenProps) =>
	axios
		.post('https://challenge-dot-popsure-204813.appspot.com/user', {
			firstName,
			address,
			occupation,
			numberOfChildren: +numberOfChildren,
			email
		})
		.then((res) => res.data)
		.catch(logError);

export const getRecommendation = (token: string) => {
    const AuthStr = 'Bearer '.concat(token); 
	return axios
		.get(
			'https://challenge-dot-popsure-204813.appspot.com/recommendation',
			{ headers: { Authorization: AuthStr } }
		).then(res=> res.data)
		.catch(logError);
};
