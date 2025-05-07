'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/UserContext';
import { toast } from 'sonner';

export default function Page() {
  const router = useRouter();
  const { logout } = useUser();

  useEffect(() => {
    // fetch('/api/logout', { method: 'GET' }).then(() => router.push('/login'))
    try {
      logout();
      toast.info("Logout Successful", {description: "Redirecting to homepage"})
    } catch(err){
      console.error(err);
      toast.error("Error logging out", {description: err.message});
    } finally {
      router.push('/login')
    }
  }, [])
  return <p>Logging out...</p>
}
