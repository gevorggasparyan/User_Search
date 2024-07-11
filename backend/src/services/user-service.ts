import { IUser } from '../interfaces/user';
import { emailMap, numberMap } from '../data/users';

export const searchUsers = (email: string, number?: string): IUser[] => {
	const formattedNumber = number ? number.replace(/-/g, '') : '';

	const emailResults = emailMap[email] || [];
	let results: IUser[] = [];

	if (formattedNumber) {
		const numberResults = numberMap[formattedNumber] || [];
		results = emailResults.filter(user => numberResults.includes(user));
	} else {
		results = emailResults;
	}

	return results;
};
