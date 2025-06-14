import React from 'react';

const InputField = ({ label, name, register, type = 'text', error }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      {...register(name)}
      type={type}
      className={`w-full px-3 py-2 input border rounded-md focus:outline-none focus:ring ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

export default InputField;
