import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'
export async function GET(){
    const blogs=await prisma.Post.findMany({});
    return NextResponse.json(blogs);
}