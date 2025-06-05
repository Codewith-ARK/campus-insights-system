'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import useAuthStore from '@/store/useAuthStore';

export default function AdminWrapper({ children }) {
  const router = useRouter();
  const user = useAuthStore(state => state.user);
  const path = usePathname();

  useEffect(() => {
    if (user?.role == 'student') {
      router.replace('/unauthorized');
    } else {
      router.replace(path);
    }
  }, [user, router]);

  if (!user?.role) {
    return null;
  }

  return <>{children}</>;
}