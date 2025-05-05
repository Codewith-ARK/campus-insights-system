'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()
  useEffect(() => {
    fetch('/api/logout', { method: 'GET' }).then(() => router.push('/login'))
  }, [])
  return <p>Logging out...</p>
}
