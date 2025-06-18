import * as yup from 'yup';

export const stage1Schema = yup.object().shape({
  phone: yup
    .string()
    .length(10, 'Phone number must be exactly 10 digits')
    .test(
      'starts-with-valid-digit',
      'Only phone numbers starting from 6 to 9 are allowed.',
      (value) => {
        if (!value) return false;
        const firstDigit = value[0];
        return ['6', '7', '8', '9'].includes(firstDigit);
      }
    )
    .test('only-digits', 'Phone number must contain only digits', (value) => {
      return /^\d+$/.test(value);
    })
    .required('Phone number is required'),
});

export const stage2Schema = yup.object().shape({
  otp: yup
    .string()
    .required('OTP is required')
    .length(6, 'OTP must be exactly 6 digits')
    .matches(/^\d{6}$/, 'OTP must be in numbers.'),
});

export const stage3Schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Please enter a valid name'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one letter, one number, and one special character'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
