import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const signupData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(signupData);
    await axios
      .post(`http://localhost:3001/user/signup`, signupData)
      .then((response) => {
        if (response.data) {
          console.log("User Signup  ", response.data);
          toast.success("User Signup Success");
        }
        localStorage.setItem("userdetails", JSON.stringify(response.data.user));
      })
      .catch((error) => {
        console.log("Vayena", error);
        toast.error("User Signup Failed");
      });
  };

  return (
    <>
      <section className=" dark:bg-slate-200 text-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-black"
          >
            Adarsha-Tour
          </a>
          <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl  text-white dark:text-black ">
                Create new account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium   text-white dark:text-black "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    id="email"
                    className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  text-white dark:text-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium   text-white dark:text-black "
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    {...register("name", { required: true })}
                    id="name"
                    className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  text-white dark:text-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xyz abc"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium   text-white dark:text-black "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  text-white dark:text-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full dark:bg-gray-800 dark:border-gray-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
