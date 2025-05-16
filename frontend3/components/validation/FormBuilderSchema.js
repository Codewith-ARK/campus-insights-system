// validation/formBuilderSchema.js
import * as yup from 'yup';

export const formBuilderSchema = yup.object({
  title: yup.string().required('Form title is required'),
  department: yup.string().oneOf(['cs', 'it', 'bba', 'bed', 'english'], 'Invalid department').required('Department field is required'),
  batch: yup.string().oneOf(['2k19', '2k20', '2k21', '2k22', '2k23', '2k24', '2k25'], 'Invalid batch').required('Batch field is required'),
  description: yup.string(),
  questions: yup
    .array()
    .of(
      yup.object({
        id: yup.string().required(),
        question: yup.string().required('Question text is required'),
        type: yup.string().oneOf(['radio', 'checkbox']),
        options: yup
          .array()
          .of(yup.string().required('Option text is required'))
          .min(1, 'At least one option'),
      })
    )
    .min(1, 'You must add at least one question'),
});
