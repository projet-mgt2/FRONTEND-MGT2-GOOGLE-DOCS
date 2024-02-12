import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import apiUser from '../../api/users/user';
import { faEye, faEyeSlash , faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import token from '../../utils/Token';


export default function Login() {
  const { register, handleSubmit } = useForm({});
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const [bg, setBg] = useState(" p-8 w-120");

  const handleSignupClick = () => {
    router.push('/signup');
  };
  
  const onSubmit = async (data) => {
    apiUser.login(data).then((res) => {
      if (token.isJWT(res)) {
        setBg("bg-white   w-120 drop-shadow-[0_25px_25px_rgba(0,255,0,0.5)]");
        setTimeout(() => {
          router.push('/home');
        }, 1000);
      } else {
        setBg("bg-white rounded-md w-120 drop-shadow-[0_25px_25px_rgba(255,0,0,0.5)]");
        setTimeout(() => {
          setBg("bg-white  rounded-md w-120 drop-shadow-2xl");
          alert("Username or password not valid")
        }, 500);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center  justify-center bg-blue-100">
      <div className={bg}>
        <div className='flex w-160 bg-white rounded-md' >
        <div className="flex flex-col drop-shadow-2xl items-center w-96 mt-12 p-8 rounded-l-md">
          <FontAwesomeIcon
          icon={faFileAlt}
          size="6x"
          style={{ color: "blue" }}
         />
          <h2 className="text-xl text-black font-semibold  mt-10">Google Docs</h2>

        </div>
        <div className='p-8 w-96'>
      
            <h2 className="text-2xl text-black font-semibold mb-6 text-center bg-red">Login</h2>
          
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 border border-gray-300 w-full  text-black"
                  {...register("username", {required: true})}
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="mt-1 p-2 border border-gray-300 w-full  text-black"
                    {...register("password", { required: true })}
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="absolute top-2 right-3 cursor-pointer text-gray-500 mt-2"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>

    
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2  hover:bg-blue-600"
              >
                Login
              </button>
            </form>

          
            <p className="mt-2 text-sm text-gray-600">
              <a href="/forgot-password">Don&apos;t have an account?</a>
            </p>

            <button
              type="button"
              onClick={handleSignupClick}
              className="w-full mt-4 bg-green-500 text-white py-2  hover:bg-green-600"
            >
              Signup
            </button>
      </div>
        </div>
       
      </div>
    </div>
  );
}
