
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
    theme: {
        colorScheme: "light", 
        brandColor: "#6366F1",
        logo: "https://cdn-icons.flaticon.com/png/512/2200/premium/2200326.png?token=exp=1645895592~hmac=da0b4f6123a2c5e4ed4f19c4311610f2" 
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
})