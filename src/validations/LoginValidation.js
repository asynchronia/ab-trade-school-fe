import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  phone: yup.string().length(10).required('Phone Number is required'),
});
