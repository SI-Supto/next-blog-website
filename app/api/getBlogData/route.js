import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'

export async function POST(req){
    try {
        const {id}=await req.json();
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