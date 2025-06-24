# Alerting

Grafana provides you with a way to set alerts on metrics.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F700313bf-59ac-4f8d-b5ec-fdd0574cb6e5%2FScreenshot_2024-05-26_at_5.56.09_PM.png?table=block&id=a44624d7-2e0c-465b-8fbc-46e331222fcc&cache=v2)

### 

[](#cb09af4d2cdb4d738b3b74162cdf79d7 "Steps")Steps

1.  Enter a name for it - High number of requests

2.  Define query

```javascript
rate(http_requests_total{route="/user"}[$__rate_interval])
```

1.  Setup alert threshold (lets say 50 requests/s)

2.  Set evaluation behaviour

1.  How often should we check this alert?
2.  Create folder so that it can be re-used later

3.  Add labels

1.  Team: Backend
2.  Type: Error

4.  Save

#### 

[](#03f3b78b3dd84df0a5447844c8ff3613 "Testing")Testing

Send a lot of requests to the `/user` endpoint and ensure it triggers the alert

#### 

[](#e6b07cca602b440b91bb61154b804ae9 "Notifying")Notifying

1.  Create a new contact point

2.  Connect the alert to the contact point in `Notification policies`

This will not send a real email unless you’ve put in SMTP credentials while starting the apps