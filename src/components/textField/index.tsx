'use client';
import React from 'react';
import BaseTextFieldCl from '../baseInputField';
import ReactHookFormify from '../../rhf.utils';

import { TextFieldProps } from './textField.types';

const TextField = ({
	id,
	label,
	showIcon = true,
	customIcon = <></>,
	iconPosition = 'start',
	required = true,
	...otherProps
}: TextFieldProps) => {
	const adornment = showIcon ? customIcon : null;
	return (
			<BaseTextFieldCl
				{...otherProps}
				id={id}
				variant="outlined"
				label={label}
				type="text"
				required={required}
				adornment={adornment}
				adornmentPosition={iconPosition ? iconPosition : 'start'}
			/>
	);
};

export const TextFieldCl = React.memo(TextField);

export const TextFieldClRhf = ReactHookFormify<TextFieldProps>(TextField);
