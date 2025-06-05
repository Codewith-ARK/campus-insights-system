'use client'; // For Next.js App Router

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './validation/loginSchema';
import InputField from './InputField';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import useAuthStore from '@/store/useAuthStore';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore(state => state.login);
  const user = useAuthStore(state => state.user);
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
      setIsLoading(true);
      const res = await login(data);
      toast.success('Login successful')
      reset();
      if (res?.data?.user?.role != 'student') {
        router.replace("/admin/dashboard");
      }
      else {
        router.replace('/dashboard')
      }
    } catch (err) {
      console.error(err)
      console.error('Login failed:', err.response?.data || err.message);
      toast.error("Login Failed", { description: err.response.data.error })
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-black/30 relative z-20 bg-opacity-30 backdrop-blur-lg p-6 py-20 rounded-lg shadow-2xl w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h2>

      <InputField
        label="Email"
        name="email"
        register={register}
        error={errors.email}
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
        className={`rounded-full mt-2 w-full bg-emerald-500 text-white py-2 hover:bg-emerald-700 hover:scale-[1.02] transition ease-out duration-300 cursor-pointer btn-disabled disabled:bg-gray-500 disabled:scale-100`}
        disabled={isLoading}
      >
        {isLoading ? <span className="loading loading-spinner"></span> : "Sign In"}
      </button>

      <p className='text-center py-4'>Don't have an account? <Link className='text-blue-500 underline hover:no-underline' href={"/register"}>Register</Link></p>
    </form>
  );
};

export default LoginForm;
