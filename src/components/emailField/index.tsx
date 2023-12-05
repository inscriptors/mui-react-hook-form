'use client';

import React from 'react';
import MailLock from '@mui/icons-material/MailLock';

import BaseInputFieldCl from '../baseInputField';
import ReactHookFormify from '../../rhf.utils';

import { EmailFieldProps } from './emailField.types';

const EmailField = ({
	id,
	label,
	showIcon = true,
	customIcon,
	iconPosition = 'start',
	required = true,
	...otherProps
}: EmailFieldProps) => {
	const adornment = showIcon ? customIcon || <MailLock /> : null;
	return (
			<BaseInputFieldCl
				{...otherProps}
				id={id}
				label={label}
				type="email"
				variant="outlined"
				required={required}
				adornment={adornment}
				adornmentPosition={iconPosition ? iconPosition : 'start'}
			/>
	);
};

export const EmailFieldCl = React.memo(EmailField);

export const EmailFieldClRhf = ReactHookFormify<EmailFieldProps>(EmailField);

export type { EmailFieldProps };
