
import React from 'react';
import Layout from '@/components/Layout';
import { Send } from 'lucide-react';

const Kontakt = () => {
  return (
    <Layout 
      title="Kontakt - Formularz Kontaktowy" 
      description="Masz pytania o kalkulator alkoholowy? Skorzystaj z formularza kontaktowego, aby się z nami skontaktować. Odpowiemy najszybciej jak to możliwe."
    >
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-purple-800 mb-2">Dane kontaktowe</h2>
          <p className="mb-4">Jeśli masz pytania dotyczące kalkulatora alkoholowego lub potrzebujesz dodatkowych informacji, skorzystaj z poniższego formularza kontaktowego lub napisz do nas bezpośrednio.</p>
          
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="font-medium mr-2">Email:</span> 
              <a href="mailto:kontakt@wirtualnyalkomat.pl" className="text-purple-700 hover:underline">kontakt@wirtualnyalkomat.pl</a>
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-purple-800 mb-4">Formularz kontaktowy</h2>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" 
                  placeholder="Jan Kowalski"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" 
                  placeholder="jan.kowalski@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Temat</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" 
                placeholder="Temat wiadomości"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" 
                placeholder="Treść wiadomości..."
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="privacy" 
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" 
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                Akceptuję <a href="/polityka-prywatnosci" className="text-purple-700 hover:underline">politykę prywatności</a> i zgadzam się na przetwarzanie moich danych osobowych
              </label>
            </div>
            
            <button 
              type="submit" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Send className="mr-2 h-5 w-5" /> Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Kontakt;
