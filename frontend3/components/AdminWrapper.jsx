'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/useAuthStore';

export default function AdminWrapper({ children }) {
  const router = useRouter();
  const user = useAuthStore(state => state.user);

  useEffect(() => {
    if (user?.role == 'student') {
      router.replace('/unauthorized');
    }
  }, [user, router]);

  if (!user?.role || user.role !== 'admin') {
    return null;
  }

  return <>{children}</>;
}