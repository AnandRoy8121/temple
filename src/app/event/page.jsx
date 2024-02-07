import ScrollingText from '@/components/ScrollingText'
import React from 'react'

const page = () => {
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ut necessitatibus totam odit distinctio ex et, nemo fugit rerum. Odit."
  return (
    <div className="overflow-hidden">
      {/* Your other content */}
      <div className="mt-10">
        <div className="w-full">
          {/* Replace 'Your scrolling text goes here...' with your actual text */}
          {/* <ScrollingText text={text} /> */}
          <div className="scrolling-text">
            <span>Your scrolling text goes here... </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page