import * as Yup from 'yup';

export const signupValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required')
        .max(50, 'First name must be at most 50 characters'),
    lastName: Yup.string()
        .required('Last name is required')
        .max(50, 'Last name must be at most 50 characters'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    agreeToTerms: Yup.boolean()
        .oneOf([true], 'You must agree to the terms and conditions'),
});