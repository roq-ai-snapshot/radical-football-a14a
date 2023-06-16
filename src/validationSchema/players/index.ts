import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  achievements: yup.string(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable(),
});
