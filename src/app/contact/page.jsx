'use client'
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const page = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Om Shree Vishumaya Namah";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        (success) => {
          setSuccess(true);
          form.current.reset();
        },
        (err) => {
          setError(true);
        }
      );
  };
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="flex items-center my-auto h-1/2 md:h-full w-full md:w-1/2 text-xl md:text-3xl text-[#f15c1d]">
           👏
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            👏
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-base md:text-xl flex flex-col gap-8 justify-center p-16 text-[#f15c1d]"
        >
          <span className='text-xl'>Write Message To Us,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-[#f15c1d] outline-none resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-[#f15c1d] outline-none"
          />
          <span>Regards</span>
          <button className="bg-orange-200 rounded font-semibold text-Orange-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
  )
}

export default page