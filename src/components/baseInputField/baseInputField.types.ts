import { OutlinedTextFieldProps as MuiInputFieldProps } from '@mui/material';

export interface BaseInputFieldProps extends MuiInputFieldProps {
	id: string;
	label?: string;
	type: string;
	adornment?: React.ReactNode;
	adornmentPosition?: 'start' | 'end';
	error?: boolean;
	required?: boolean;
	disabled?: boolean;
}
