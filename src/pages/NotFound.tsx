
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 px-4">
      <Helmet>
        <title>404 - Strona Nie Znaleziona | Wirtualny Alkomat ONLINE</title>
        <meta name="description" content="Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona." />
        <link rel="canonical" href="https://wirtualny-alkomat-online.pl/404" />
      </Helmet>
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-purple-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Strona nie znaleziona</h2>
        <p className="text-gray-600 mb-6">
          Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 rounded-md bg-purple-700 text-white font-medium hover:bg-purple-800 transition-colors"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
