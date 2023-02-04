import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card } from '@/shared/ui/card';
import { TextInput } from '@/shared/ui/textInput';
import { Button } from '@/shared/ui/button';

import type { LoginFormProps } from './type';

export const LoginForm = (props: LoginFormProps) => {
  const {
    defaultValues = { email: '', password: '' },
    onSubmit,
    schema,
  } = props;
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card classNameCard="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              size="md"
              error={fieldState.error?.message}
              label="Електронна пошта"
              border
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              size="md"
              error={fieldState.error?.message}
              label="Пароль"
              border
            />
          )}
        />
        <div className="form-control mt-6">
          <Button color="primary" wide buttonType="submit">
            Login
          </Button>
        </div>
      </Card>
    </form>
  );
};
