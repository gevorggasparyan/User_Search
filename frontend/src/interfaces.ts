export interface User {
	email: string;
	number: string;
}

export interface ValidationError {
	msg: string;
}

export interface ErrorResponseData {
	errors: ValidationError[];
}
