import { SubmitHandler } from 'react-hook-form';

export interface ContactFormInputs {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	message: string;
}

export interface ContactFormProps {
	onSubmit: SubmitHandler<ContactFormInputs>;
}
