import { useState, FormEvent } from 'react';
import { useAuth } from '../../../lib/auth-context';

export function ProfileForm() {
  const { user, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    setIsLoggingOut(false);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Your Profile</h1>
          </div>

          <div className="mt-5">
            <div className="grid gap-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">Email</label>
                <div className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                  {user.email}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">Name</label>
                <div className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                  {user.name || 'Not provided'}
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  {isLoggingOut ? 'Logging out...' : 'Sign out'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}