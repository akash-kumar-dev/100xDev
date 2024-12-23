# Step 10 - Better fetches

For the root page, we are fetching the details of the user by hitting an HTTP endpoint in `getUserDetails`

### 

[](#9dc5140e9e2c47a7beb459864401779c "Current solution")Current solution

```javascript
import axios from "axios";

async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user")
	  return response.data;
  }  catch(e) {
    console.log(e);
  }
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

`getUserDetails` runs on the server. This means you’re sending a request from a server back to the server

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F71abac43-74f7-44a7-a974-b8202c7ed862%2FScreenshot_2024-03-03_at_5.09.36_PM.png?table=block&id=93cc8990-749e-4723-a1d6-487154c2f7e9&cache=v2)

### 

[](#c92c1b9344b844548af3eb3ecd9c4014 "Better solution")Better solution

```javascript
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
	  return {
      name: user?.username,
      email: user?.username
    }
  }  catch(e) {
    console.log(e);
  }
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