import nextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@auth/prisma-adapter'
import prisma from '@/libs/prismadb'


export const authOptions={
    adapter:PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        })
    ],
    debug:process.env.NODE_ENV==='development',
    secret:process.env.NEXT_AUTH_SECRET
}

const handler=nextAuth(authOptions);
export {handler as GET,handler as POST}