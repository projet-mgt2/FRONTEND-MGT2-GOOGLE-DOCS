import { useRouter } from 'next/router';
import React from 'react';

export default function Login() {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push('/signup');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login from google docs</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 border border-gray-300 w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border border-gray-300 w-full rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Ajoutez le paragraphe avec le lien Forgot Password */}
        <p className="mt-2 text-sm text-gray-600">
          <a href="/forgot-password">Forgot Password?</a>
        </p>

        <button
          type="button"
          onClick={handleSignupClick}
          className="w-full mt-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

