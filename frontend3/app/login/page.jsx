'use client'
import LoginForm from '@/components/LoginForm'
import useAuthStore from '@/store/useAuthStore'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LoginPage() {
  const user = useAuthStore(state => state.user);
  const router = useRouter()

  useEffect(() => {
    if (user) {
      if(user?.role == "student"){
        router.replace('/dashboard');
      } else {
        router.replace('/admin/dashboard');
      }
    }
  },[])

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-emerald-700 bg-opacity-70 backdrop-blur-sm">
      <LoginForm />
    </main>
  )
}
