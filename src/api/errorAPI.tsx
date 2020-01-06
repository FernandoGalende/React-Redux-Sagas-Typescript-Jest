export const logError = (error: any) => {
	if (error.response.status === 422) {
		console.error(
			'INVALID_DATA_FORMAT_ERROR_422: ',
			error.response.data.errors
		);
		throw new Error(error.response.data.errors);
	}
	console.error('API_ERROR: ', error.message);
	throw new Error(error.message);
};
