import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoggedIn, setIsLoggedIn] = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        email: data.email,
        password: data.password,
      });

      const user = response.data.user;
      const token = response.data.token;

      localStorage.setItem("userdetails", JSON.stringify(user));
      localStorage.setItem("token", token);

      setIsLoggedIn(user);

      toast.success("Login successful");

      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Invalid login credentials");
      console.log("Login failed", error);
    }
  };

  return (
    <section className="pt-36 pb-32 dark:bg-slate-200">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
        <h1 className="text-3xl font-semibold mb-5 dark:text-black">
          Adarsha Tour Admin Login
        </h1>

        <div className="w-full rounded-lg shadow border sm:max-w-md p-6 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="name@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">Email is required</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">Password is required</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-5 py-2.5"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
