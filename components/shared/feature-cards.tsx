import React from 'react'

interface Feature{
    icon: React.ElementType;
    title: string;
    description : string;
}

export const FeatureCards = ({icon: Icon, title , description} : Feature) => {
  return (
    <div className='w-96 h-96 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center px-6 justify-center gap-6 border border-black/10'>
        <div className='p-6 bg-green-300 rounded-full'><Icon className='w-8 h-8 text-green-700' /></div>
        <h1 className='text-2xl text-sky-900 text-center font-bold'>{title}</h1>
        <h1 className='text-lg leading-tight text-black/40 text-center font-medium'>{description}</h1>
    </div>
  )
}
