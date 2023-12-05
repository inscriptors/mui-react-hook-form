import { BaseInputFieldProps } from '../baseInputField/baseInputField.types';

export interface TextFieldProps
	extends Omit<BaseInputFieldProps, 'type' | 'variant'> {
	showIcon?: boolean;
	customIcon?: React.ReactNode;
	iconPosition?: 'start' | 'end';
}
