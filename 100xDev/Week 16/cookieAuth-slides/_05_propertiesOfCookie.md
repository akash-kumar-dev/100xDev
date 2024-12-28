# Properties of cookies

#### 

[](#f1fa36b0673a428f8ab5a8b4d3c0d714 "Types of cookies")Types of cookies

1.  Persistent - Stay even if u close the window

2.  Session - Go away after the window closes

3.  **Secure - S**ent only over secure, encrypted connections (HTTPS).

#### 

[](#d5950fc4c6e34e19bf8d497be1d4ae93 "Properties of cookies")Properties of cookies

*   HttpOnly - Can not be accessed by client side scripts

*   **SameSite - Ensures cookies are not send on cross origin requests**

1.  Strict

2.  Lax - Only GET requests and on `top level navigation`

3.  None

Ref - [https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions#:~:text=SameSite is a browser security,leaks%2C and some CORS exploits](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions#:~:text=SameSite%20is%20a%20browser%20security,leaks%2C%20and%20some%20CORS%20exploits).

*   **Domains** - You can also specify what all domains should the cookie be sent from

#### 

[](#319cdf56ea3744f8ac9cd705ca4adc70 "CSRF attacks")CSRF attacks

Cross site request forgery attacks were super common because of cookies and hence the `SameSite` attribute was introduced

Let’s see a few cases

#### 

[](#d905c83af04c4e07b554060926fa8d20 "SameSite: none")SameSite: none

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F52048760-3629-4eb3-a693-2fe32a29008b%2FScreenshot_2024-03-20_at_4.20.31_PM.png?table=block&id=e7ad4677-b395-4ff9-8fa0-8447137d5243&cache=v2)

#### 

[](#4ab062d320554419bcce357b6968f005 "SameSite: Strict")SameSite: Strict

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe9ae6351-838a-4aa5-90b4-8621ecd66051%2FScreenshot_2024-03-20_at_4.20.44_PM.png?table=block&id=4bd944b9-8b92-4556-adbc-5842e6bb042d&cache=v2)

But there’s a problem -

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9bb322e2-f663-480b-b121-a694d7a1d75d%2FScreenshot_2024-03-20_at_4.21.20_PM.png?table=block&id=95e31011-bb5d-4ccf-9684-ff901ace15d5&cache=v2)

#### 

[](#9522f00fb8dc48ecb5af173bbec05af1 "SameSite: Lax")SameSite: Lax

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe2e9b1a7-db2d-4f5d-89ab-f7dc3b6e75b6%2FScreenshot_2024-03-20_at_4.21.28_PM.png?table=block&id=10e76972-38aa-4e5f-a9d5-17de44ebd6e6&cache=v2)