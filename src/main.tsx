
import { createRoot } from 'react-dom/client'
import './index.css'
import { lazy, Suspense } from 'react'

// Use lazy loading for the App component
const App = lazy(() => import('./App.tsx'))

// Create a simple loading state
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-purple-50">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-purple-800 mb-2">Wirtualny Alkomat Online</h1>
      <p className="text-gray-600">Ładowanie kalkulatora...</p>
    </div>
  </div>
)

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingFallback />}>
    <App />
  </Suspense>
);
