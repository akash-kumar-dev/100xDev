# Implement a simple reset pass endpoint

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fa5ca682c-df02-4c7f-b1ad-ed3cc4966f88%2FScreenshot_2024-04-20_at_4.02.42_PM.png?table=block&id=09d5e0f7-8796-45ec-8c03-45546ad42c29&cache=v2)

1.  Init a typescript project

```javascript
npm init -y
npx tsc --init
```

1.  Update tsconfig

```javascript
"rootDir": "./src",
"outDir": "./dist"
```

1.  Add deps

```javascript
npm i express @types/express
```

1.  Add the code

```javascript
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// Store OTPs in a simple in-memory object
const otpStore: Record<string, string> = {};

// Endpoint to generate and log OTP
app.post('/generate-otp', (req, res) => {
  const email = req.body.email;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // generates a 6-digit OTP
  otpStore[email] = otp;

  console.log(`OTP for ${email}: ${otp}`); // Log the OTP to the console
  res.status(200).json({ message: "OTP generated and logged" });
});

// Endpoint to reset password
app.post('/reset-password', (req, res) => {
  const { email, otp, newPassword } = req.body;
  if (!email || !otp || !newPassword) {
    return res.status(400).json({ message: "Email, OTP, and new password are required" });
  }
  if (otpStore[email] === otp) {
    console.log(`Password for ${email} has been reset to: ${newPassword}`);
    delete otpStore[email]; // Clear the OTP after use
    res.status(200).json({ message: "Password has been reset successfully" });
  } else {
    res.status(401).json({ message: "Invalid OTP" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

#### 

[](#d04be648bf5641f79391363405d886fe "Hitting it via postman")Hitting it via postman

Try hitting it with various OTPs one by one. Notice the server doesn’t rate limit you

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd37ac78a-9d35-4540-92ec-3520bccb0efa%2FScreenshot_2024-04-20_at_4.18.56_PM.png?table=block&id=9d4e4b43-bf48-438e-be80-016d8dee1bce&cache=v2)