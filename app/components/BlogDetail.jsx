'use client'
import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import BlogCard from './BlogCard'

const BlogDetail = ({slice}) => {

const [data,setData]=useState([])

const fetchData=async(slice)=>{
    const api=await axios.get('/api/getBlogs')
    if(slice){
       return setData(api.data.slice(0,slice))
    }
    setData(api.data)
}
useEffect(() => {
  fetchData(slice)
}, [slice])

console.log(data)

  return (
   <div className='flex flex-wrap justify-center items-center px-2 py-3 gap-2 md:gap-3'>
    <BlogCard data={data}/>
   </div>
  )
}

export default BlogDetail