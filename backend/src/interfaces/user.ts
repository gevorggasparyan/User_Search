export interface IUser {
	email: string;
	number: string;
}

export interface IUserMap {
	[key: string]: IUser[];
}
