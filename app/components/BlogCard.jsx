'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const BlogCard = ({data}) => {
    const {mode}=useContext(ThemeContext)
  return (
    <>
    {
        data.map((blog)=>(
            <div key={blog.id} className='w-[320px] md:w-[378px] min-h-[487px]'>
                <Link href={`/blogs/${blog.id}`}>
                <div className='relative w-full h-[232px]'>
                    <Image src={blog.image} fill priority alt='blog_image' className='object-cover'/>
                </div>
                <div className='px-2 py-3'>
                    <div className="title text-lg">
                        {blog.title}
                    </div>
                    <div className="desc pt-3 text-sm">
                        {blog.description.slice(0,150)}..
                    </div>
                        <button className={`mt-4 ring-1 py-1 px-2 ${mode==='dark'?'ring-white':'ring-black'}`}>
                            view more
                        </button>
                </div>
        
                    </Link>
            </div>

        ))
    }
    </>
  )
}

export default BlogCard