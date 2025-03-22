import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}