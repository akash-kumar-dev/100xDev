# Authentication using cookies (Part 1)

### 

[](#6b024de7685c4fe79dbc4abbed87d5bb "What are cookies")What are cookies

Cookies in web development are small pieces of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. They are designed to be a reliable mechanism for websites to remember things (very similar to local storage)

1.  **Session Management:** Cookies allow websites to identify users and track their individual session states across multiple pages or visits.

2.  **Personalization:** Websites use cookies to personalize content and ads. For instance, cookies might store information about a user's preferences, allowing the site to tailor content or advertisements to those interests.

3.  **Tracking:** Cookies can track users across websites, providing insights into browsing behavior. This information can be used for analytics purposes, to improve website functionality, or for advertising targeting.

4.  **Security:** Secure cookies can be used to enhance the security of a website by ensuring that the transmission of information is only done over an encrypted connection, helping to prevent unauthorized access to user data.

We will be focussing on point `4`

### 

[](#2f469d0f1dba438fafcb8119267d00a3 "Why not local storage?")Why not local storage?

Cookies and LocalStorage both provide ways to store data on the client-side, but they serve different purposes and have different characteristics.

1.  Cookies are send with every request to the website (by the browser) (you don’t have to explicitly add a header to the fetch call) This point becomes super important in Next.js, we’ll see later why

💡

Ref - [https://github.com/100xdevs-cohort-2/paytm/blob/complete-solution/frontend/src/pages/SendMoney.jsx#L45](https://github.com/100xdevs-cohort-2/paytm/blob/complete-solution/frontend/src/pages/SendMoney.jsx#L45)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fcf9c2d99-0203-4f65-8207-6aa217c0e413%2FScreenshot_2024-03-20_at_1.15.25_AM.png?table=block&id=cec01709-9955-4960-bd43-be18df426582&cache=v2)

1.  Cookies can have an expiry attached to them

2.  Cookies can be be restricted to only `https` and to certain `domains`