'use client';
import React from 'react';
import { Controller, RegisterOptions } from 'react-hook-form';

export interface HookFormProps {
	control: any;
	rules?: RegisterOptions;
	defaultValue?: string;
	shouldUnregister?: boolean;
	disabled?: boolean;
	errorMessages?: Record<string, string>;
	onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
}

type ComponentProps = HookFormProps & {
	[key: string]: unknown;
};

type ComponentType<P = Record<string, never>> = React.ComponentType<
	P & ComponentProps
>;

const ReactHookFormify = <P,>(Component: ComponentType<P>) => {
	const ResultComponent = (props: P & ComponentProps) => {
		const {
			control,
			rules,
			defaultValue,
			shouldUnregister,
			disabled,
			errorMessages,
			...componentProps
		} = props;

		let errorText = '';

		const shouldComponentUnRegister =
			shouldUnregister !== undefined ? shouldUnregister : true;

		return (
			<Controller
				name={componentProps.id as string}
				control={control}
				rules={rules}
				defaultValue={defaultValue}
				shouldUnregister={shouldComponentUnRegister}
				render={({ field, fieldState }) => {
					const { onChange, onBlur, value, ref } = field;
					const handleChange = (
						evt: React.ChangeEvent<HTMLInputElement>
					) => {
						onChange(evt);
						if (props.onChange) {
							props.onChange(evt);
						}
					};
					const handleBlur = (
						e: React.FocusEvent<HTMLInputElement>
					) => {
						onChange(e);
						onBlur();
						if (props.onBlur) {
							props.onBlur(e);
						}
					};
					if (fieldState.error && errorMessages) {
						errorText = errorMessages[fieldState.error.type];
					}
					return (
						<Component
							{...(componentProps as P)}
							control={control} // provide the missing control prop
							error={fieldState.error ? true : false}
							helperText={errorText}
							disabled={disabled}
							onChange={handleChange}
							inputRef={ref}
							value={value || ''}
							defaultValue={defaultValue}
							onBlur={handleBlur}
						/>
					);
				}}
			/>
		);
	};

	ResultComponent.displayName = 'ResultComponent';
	return ResultComponent;
};

export default ReactHookFormify;