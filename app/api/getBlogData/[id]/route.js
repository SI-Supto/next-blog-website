import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'

export async function GET(req,{params}){
    try {
        const {id}=await params;
        console.log(id)
        const blogData=await prisma.Post.findUnique({
            where:{
                id:id
            }
        })
         return NextResponse.json(blogData)  
    } catch (error) {
        console.log(error)
    }

}