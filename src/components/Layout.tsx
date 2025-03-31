
import React from 'react';
import Navigation from './Navigation';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  const location = useLocation();
  const canonicalUrl = `https://wirtualny-alkomat-online.pl${location.pathname}`;

  return (
    <div className="min-h-screen bg-purple-50">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-3">{title}</h1>
          <p className="text-gray-600 max-w-3xl text-lg">{description}</p>
        </header>
        
        <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          {children}
        </main>
        
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2024 Wirtualny Alkomat ONLINE. To narzędzie ma charakter orientacyjny.</p>
          <p className="mt-2">
            Nie należy traktować wyliczeń jako dokładnych. Nigdy nie prowadź pojazdu po spożyciu alkoholu.
          </p>
          <p className="mt-4">
            Szanujemy Twoją prywatność. Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach statystycznych, reklamowych oraz funkcjonalnych.
            Dowiedz się wiecej na stronie <Link to="/polityka-prywatnosci" className="text-purple-600 hover:underline">polityka prywatności</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
