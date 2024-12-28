# Give NextAuth access to a catch-all

Ref [https://next-auth.js.org/configuration/initialization#route-handlers-app](https://next-auth.js.org/configuration/initialization#route-handlers-app)

1.  Create `/api/auth/[…nextauth]/route.ts`

2.  Install next-auth

```javascript
npm install next-auth
```

1.  Updated handler

```javascript
import NextAuth from "next-auth"

const handler = NextAuth({
  ...
})

export { handler as GET, handler as POST }
```

1.  Adding providers - There are three broad types of providers

1.  OAuth (Login with google)
2.  Email (Passwordless Email login via email OTP)
3.  Credentials (your own strategy)

Let’s them one by one