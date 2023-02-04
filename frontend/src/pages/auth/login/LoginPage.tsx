import { z } from 'zod';

import { LoginForm, LoginFormValue } from '../../../entities/ui/form/loginForm';
import { Hero } from '../../../shared/ui/hero';

const schemaValidationLoginForm = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export const LoginPage = () => {
  const handelOnSubmit = (values: LoginFormValue) => {
    console.log('values', values);
  };
  return (
    <Hero
      classNameHero="min-h-screen bg-base-200"
      classNameHeroContent="flex-col lg:flex-row-reverse"
    >
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Вхід</h1>
        <p className="py-6">Вхід в склад.</p>
      </div>
      <LoginForm onSubmit={handelOnSubmit} schema={schemaValidationLoginForm} />
    </Hero>
  );
};
