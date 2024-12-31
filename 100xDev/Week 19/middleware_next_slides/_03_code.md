# Code

### 

[](#97608b9cc3374065a49cca7959d9e5f2 "Create a request count middleware")Create a request count middleware

*   Create an empty NextJS project

```javascript
 npx create-next-app
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F4292f3c2-af9a-4340-a9b5-fa0228521224%2FScreenshot_2024-04-05_at_7.53.11_PM.png?table=block&id=0059cb64-62a7-4a11-8149-981750c55608&cache=v2)

*   Create middleware.ts in the root folder

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F79b8dc3a-cbd0-4a33-87d1-85b18937f2e7%2FScreenshot_2024-04-05_at_7.55.01_PM.png?table=block&id=a9003347-f348-47dd-847f-a0749e86cc1b&cache=v2)

*   Add code to track the number of requests

```javascript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let requestCount = 0;
export function middleware(request: NextRequest) {
  requestCount++;
  console.log("number of requests is " + requestCount);
  return  NextResponse.next()
}
```

*   Try visiting the website