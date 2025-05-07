'use client';

import axiosClient from '@/lib/axios';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await axiosClient.get('/api/me');
        console.log(res)
        setUser(res.data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    if (isLoggedIn) {
      fetchUser();
    }
  }, [isLoggedIn]);

  const logout = async () => {
    try {
      // await axiosClient.post('/api/logout/');
      setUser(null);
      setIsLoggedIn(false);
    } catch (err) {
      console.error('Logout failed:', err);
      throw new Error(err.message)
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
