import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  username: yup.string().email('Invalid email').required('Email is required'),
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Please confirm your password'),
  roll_number: yup.string().required('Student roll number is required'),
  department: yup.string().default('cs'),
  role: yup.string().oneOf(['student'], 'Invalid role').default('student'),
});
