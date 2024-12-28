# Catch all routes

If you want to add a single route handler for

1.  `/api/auth/user`

2.  `/api/auth/random`

3.  `/api/auth/123`

4.  `/api/auth/...`

You can create a `catch all` route

1.  Create a simple next.js app

```javascript
npx create-next-app@latest
```

1.  Create `app/api/auth/[...nextauth]/route.ts`

```javascript
import { NextRequest, NextResponse } from "next/server"

export function GET(req: NextRequest) {
    return NextResponse.json({
        message: "Handler"
    })
}
```

1.  Try going to a few endpoints

```javascript
http://localhost:3000/api/auth/signin
http://localhost:3000/api/auth/123
http://localhost:3000/api/auth/random/random2
```

1.  Try logging the sub-route you’re at

```javascript
import { NextRequest, NextResponse } from "next/server"

export function GET(req: NextRequest, { params }: { params: { nextauth: string[] } }) {
    console.log(params.nextauth[0])
    return NextResponse.json({
        message: "Handler"
    })
}
```