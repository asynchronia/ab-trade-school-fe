import { object, string } from 'yup';

export const ModuleRegistrationSchema = object().shape({
  name: string().required('Name is required'),
  email: string().email('Invalid email').required('Email is required'),
  phone: string()
    .matches(/^[6-9]\d{9}$/, 'Invalid mobile number')
    .required('Mobile number is required'),
  state: string().required('State is required'),
});
