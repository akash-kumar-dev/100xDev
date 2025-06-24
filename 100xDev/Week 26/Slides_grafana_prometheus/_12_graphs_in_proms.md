# Graphs in prom

Prometheus also lets you visualise data as graphs

Lets see a few queries

#### 

[](#0cf1865c0ec546e89596d7906005bffb "1. Total number of requests ")1\. Total number of requests

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fff289af1-94d5-480b-b7ad-ca5f627c1978%2FScreenshot_2024-05-26_at_4.09.41_PM.png?table=block&id=a6bb2580-38f3-4def-a370-cd981106d737&cache=v2)

💡

As you can tell, this is a very vague metric since it is cumulative. It is the total number of requests, but you usually want to see the `rate` at which requests are coming.

#### 

[](#5fa0397f08f942a184b4a7f1c007d97c "2. Rate of number of requests")2\. Rate of number of requests

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe3abafe1-162b-4cf7-af13-6f55262b3986%2FScreenshot_2024-05-26_at_4.11.03_PM.png?table=block&id=8c6c326a-e00d-4073-bfe4-9b00f1f6a132&cache=v2)

#### 

[](#4bf439bda0af4e9ca35823efc022d5da "3. Rate of all the requests (sum up /metrics and /user requests)")3\. Rate of all the requests (sum up /metrics and /user requests)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F623da3fb-747f-476c-8eaf-66b442d81e6e%2FScreenshot_2024-05-26_at_4.11.47_PM.png?table=block&id=223a017a-9a73-4c0a-88f3-17636b23abbe&cache=v2)

#### 

[](#45ab12405eda431fb1fadaad9cf897e0 "4. Average HTTP request duration with timeseries (5 minute buckets)")4\. Average HTTP request duration with timeseries (5 minute buckets)

```javascript
rate(http_request_duration_ms_sum[5m]) / rate(http_request_duration_ms_count[5m])
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9e639a98-bbf9-48fc-b250-e89146df9c28%2FScreenshot_2024-05-26_at_4.14.50_PM.png?table=block&id=75845e32-0706-477a-a4d0-e21e503f5d19&cache=v2)