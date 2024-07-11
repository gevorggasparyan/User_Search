import { body } from 'express-validator';

export const validateSearch = [
	body('email').isEmail().withMessage('Invalid email format'),
	body('number')
	.optional({ checkFalsy: true })
	.matches(/^\d{2}-\d{2}-\d{2}$/)
	.withMessage('Invalid number format'),
];
