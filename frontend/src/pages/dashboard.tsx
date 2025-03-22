import { Layout } from '../components/layout/layout';
import { useAuth } from '../lib/auth-context';

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Welcome to your Dashboard{user?.name ? `, ${user.name}` : ''}!
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This is where you'll manage your research interests and view paper recommendations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <h3 className="ml-3 text-lg font-bold text-gray-800 dark:text-white">
                      Create Interest Profile
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  Define your research interests using natural language or structured filters.
                </p>
                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-blue-600 dark:text-blue-500" href="#">
                  Get started
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                      <polyline points="17 21 17 13 7 13 7 21" />
                      <polyline points="7 3 7 8 15 8" />
                    </svg>
                    <h3 className="ml-3 text-lg font-bold text-gray-800 dark:text-white">
                      Browse Papers
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  Discover new research papers based on your interest profiles.
                </p>
                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-blue-600 dark:text-blue-500" href="#">
                  Explore
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                    </svg>
                    <h3 className="ml-3 text-lg font-bold text-gray-800 dark:text-white">
                      Manage Library
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  Access your saved papers and organize your research library.
                </p>
                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-blue-600 dark:text-blue-500" href="#">
                  View library
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}