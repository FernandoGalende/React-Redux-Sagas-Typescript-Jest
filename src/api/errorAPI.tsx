export const logError = (error:any) => {
	// eslint-disable-next-line no-console
	console.error('ERROR: ', error);
	throw error;
};