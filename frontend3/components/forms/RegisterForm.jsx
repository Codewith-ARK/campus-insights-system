'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../validation/registerSchema';
import InputField from '../InputField';
import Link from 'next/link';
import axiosClient from '@/public/icon/axios';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axiosClient.post('/api/users/register/', data);
      console.log(res)
      if(res.status === 201 || res.status === 200) {
        router.refresh()
        router.push('/login')
      } 
      reset();
    } catch (err) {
      console.error('Register failed:', err.response?.data || err.message);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-4 z-10 relative max-w-lg lg:mx-auto my-20 p-6 bg-black/30 backdrop-blur-3xl rounded-lg shadow-md overflow-clip">
      {/* Animated background shapes */}
      <div className="-z-10 absolute top-0 left-0 w-80 h-80 bg-yellow-400 rounded-full filter blur-2xl opacity-30 "></div>
      <div className="-z-10 absolute top-1/3 left-1/3 w-96 h-96 bg-purple-400 rounded-full filter blur-2xl opacity-30 "></div>
      <div className="-z-10 absolute top-1/3 left-1/2 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-30 "></div>
      <div className="-z-10 absolute bottom-1/3 right-1/2 w-96 h-96 bg-pink-800 rounded-full blur-3xl opacity-30 "></div>

      <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          name="first_name"
          register={register}
          error={errors.first_name}
        />
        <InputField
          label="Last Name"
          name="last_name"
          register={register}
          error={errors.last_name}
        />
      </div>

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

      <InputField
        label="Confirm Password"
        name="confirm_password"
        type="password"
        register={register}
        error={errors.confirm_password}
      />

      <InputField
        label="Student Roll Number"
        name="roll_number"
        register={register}
        error={errors.roll_number}
      />




      <button
        type="submit"
        className="w-full mt-4 py-2 bg-emerald-500 hover:bg-emerald-700 hover:scale-105 text-white rounded-md transition duration-300 ease-out cursor-pointer"
      >
        Register
      </button>

      <p className='text-center py-4'>Already a user? <Link className='text-blue-500 underline hover:no-underline' href={"/login"}>Login</Link></p>

    </form>
  );
};

export default RegisterForm;