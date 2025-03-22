import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/layout';

export function NotFoundPage() {
  return (
    <Layout>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-20 lg:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Oops! Page not found.
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              The page you are looking for might have been removed or is temporarily unavailable.
            </p>

            <div className="mt-8">
              <Link to="/" className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                Go back home
                <svg className="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative ms-4">
            <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="404 illustration" />
          </div>
        </div>
      </div>
    </Layout>
  );
}