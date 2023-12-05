'use client';
import { Grid, Button, useTheme } from '@mui/material';

import { useForm } from 'react-hook-form';

import { Phone, Person } from '@mui/icons-material';

import { TextFieldClRhf } from '../../components/textField';
import { EmailFieldClRhf } from '../../components/emailField';
import { TextAreaFieldClRhf } from '../../components/textAreaField';

import { ContactFormProps, ContactFormInputs } from './contactForm.types';

const ContactForm = ({ onSubmit }: ContactFormProps) => {
	const { control, handleSubmit } = useForm<ContactFormInputs>();
	const theme = useTheme();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<TextFieldClRhf
						fullWidth
						id="name"
						control={control}
						name="name"
						label="Name"
						required
						customIcon={<Person />}
						rules={{ required: 'First name is required' }}
						errorMessages={{ required: 'First name is required' }}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<EmailFieldClRhf
						fullWidth
						id="email"
						control={control}
						name="email"
						label="Email"
						type="email"
						required
						rules={{
							required: 'Email is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'invalid email address'
							}
						}}
						errorMessages={{
							required: 'Email is required',
							pattern: 'Invalid email address'
						}}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextFieldClRhf
						fullWidth
						id="phone"
						control={control}
						name="phone"
						label="Phone"
						type="number"
						required
						customIcon={<Phone />}
						rules={{
							required: 'Phone number is required',
							pattern: {
								value: /^[0-9]{10}$/i,
								message: 'invalid phone number'
							}
						}}
						errorMessages={{
							required: 'Phone number is required',
							pattern: 'Invalid phone number'
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextAreaFieldClRhf
						id="message"
						control={control}
						name="message"
						label="Message"
						required
						rowsMin={4}
						rules={{ required: 'Message is required' }}
						errorMessages={{ required: 'Message is required' }}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						fullWidth
						type="submit"
						variant="contained"
						style={{
							backgroundColor: theme.palette.primary.dark,
							color: theme.palette.common.white
						}}
					>
						Send
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default ContactForm;
