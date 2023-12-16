'use client'
import React from 'react'
import { useUser } from "@clerk/nextjs";
export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className='h-screen flex items-center justify-center'>
      <h1 className='text-4xl font-bold'>Welcome to Clerk dashboard {user.fullName}</h1>
    </div>   
  )
}
