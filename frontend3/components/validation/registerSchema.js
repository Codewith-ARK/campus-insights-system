import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Please confirm your password'),
  enrollment_number: yup.string().required('Student roll number is required'),
  department: yup.string().oneOf(['cs', 'it', 'bba', 'bed', 'english'], 'Invalid department').required('Department field is required'),
  batch: yup.string().oneOf(['2k19', '2k20', '2k21', '2k22', '2k23', '2k24', '2k25'], 'Invalid batch').required('Batch field is required'),
  role: yup.string().oneOf(['student'], 'Invalid role').default('student'),
});
