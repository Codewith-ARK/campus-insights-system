'use client';

import { useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import useAuthStore from '@/store/useAuthStore';

export default function AuthWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoggedIn, validateSession } = useAuthStore();

  const checkAuthAndRedirect = useCallback(async () => {
    const isValid = await validateSession();
    
    // If on login page and authenticated, redirect to appropriate dashboard
    if (isValid && pathname === '/login') {
      if (user?.role === 'admin') {
        router.push('/admin/dashboard');
      } else {
        router.push('/dashboard');
      }
      return;
    }

    // If not authenticated and not on login page, redirect to login
    if (!isValid && pathname !== '/login') {
      router.push('/login');
    }
  }, [pathname, router, user?.role, validateSession]);

  useEffect(() => {
    checkAuthAndRedirect();
    const interval = setInterval(checkAuthAndRedirect, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [checkAuthAndRedirect]);

  // If we're on login page and not logged in, show content
  if (!isLoggedIn && pathname === '/login') {
    return <>{children}</>;
  }

  // If not logged in and not on login page, show nothing
  if (!isLoggedIn) {
    router.replace("/")
  }

  return <>{children}</>;
}