import React from 'react';
import { useNavigate } from 'react-router-dom';

const FailurePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 text-center border border-gray-100 dark:border-zinc-800">
        <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Payment Failed</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We couldn't process your payment. Please try again or contact support if the issue persists.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/pricing')}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            Try Again
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-xl transition duration-300 ease-in-out"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailurePage;
