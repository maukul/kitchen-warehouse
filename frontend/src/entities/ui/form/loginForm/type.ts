import { z } from 'zod';

export type LoginFormValue = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  defaultValues?: LoginFormValue;
  onSubmit: (valueForm: LoginFormValue) => void;
  schema: z.ZodType<LoginFormValue>;
};
