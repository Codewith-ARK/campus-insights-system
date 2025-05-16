'use client'
import React, { createContext, useState, useContext } from 'react';

export const FormBuilderContext = createContext();

export const FormBuilderProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);

  return (
    <FormBuilderContext.Provider value={{ title, setTitle, description, setDescription, questions, setQuestions }}>
      {children}
    </FormBuilderContext.Provider>
  );
};

export const useFormBuilder = () => useContext(FormBuilderContext);
