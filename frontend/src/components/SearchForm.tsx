import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import styles from './SearchForm.module.css';
import { User, ErrorResponseData } from '../interfaces';

const SearchForm: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [number, setNumber] = useState<string>('');
	const [results, setResults] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [noResults, setNoResults] = useState<boolean>(false);

	useEffect(() => {
		if (number) {
			setNumber(prev => prev.replace(/(\d{2})(?=\d)/g, '$1-'));
		}
	}, [number]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email) {
			setError('Email is required');
			return;
		}

		setLoading(true);
		setError('');
		setNoResults(false);

		try {
			const response = await axios.post('http://localhost:3005/search', { email, number });
			setResults(response.data);
			if (response.data.length === 0) {
				setNoResults(true);
			}
		} catch (err) {
			const axiosError = err as AxiosError<ErrorResponseData>;
			if (axiosError.response && axiosError.response.data && axiosError.response.data.errors) {
				setError(axiosError.response.data.errors.map((e) => e.msg).join(', '));
			} else {
				setError('Failed to fetch results');
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.formGroup}>
					<label>Email: </label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className={styles.input}
					/>
				</div>
				<div className={styles.formGroup}>
					<label>Number: </label>
					<input
						type="text"
						value={number}
						onChange={(e) => setNumber(e.target.value.replace(/-/g, ''))}
						className={styles.input}
					/>
				</div>
				<button type="submit" disabled={loading} className={styles.button}>
					Submit
				</button>
			</form>
			{loading && <p className={styles.loading}>Loading...</p>}
			{error && <p className={styles.error}>{error}</p>}
			{noResults && <p className={styles.noResults}>No user found</p>}
			{results.length > 0 && (
				<ul className={styles.results}>
					{results.map((result, index) => (
						<li key={index} className={styles.resultItem}>{result.email} - {result.number}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchForm;
