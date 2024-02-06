import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import apiUser from './api/user';

export default function Login() {
  const { register, handleSubmit } = useForm({});
  const router = useRouter();
  const [bg, setBg] = useState("bg-white p-8 rounded-md w-96 drop-shadow-2xl");

  const handleSignupClick = () => {
    router.push('/signup');
  };
  
  const onSubmit = async (data) => {
    apiUser.login(data).then((res) => {
      if (res == "Authentification with succes") {
        setBg("bg-white p-8 rounded-md w-96 drop-shadow-[0_25px_25px_rgba(0,255,0,0.5)]");
        setTimeout(() => {
          router.push('/accueil');
        }, 1000);
      } else {
        setBg("bg-white p-8 rounded-md w-96 drop-shadow-[0_25px_25px_rgba(255,0,0,0.5)]");
        setTimeout(() => {
          setBg("bg-white p-8 rounded-md w-96 drop-shadow-2xl");
        }, 1000);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className={bg}>
        <h2 className="text-2xl text-black font-semibold mb-6">Login from google docs</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 border border-gray-300 w-full rounded-md text-black"
              {...register("username", {required: true})}
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
              className="mt-1 p-2 border border-gray-300 w-full rounded-md text-black"
              {...register("password", {required: true})}
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

