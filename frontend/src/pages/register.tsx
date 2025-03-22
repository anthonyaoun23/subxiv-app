import { Layout } from '../components/layout/layout';
import { RegisterForm } from '../modules/auth/components/register-form';

export function RegisterPage() {
  return (
    <Layout>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <RegisterForm />
      </div>
    </Layout>
  );
}