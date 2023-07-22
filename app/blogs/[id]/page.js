import BlogData from '@/app/components/BlogData'
import TrialPage from '@/app/components/TrialPage'
import React from 'react'

const Blog = ({params:{id}}) => {
    console.log(id)
  return (
    <div>
    <BlogData id={id}/>
    <TrialPage/>
    </div>
  )
}

export default Blog