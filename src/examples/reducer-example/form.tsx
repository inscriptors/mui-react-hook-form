import React, { useReducer } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextAreaFieldClRhf } from '../../components/textAreaField';
import formReducer from './formReducer';


const MyForm = () => {
  const [formState, dispatch] = useReducer(formReducer, {});
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const handleFieldChange = (field: string) => (evt: { target: { value: any; }; }) => {
    dispatch({ type: 'update_field', field, value: evt.target.value });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextAreaFieldClRhf
            control={control}
            {...field}
            id="username"
            label="Username"
            onChange={handleFieldChange('username')}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;