export const logError = (error:any) => {
	// eslint-disable-next-line no-console
	console.error('API_ERROR: ', error.message, JSON.stringify(error));
	throw error;
};