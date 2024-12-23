# Step 3 - Data fetching in Next

Ref - [https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)

💡

You can do the same thing as the last slide in Next.js, but then you lose the benefits of `server side rendering`

You should fetch the user details on the server side and `pre-render` the page before returning it to the user.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9e649d49-1f77-4f15-a9c9-8988053fb978%2FScreenshot_2024-03-03_at_2.23.27_PM.png?table=block&id=0cc99c83-e71b-435f-b545-a1dbe0dd5070&cache=v2)

### 

[](#8b906a3b0bf64f238fcdd6c427ba0748 "Let’s try to build this ")Let’s try to build this

1.  Initialise an empty next project

```javascript
 npx create-next-app@latest
```

1.  Install axios

```javascript
npm i axios
```

1.  Clean up `page.tsx`, `global.css`

2.  In the root `page.tsx`, write a function to fetch the users details

```javascript
async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}
```

1.  Convert the default export to be an async function (yes, nextjs now supports `async` components)

```javascript
import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div>
      {userData.email}
      {userData.name}
    </div>
  );
}
```

1.  Check the network tab, make sure there is no waterfalling

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ffadf2f02-7196-4ce1-8c69-9c2d8ab03b50%2FScreenshot_2024-03-03_at_2.32.47_PM.png?table=block&id=b8f2c8ae-501c-4c6c-ac5a-f489babd212e&cache=v2)

1.  Prettify the UI

```javascript
import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}
```

Good question to ask at this point - Where is the `loader` ?

Do we even need a `loader` ?