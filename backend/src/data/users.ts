import { IUser, IUserMap } from '../interfaces/user';

const usersArray: IUser[] = [
  { email: "jim@gmail.com", number: "221122" },
  { email: "jam@gmail.com", number: "830347" },
  { email: "john@gmail.com", number: "221122" },
  { email: "jams@gmail.com", number: "349425" },
  { email: "jams@gmail.com", number: "141424" },
  { email: "jill@gmail.com", number: "822287" },
  { email: "jill@gmail.com", number: "822286" },
];

export const emailMap: { [key: string]: IUser[] } = {};
export const numberMap: { [key: string]: IUser[] } = {};

usersArray.forEach((user) => {
  if (!emailMap[user.email]) {
    emailMap[user.email] = [];
  }
  emailMap[user.email].push(user);

  if (!numberMap[user.number]) {
    numberMap[user.number] = [];
  }
  numberMap[user.number].push(user);
});
