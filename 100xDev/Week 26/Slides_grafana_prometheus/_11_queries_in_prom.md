# Queries in Prom

## 

[](#a0bc1a71d1714015bee29be5300ea67f "Simple queries (counters and gauges)")Simple queries (counters and gauges)

Here are some Prometheus queries you can run on `localhost:9090` to analyze the metrics provided:

#### 

[](#55bebc72d6da44dbb0634870eb4a1a39 "1. Total Number of HTTP Requests")1\. Total Number of HTTP Requests

To get the total number of HTTP requests per route

```javascript
http_requests_total
```

#### 

[](#6401bcc2316a42f6b5be0d4c3d7d8be1 "2. Total Number of HTTP Requests (cumulative)")2\. Total Number of HTTP Requests (cumulative)

```javascript
sum(http_requests_total)
```

#### 

[](#9fd4f8c89e2449d28733e326261d1d0f "3. HTTP Request Duration")3\. HTTP Request Duration

```javascript
http_request_duration_ms_sum
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F03d4e4fb-5ee9-4d8e-a50b-94bfe30616ad%2FScreenshot_2024-05-26_at_3.41.49_PM.png?table=block&id=eeb4ba6f-a0ac-47ec-bbd5-da4d1865d903&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe4561673-8e38-4662-825e-41aac0848009%2FScreenshot_2024-05-26_at_3.41.57_PM.png?table=block&id=dfa43545-1b4a-493b-af76-2b7d3ea14e43&cache=v2)

#### 

[](#ed443b842c284d3ea95c6521f4a5d2d4 "4. Count of total number of http requests")4\. Count of total number of http requests

```javascript
http_request_duration_ms_count
```

#### 

[](#3ff7dad3cf874c1f93905599f1c8d0ed "5. Average time it took to handle all requests ")5\. Average time it took to handle all requests

```javascript
http_request_duration_ms_sum / http_request_duration_ms_count
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb8227cd5-328b-409a-a1ac-07d30e36c2ec%2FScreenshot_2024-05-26_at_3.42.56_PM.png?table=block&id=985bbfdf-78da-4074-9b12-56f85b44807d&cache=v2)

## 

[](#c3a8ba06d6eb4fcca0bb0b75d0886b0f "Complex queries (histograms)")Complex queries (histograms)

#### 

[](#d2b32df68bc14211aff5d827c29f0403 "1. See the request duration in buckets")1\. See the request duration in buckets

```javascript
http_request_duration_ms_bucket
```

#### 

[](#60670bdbbaeb4ab399c389ca24d7789a "2. See requests for a specific route")2\. See requests for a specific route

```javascript
http_request_duration_ms_bucket{method="GET", route="/metrics", code="200"}
```