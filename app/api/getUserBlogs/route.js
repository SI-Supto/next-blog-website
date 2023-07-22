import { NextResponse } from "next/server";
import  prisma  from "@/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export const dynamic = 'force-dynamic'
export  async function GET(){
try {
const {id}=await getCurrentUser()
const savedBlogs=await prisma.User.findUnique({
    where:{
        id:id 
    },
    include:{
        posts:true
    }
}) 
return NextResponse.json(savedBlogs)   
} catch (error) {
    console.log(error)
}
}