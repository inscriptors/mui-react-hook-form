'use client';

import { FormLabel, TextField, InputAdornment } from '@mui/material';

import { BaseInputFieldProps } from './baseInputField.types';

const BaseInputFieldCl = ({
	id,
	required = true,
	disabled = false,
	label,
	type,
	adornment,
	adornmentPosition = 'end',
	error,
	...otherProps
}: BaseInputFieldProps) => (
	<>
		{label && (
			<FormLabel htmlFor={id} component="legend" error={error}>
				{label}
				{required && <span> *</span>}
			</FormLabel>
		)}
		<TextField
			id={id}
			required
			disabled={disabled}
			type={type}
			error={error}
			InputProps={{
				startAdornment: adornmentPosition === 'start' && adornment && (
					<InputAdornment position="start">
						{adornment}
					</InputAdornment>
				),
				endAdornment: adornmentPosition === 'end' && adornment && (
					<InputAdornment position="end">{adornment}</InputAdornment>
				)
			}}
			{...otherProps}
		/>
	</>
);

export default BaseInputFieldCl;
