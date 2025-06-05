'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner';
import useAuthStore from '@/store/useAuthStore';

export default function Page() {
  const router = useRouter();
  const logout = useAuthStore(state => state.logout);

  useEffect(() => {
    try {
      logout();
      toast.info("Logout Successful", { description: "Redirecting to homepage" })
    } catch (err) {
      console.error(err);
      toast.error("Error logging out", { description: err.message });
    } finally {
      router.push('/login')
    }
  }, [])
  return (
    <div className='min-h-[550px] w-full bg-gray-900 flex justify-center items-center'>
      <span className='loading loading-spinner'></span>
    </div>
  )
}
