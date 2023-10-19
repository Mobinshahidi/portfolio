import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';
function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// Replace these with your Email.js parameters
		const templateId = 'template_phy075a';
		const userId = 'FXecdOfVYlv1rIXmE';

		const data = {
			name,
			email,
			message,
		};

		emailjs.send('service_pdcd72q', templateId, data, userId).catch((error) => {
			console.error('Email error:', error);
		});

		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<form onSubmit={handleSubmit} className={styles.container}>
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				className={styles.name}
			/>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className={styles.email}
			/>
			<textarea
				placeholder="Message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className={styles.text}
			/>
			<button type="submit" className={styles.send}>
				Send
			</button>
		</form>
	);
}

export default Contact;
