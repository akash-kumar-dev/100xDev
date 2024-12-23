# Step 4 - Loaders in Next

What if the `getUserDetails` call takes 5s to finish (lets say the backend is slow). You should show the user a `loader` during this time

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fedccd049-a0f2-461e-af42-2038ede9cc63%2FScreenshot_2024-03-03_at_2.42.02_PM.png?table=block&id=533d873c-63e0-4c1c-9f3b-f40980f1e696&cache=v2)

#### 

[](#da25343de8324f919e06ee5933089f11 "loading.tsx file")loading.tsx file

Just like `page.tsx` and `layout.tsx` , you can define a `skeleton.tsx` file that will render until all the async operations finish

1.  Create a `loading.tsx` file in the root folder

2.  Add a custom loader inside

```javascript
export default function Loading() {
    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            Loading...
        </div>
    </div>
  }
```