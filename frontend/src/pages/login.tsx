import { Layout } from '../components/layout/layout';
import { LoginForm } from '../modules/auth/components/login-form';

export function LoginPage() {
  return (
    <Layout>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <LoginForm />
      </div>
    </Layout>
  );
}