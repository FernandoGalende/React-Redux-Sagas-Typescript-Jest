export type Price= {
    amount: string;
    periodicity: string;
}

export type Recomendation = {
    type: string;
    price: Price;
}

export type User = {
    firstName: string;
    address: string;
    occupation: string;
    hasChildren: string;
    numberOfChildren: number;
    email: string;
} 

export interface AuthState {
	firstName: string;
	address: string;
	occupation: string;
	hasChildren: string;
	numberOfChildren: number;
	email: string;
	recommendations: Recomendation[];
}

export interface AppState {
    auth: AuthState;
}

