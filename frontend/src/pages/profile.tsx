import { Layout } from '../components/layout/layout';
import { ProfileForm } from '../modules/auth/components/profile-form';

export function ProfilePage() {
  return (
    <Layout>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <ProfileForm />
      </div>
    </Layout>
  );
}