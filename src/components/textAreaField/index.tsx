'use client';

import React from 'react';

import { FormLabel } from '@mui/material';

import ReactHookFormify from '../../rhf.utils';

import { TextAreaFieldProps } from './textAreaField.types';

import { StyledTextarea } from './textArea.styles';

const TextAreaField = ({
	id,
	label,
	required = true,
	rowsMin = 3,
	rowsMax = 10,
	...otherProps
}: TextAreaFieldProps) => (
	<>
		{label && (
			<FormLabel htmlFor={id} component="legend">
				{label}
				{required && <span> *</span>}
			</FormLabel>
		)}
		<StyledTextarea
			id={id}
			required={required}
			minRows={rowsMin}
			maxRows={rowsMax}
			{...otherProps}
		/>
	</>
);

export const TextAreaFieldCl = React.memo(TextAreaField);

export const TextAreaFieldClRhf =
	ReactHookFormify<TextAreaFieldProps>(TextAreaField);
