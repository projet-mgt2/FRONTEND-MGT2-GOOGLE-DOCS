import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import apiUser from './api/user';

export default function Signup(){
  const { register, handleSubmit } = useForm({});
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };
  
  const onSubmit = async (data) => {
    console.log(data);
    apiUser.signup(data);
    router.push('/login');
  };

    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 shadow-md rounded-md w-96">
            <h2 className="text-2xl text-black font-semibold mb-6">Signup</h2>
    
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                  First name
                </label>
                <input
                  type='text'
                  id="firstName"
                  name="firstName"
                  {...register("first_name", {required: true})}
                  className="mt-1 p-2 border border-gray-300 w-full rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                  Last name
                </label>
                <input
                type='text'
                  id="lastName"
                  name="lastName"
                  {...register("last_name", {required: true})}
                  className="mt-1 p-2 border border-gray-300 w-full rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email", {required: true})}
                  className="mt-1 p-2 border border-gray-300 w-full rounded-md text-black"
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
                  {...register("password", {required: true})}
                  className="mt-1 p-2 border border-gray-300 w-full rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  {...register("confirmPassword", {required: true})}
                  className="mt-1 p-2 border border-gray-300 w-full rounded-md text-black"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
              >
                Signup
              </button>
            </form>
            <hr className=' p-2'/>
            <button
              type="button"
              onClick={handleLoginClick}
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      );
}