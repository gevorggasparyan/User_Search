import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { searchUsers } from '../services/user-service';

export const search = (req: Request, res: Response): void => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400).json({ errors: errors.array() });
		return;
	}

	const { email, number } = req.body;

	setTimeout(() => {
		const results = searchUsers(email, number);
		res.json(results);
	}, 5000);
};
