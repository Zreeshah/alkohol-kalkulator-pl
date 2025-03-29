
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-2">{title}</h1>
          <p className="text-gray-600 max-w-3xl">{description}</p>
        </header>
        
        <main className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          {children}
        </main>
        
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2023 Wirtualny Alkomat ONLINE. To narzędzie ma charakter orientacyjny.</p>
          <p className="mt-2">
            Nie należy traktować wyliczeń jako dokładnych. 
            Nigdy nie prowadź pojazdu po spożyciu alkoholu.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
