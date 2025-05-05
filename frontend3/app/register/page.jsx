import RegisterForm from '@/components/forms/RegisterForm'
import React from 'react'

export default function page() {
  return (
    <div>
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-emerald-700 backdrop-blur-sm">
        <RegisterForm />
     </main>
    </div>
  )
}
