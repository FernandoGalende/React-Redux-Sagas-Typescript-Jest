export const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9]{2,3}(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const domainValidator = (email: string) => {
    try {
        return (email.split('@')[1].split('.')[1].length > 1) && true;
    } catch {
        return false;
    }    
}

export const dataValidator = (
    name: string, 
    value: string | number | boolean 
) => {
    if ( value !== '' && name !== 'email') return false;     
    return (
        name === 'email' &&
        typeof value === 'string' &&
        regexp.test(value) &&
        domainValidator(value)
    ) ? false : true;
};