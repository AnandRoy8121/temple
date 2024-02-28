'use client'
import React, {  useState } from "react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { validateForm } from "@/utils/validate";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@/utils/redux/userSlice";


const SignSignUpForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validationMessage, setValdationMessage] = useState(null);
  const router = useRouter()
  const dispatch = useDispatch();
  const getUser = useSelector((store)=>store.user.currentUser)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      try {
        const authenticate = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(email, password)
        const user = authenticate.user;
        setEmail("");
        setPassword("");
        const {uid,userEmail} = user
        dispatch(addUser({uid,userEmail}))
        router.push('/')
        
      } catch (error) {
        console.log(error.message);
        setValdationMessage(error.code + " : " + error.message);
      }
    }
    console.log(getUser)
    if(getUser){
      return router.push('/')
    }

  return (
    <form
      className="flex flex-col mt-28 mx-auto w-[80%] sm:w-[35%] p-12 bg-black/60 absolute inset-0 rounded-md gap-6"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-semibold text-white">
        Sign In
      </h1>
      <p className="text-red-400 text-sm p-1 -my-4">{validationMessage}</p>
      <div className="flex flex-col gap-6">
        <input
          className="bg-[#333] p-4 w-full text-gray-300 rounded-md"
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email or phone number"
          name="email"
        />
        <input
          className="bg-[#333] p-4 w-full text-gray-300 rounded-md"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          name="email"
        />
      </div>
      <button className="bg-[#e50914] font-semibold p-4 w-full text-white rounded-md">
        Sign In
      </button>
    </form>
  );
};

export default SignSignUpForm;
