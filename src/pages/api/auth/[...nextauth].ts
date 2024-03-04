import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                fullname: { label: "Full Name", type: "text" },
            },
            async authorize(credentials) {
                const { email, password, fullname } = credentials as {
                    email: string;
                    password: string;
                    fullname: string;
                }
                const user: any = { id: 1, email: email, password: password, fullname: fullname }
                if (user) {
                    console.log({user})
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        jwt({token, account, profile, user}: any) {
            if(account?.provider === "credentials") {
                token.email = user.email
                token.fullname = user.fullname
                token.password = user.password
            }
            console.log({token, account, user})
            return token
        },
        async session({session, token}: any) {
            if("email" in token) {
                session.user.email = token.email
            }
            if("fullname" in token) {
                session.user.fullname = token.fullname
            }
            if("password" in token) {
                session.user.password = token.password
            }
            console.log({session, token})
            return session
        }
    }
}

export default NextAuth(authOptions);