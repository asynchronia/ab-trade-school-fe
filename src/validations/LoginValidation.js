import { object, ref, string } from 'yup';

export const LoginStage1Schema = object().shape({
  email: string().email('Invalid email').required('Email is required'),
  password: string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one letter, one number, and one special character'
    )
    .required('Password is required'),
});

export const LoginStage2Schema = object().shape({
  email: string().email('Invalid email').required('Email is required'),
});

export const LoginStage3Schema = object().shape({
  newPassword: string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one letter, one number, and one special character'
    )
    .required('Password is required'),
  confirmPassword: string()
    .required('Confirm Password is required')
    .oneOf([ref('newPassword')], 'Passwords must match')
});