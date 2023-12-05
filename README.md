# mui-react-hook-form

React Hook Form Utilities for Material UI

Created a util using react-hook-form to make it easier to use with Material UI.

# Overview

ReactHookFormify is a utility designed to enhance React components by integrating them with react-hook-form. This integration simplifies form validation, state management, and error handling.

# Features

### Controlled Component: 
Integrates with react-hook-form's Controller for controlled components.

### Form Validation: 
Supports react-hook-form validation rules through the rules prop.

### Default Values & Unregistration: 
Manages default values and controls whether the component unregisters from the form upon unmounting.

### Error Handling: 
Maps error types to custom messages via errorMessages.

### Event Handlers: 
Custom onChange and onBlur handlers for additional logic.

# Props
The ReactHookFormify HOC accepts the following props:

1. control: The control object from react-hook-form.
2. rules: (Optional) Validation rules as per react-hook-form.
3. defaultValue: (Optional) Default value of the form field.
4. shouldUnregister: (Optional) Determines if the field should unregister on unmount.
5. disabled: (Optional) Disables the input field.
6. errorMessages: (Optional) Custom error messages for different validation errors.
7. onChange: (Optional) Custom handler called on value change.
8. onBlur: (Optional) Custom handler called on input blur.

# Usage
To use ReactHookFormify, wrap your custom input component with it. For example, if you have a custom input component MyInputComponent, you can enhance it with form capabilities as follows:

```
    import ReactHookFormify from './ReactHookFormify';
    import MyInputComponent from './MyInputComponent';

    const FormifiedMyInput = ReactHookFormify(MyInputComponent);

    // Inside a component using react-hook-form
    const MyForm = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormifiedMyInput
            id="myInput"
            control={control}
            rules={{ required: 'This field is required' }}
            errorMessages={{ required: 'Please enter a value' }}
        />
        <button type="submit">Submit</button>
        </form>
    );
    };
```

Have a look at Examples folder.

# Best Practices

### Prop Forwarding: 
Ensure that all relevant props are forwarded to the wrapped component.

### Performance: 
Since HOCs can add additional layers, use them judiciously to avoid performance bottlenecks.

### Reusability: 
Use ReactHookFormify to create reusable form components across your application.