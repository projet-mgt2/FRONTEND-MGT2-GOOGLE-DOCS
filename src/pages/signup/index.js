import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import apiUser from "../../api/users/user";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const { register, handleSubmit } = useForm({});
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleSuccess = () => {
    toast.success('Signup succesfuly!', {
      position: 'top-center',
      autoClose: 3000, // Durée en millisecondes (ajustez selon vos besoins)
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const handleError = () => {
    toast.error('Signup failed!', {
      position: 'top-center',
      autoClose: 3000, // Durée en millisecondes (ajustez selon vos besoins)
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const passError = () => {
    toast.error('Signup faild password incompatible!', {
      position: 'top-center',
      autoClose: 3000, // Durée en millisecondes (ajustez selon vos besoins)
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const onSubmit = async (data) => {
    apiUser.signup(data).then((res) => {
      if (data.password != data.confirmPassword) {
        passError();
      }else if (res == "User created with success") {
        setTimeout(() => {
          handleSuccess();
        }, 900);
        setTimeout(() => {
          router.push("/login");
        }, 1400);
      }else{
        setTimeout(() => {
          handleError
        }, 1000);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 drop-shadow-2xl w-auto">
        <h2 className="text-4xl text-black font-semibold mb-6 flex justify-center font">
          Signup
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center"
        >
          <div className="flex gap-3">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-600"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                {...register("first_name", { required: true })}
                className="mt-1 p-2 border border-gray-300 w-full text-black"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-600"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                {...register("last_name", { required: true })}
                className="mt-1 p-2 border border-gray-300 w-full text-black"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: true })}
              className="mt-1 p-2 border border-gray-300 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password",
              { required: true, minLength:{value:8, message:" please enter a password longer than 8 characters "} })}
              className="mt-1 p-2 border border-gray-300 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              {...register("confirmPassword", 
              { required: true, minLength:{value:8, message:" please enter a password longer than 8 characters "} })}
              className="mt-1 p-2 border border-gray-300 w-full text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 hover:bg-green-600 mt-3"
          >
            Signup
          </button>
          <button
            type="button"
            onClick={handleLoginClick}
            className="mt-4 bg-blue-500 text-white py-2 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
