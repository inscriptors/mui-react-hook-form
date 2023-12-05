import { BaseInputFieldProps } from '../baseInputField/baseInputField.types';

export interface EmailFieldProps
	extends Omit<BaseInputFieldProps, 'type' | 'variant'> {
	showIcon?: boolean;
	customIcon?: React.ReactNode;
	iconPosition?: 'start' | 'end';
}
