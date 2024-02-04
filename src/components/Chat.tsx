import { Link } from 'react-router-dom';

export default function Chat() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 to-pink-400 dark:from-red-600 dark:to-red-800">
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-1/4">
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-500 dark:text-yellow-300 mb-6">
            Chat with ELLIS!
          </h1>
          <p className="mt-2 text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 mb-8">
            Please answer these simple questions to get started!
          </p>
          <div className="mt-4 w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="country">
              What country are you moving from?
            </label>
            <select
              className="mt-1 block w-full shadow-sm sm:text-sm rounded-md bg-white dark:bg-gray-800 border-pink-200 dark:border-yellow-300"
              id="country"
              name="country"
            >
              <option value="">Select your country</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="canada">Canada</option>
            </select>
          </div>
          <div className="mt-6 w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="language">
              What language do you prefer?
            </label>
            <select
              className="mt-1 block w-full shadow-sm sm:text-sm rounded-md bg-white dark:bg-gray-800 border-pink-200 dark:border-yellow-300"
              id="language"
              name="language"
            >
              <option value="">Select your language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/response">
              <button
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 dark:bg-yellow-300 dark:hover:bg-yellow-400"
              >
                Go!
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/4">
        </div>
      </div>
    </section>
  )
}

