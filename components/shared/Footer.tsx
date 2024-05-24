import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/' className='flex-center'>
          <Image 
            src="/logo.svg"
            alt="logo"
            width={70}
            height={38}
          />
          <p className='text-xl font-semibold tracking-tight'>We <span className='text-primary'>Clean</span></p>
        </Link>

        <p>2024 Proxy. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer