'use client'; // For Next.js App Router

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './validation/loginSchema';
import InputField from './InputField';
import Link from 'next/link';
import axiosClient from '@/public/icon/axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';


const LoginForm = () => {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axiosClient.post('/api/token/', data);
      // Optionally redirect or store user info
      toast.success('Login successful')
      reset();
      router.push("/dashboard")
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      console.error(err)
      toast.error("Login Failed", {description: err.response.data.detail})
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-black/30 relative z-20 bg-opacity-30 backdrop-blur-lg p-6 py-20 rounded-lg shadow-2xl w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h2>

      <InputField
        label="Email"
        name="username"
        register={register}
        error={errors.username}
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        register={register}
        error={errors.password}
      />

      <button
        type="submit"
        className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-700 hover:scale-105 transition ease-out duration-300 cursor-pointer"
      >
        Sign In
      </button>

      <p className='text-center py-4'>Don't have an account? <Link className='text-blue-500 underline hover:no-underline' href={"/register"}>Register</Link></p>
    </form>
  );
};

export default LoginForm;
