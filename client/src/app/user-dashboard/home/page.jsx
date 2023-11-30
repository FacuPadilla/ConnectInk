"use client";
import TopBarOptions from "@/components/topBarOptions/TopBarOptions";
import  { useEffect } from "react";
import { auth } from "../../../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import PostsDashboard from '@/components/postsDashboard/PostsDashboard'
import React from 'react'

const Home = () => {
  return (
    <div>
      
        <PostsDashboard />
    </div>
  )
}

export default Home;