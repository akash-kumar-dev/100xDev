# Common place to add rate limits

Ref - [https://thehackernews.com/2016/03/hack-facebook-account.html](https://thehackernews.com/2016/03/hack-facebook-account.html)

When you allow a user to `reset their password` using an OTP from their email, the following endpoint should be rate limited heavily

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F32608b57-91ff-4651-a3cb-0578fe693aa3%2FScreenshot_2024-04-20_at_4.02.36_PM.png?table=block&id=840e837f-46fa-4c61-a56a-09cbc848c30e&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5af7a0d5-901f-44ce-8b58-2b9855bf3a53%2FScreenshot_2024-04-20_at_4.02.42_PM.png?table=block&id=65deaa3c-bd74-40c2-9c19-6a6eb85c9f93&cache=v2)