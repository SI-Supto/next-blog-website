"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const SigninBtn = () => {
   const {mode}=useContext(ThemeContext)
  const { data } = useSession();
  if (!data?.user?.email) {
    return (
      <button
      className={`px-1 text-sm md:text-base md:px-2 py-1 ${mode==='dark'?'bg-white text-black':'bg-black text-white'} rounded font-semibold`}
        onClick={() => {
          signIn("google");
        }}
      >
        Sign in
      </button>
    );
  }
  return (
    <>
      <button
        className={`px-1 text-sm md:text-base md:px-2 py-1 ${mode==='dark'?'bg-white text-black':'bg-black text-white'} rounded font-semibold`}
        onClick={() => {
          signOut();
        }}
      >
        sign out
      </button>
    </>
  );
};

export default SigninBtn;
