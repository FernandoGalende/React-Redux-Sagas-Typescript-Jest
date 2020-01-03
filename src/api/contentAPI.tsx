import axios from 'axios';
import {logError} from '../api/errorAPI'

export const getToken = (user:any) => axios
		.post('https://challenge-dot-popsure-204813.appspot.com/user', {
			params: {query: user},
		})
		.catch(logError);