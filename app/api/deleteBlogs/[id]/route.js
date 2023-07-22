import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'

export async function DELETE(req,{params}){
try {
    const {id}=await params;
    const deleteBlog=await prisma.Post.delete({
        where:{
            id:id
        }
    })
    return NextResponse.json(deleteBlog)
} catch (error) {
    console.log(error)
}
}