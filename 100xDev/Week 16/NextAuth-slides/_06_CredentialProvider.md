# Credentials provider

This lets you create your own authentication strategy

For example

1.  Email + Password

2.  Phone number

3.  Login with Metamask

#### 

[](#b5e2362e474645468d63a9f74f91e21f "Steps to follow")Steps to follow

1.  Add a credentials provider

```javascript
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials: any) {
            
            return {
                id: "user1"
            };
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
```

1.  Add NEXTAUTH\_URL to `.env`

```javascript
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=password_nextauth
```

1.  Update `App.tsx` to have a simple Appbar

```javascript
"use client";
import { signIn, signOut } from "next-auth/react"

export const Appbar = () => {
    return <div>
    <button onClick={() => signIn()}>Signin</button>
    <button onClick={() => signOut()}>Sign out</button>
  </div>
}Click 
```

1.  Add `providers.tsx`

```javascript
'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};
```

1.  Wrap `layout` with `Providers`

```javascript
import { Providers } from "./provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

1.  Get the user details in the top level `page.tsx` (client component)

```javascript
"use client"

import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <div>
      {JSON.stringify(session.data?.user)}
    </div>
  );
}
```

1.  Get the user details on the server (server component)

```javascript
import { getServerSession } from "next-auth"

async function getUser() {
  const session = await getServerSession();
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
      {JSON.stringify(session?.user?.name)}
    </div>
  );
}
```

1.  Get user in an api route (/api/user)

```javascript
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession();

    return NextResponse.json({
        name: session?.user?.name
    })
}
```

1.  Persist more data (user id) (Ref [https://next-auth.js.org/getting-started/example#using-nextauthjs-callbacks](https://next-auth.js.org/getting-started/example#using-nextauthjs-callbacks)) (Ref [https://next-auth.js.org/configuration/callbacks](https://next-auth.js.org/configuration/callbacks))

```javascript
  callbacks: {
      jwt: async ({ user, token }: any) => {
	      if (user) {
	          token.uid = user.id;
	      }
	      return token;
      },
    session: ({ session, token, user }: any) => {
        if (session.user) {
            session.user.id = token.uid
        }
        return session
    }
  },
```

1.  Move auth config to `lib/auth.ts`[https://github.com/nextauthjs/next-auth/issues/7658#issuecomment-1683225019](https://github.com/nextauthjs/next-auth/issues/7658#issuecomment-1683225019)

```javascript
import CredentialsProvider from 'next-auth/providers/credentials';

export const NEXT_AUTH_CONFIG = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
          },
          async authorize(credentials: any) {
  
              return {
                  id: "user1",
                  name: "asd",
                  userId: "asd",
                  email: "ramdomEmail"
              };
          },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
        if (user) {
            token.uid = user.id;
        }
        return token;
        },
      session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.uid
          }
          return session
      }
    },
  }
```

Final code -

[https://github.com/100xdevs-cohort-2/week-16-auth-2](https://github.com/100xdevs-cohort-2/week-16-auth-2)