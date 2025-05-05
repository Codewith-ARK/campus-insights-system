'use client'
import LoginForm from '@/components/LoginForm'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' })
  const router = useRouter()



  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-emerald-700 bg-opacity-70 backdrop-blur-sm">
      <LoginForm />
    </main>
  )
}
