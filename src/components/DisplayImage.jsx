'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useState } from 'react'

const DisplayImage = ({imagePath,setDisplay,ImageIndex,setImageIndex,noOfImages}) => {
    const [currentImage, setCurrentImage] = useState(imagePath[ImageIndex])
    useEffect(()=>{
        setCurrentImage(imagePath[ImageIndex])
    },[ImageIndex])

    const handleDecrement = ()=>{
        const isFirst = ImageIndex ===0
        const currentSlide = isFirst? noOfImages-1:ImageIndex-1
        setImageIndex(currentSlide)
    }

    const handleIncrement = ()=>{
        const isLast = ImageIndex === noOfImages-1
        const currentSlide = isLast?0:ImageIndex+1
        setImageIndex(currentSlide)
    }

    

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50'>
        <div className='h-full w-full'>
            <p className='absolute top-8 right-10 text-white font-semibold text-lg cursor-pointer p-2' onClick={()=>setDisplay(false)}>X</p>
            <div className='h-[85%] w-[80%] top-16 mx-auto bg-orange-100 inset-0 relative cursor-pointer my-auto rounded-md'>
                <Image className='object-cover' src={imagePath[ImageIndex]} fill={true}
            objectFit="cover" alt=''/>
            </div>
            <div className='absolute top-1/2 left-2 text-white font-semibold text-lg cursor-pointer p-2' onClick={handleDecrement}>{'<'}</div>
            <div className='absolute top-1/2 right-2 text-white font-semibold text-lg cursor-pointer p-2' onClick={handleIncrement}>{'>'}</div>
        </div>
    </div>
  )
}

export default DisplayImage