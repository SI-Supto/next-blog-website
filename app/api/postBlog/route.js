import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'


export const dynamic = 'force-dynamic'
export async function POST(req){
    const {id}=await getCurrentUser()
    const data=await req.json();
    const postedblog=await prisma.Post.create({
        data:{
            ...data,userId:id
        }
    })
    return NextResponse.json(postedblog)
}