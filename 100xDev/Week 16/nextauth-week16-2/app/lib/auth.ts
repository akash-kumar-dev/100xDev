import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label: 'Username', type: 'text', placeholder: 'example@gmail.com'},
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                console.log(credentials);
                // validation
                return {
                    id: "user1",
                    name: "admin",
                    email: "example@gmail.com"
                }

                // return null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: ({token, user}) => {
            token.userId = token.sub;
            return token;
        },
        session: ({session, token, user}: any) => {
            if(session && session.user) {
                session.user.id = token.userId; // token.sub
            }
            return session;
        }
    },
    pages: {
        signIn: "/signin"
    }
}