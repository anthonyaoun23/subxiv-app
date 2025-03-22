import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { useAuth } from '../lib/auth-context';

export function HomePage() {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              SubXiv: Next-Gen arXiv Monitoring
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              A personalized research monitoring system where users define their intellectual interests through natural language prompts and structured filters to receive curated arXiv updates.
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              {user ? (
                <Link to="/dashboard" className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                  Go to Dashboard
                  <svg className="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Link>
              ) : (
                <>
                  <Link to="/login" className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                    Sign in
                    <svg className="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </Link>
                  <Link to="/register" className="inline-flex justify-center items-center gap-x-3 text-center border border-transparent text-gray-800 hover:text-blue-600 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:text-white dark:focus:ring-offset-gray-800">
                    Create an account
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="Research monitoring dashboard" />
          </div>
        </div>
      </div>
    </Layout>
  );
}