import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const navigate = useNavigate();

  const handleGoButtonClick = () => {
    if (selectedCountry && selectedLanguage) {
      navigate('/response', {
        state: {
          country: selectedCountry,
          language: selectedLanguage,
        },
      });
    }
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 to-pink-400 dark:from-red-600 dark:to-red-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-500 dark:text-yellow-300 mb-6">
          Welcome to ELLIS!
        </h1>
        <p className="mt-2 text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 mb-8">
          Please answer these simple questions to get started!
        </p>
        <div className="mt-4 w-full">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="country">
            What country are you moving from?
          </label>
          <input
            type="text"
            className="mt-1 block w-full shadow-sm sm:text-sm rounded-md bg-white dark:bg-gray-800 border-pink-200 dark:border-yellow-300"
            id="country"
            name="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          />
        </div>
        <div className="mt-6 w-full">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="language">
            What language do you prefer?
          </label>
          <input
            type="text"
            className="mt-1 block w-full shadow-sm sm:text-sm rounded-md bg-white dark:bg-gray-800 border-pink-200 dark:border-yellow-300"
            id="language"
            name="language"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          />
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleGoButtonClick}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 dark:bg-yellow-300 dark:hover:bg-yellow-400"
          >
            Go!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
