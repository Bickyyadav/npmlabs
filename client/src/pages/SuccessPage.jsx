import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyPayment = async () => {
      const data = searchParams.get('data');
      if (!data) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(import.meta.env.VITE_SERVER_URL + `/api/payment/verify-esewa?data=${data}`);

        // Update user data to fetch new aiCredits
        const userRes = await axios.get(import.meta.env.VITE_SERVER_URL + "/api/user/currentuser", {
          withCredentials: true
        });
        dispatch(setUserData(userRes.data));

      } catch (err) {
        console.error(err);
        setError('Payment verification failed.');
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [searchParams, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 text-center border border-gray-100 dark:border-zinc-800">
        {loading ? (
          <>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Verifying Payment...</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Please wait while we verify your transaction.
            </p>
          </>
        ) : error ? (
          <>
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Verification Failed</h2>
            <p className="text-red-500 mb-8">{error}</p>
          </>
        ) : (
          <>
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Payment Successful!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Thank you for your purchase. Your AI credits have been successfully added to your account.
            </p>
          </>
        )}
        <button
          onClick={() => navigate('/')}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
