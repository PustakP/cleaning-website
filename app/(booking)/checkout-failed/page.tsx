"use client"
import { Button } from '@/components/ui/button'
import { CheckCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const CheckoutSuccess = () => {
    const router = useRouter()

  return (
    <>
        <div className='flex-center flex-col w-full h-screen gap-10'>
            <h1 className='h2-medium flex-center text-sky-950'>Your Booking was failed</h1>
            <p></p>
            <Button className='button' size={'lg'} onClick={()=> (router.push('/book'))}>Try Again!</Button>
        </div>
    </>
)
}

export default CheckoutSuccess