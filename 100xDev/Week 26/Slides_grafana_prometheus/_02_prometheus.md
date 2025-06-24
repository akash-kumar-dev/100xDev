# **Prometheus**

### 

[](#7a546a35c0f04188a3df8515e45cbb90 "Prometheus architecture")Prometheus architecture

Prometheus is a time series DB. It can monitor your

1.  Processes (node, go, rust…)

2.  Hosts

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F4deeef9d-9a71-4d44-a13e-5f5f20323d98%2FScreenshot_2024-05-26_at_6.37.41_PM.png?table=block&id=38205709-ee79-4fb3-ba38-9436b3810565&cache=v2)

[https://prometheus.io/docs/introduction/overview/](https://prometheus.io/docs/introduction/overview/)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1ff6e5b6-d82f-47be-ba52-04dedd73a71d%2FScreenshot_2024-05-26_at_12.34.44_PM.png?table=block&id=cdf71ade-bca7-44dc-8c7b-a14324f84971&cache=v2)

#### 

[](#0d3084de7a1c48a09390342219888008 "1. Multi-dimensional data model with time series data identified by metric name and key/value pairs")1\. Multi-dimensional data model with time series data identified by metric name and key/value pairs

Prometheus stores its data in a time series format where each data point consists of:

*   **Metric Name:** A name that identifies the type of data, e.g., `http_requests_total`.

*   **Labels (Key/Value Pairs):** Additional metadata that further identifies and differentiates the time series, e.g., `method="GET"` and `handler="/api"`. Labels provide a way to add dimensions to the metric data, allowing for flexible and detailed querying and analysis.

#### 

[](#b03030a5bdb4481284f5022b00a2f697 "2. PromQL, a flexible query language to leverage this dimensionality")2\. PromQL, a flexible query language to leverage this dimensionality

PromQL lets you query on top of all your timeseries data.

For example

```javascript
sum(http_requests_total{job="api-server", status="500"})
```

would give you all the http requests that your server handled with status code 500

#### 

[](#426615077a64468d8567f2e9d4e02d4a "3. No reliance on distributed storage; single server nodes are autonomous")3\. No reliance on distributed storage; single server nodes are autonomous

Prometheus is designed to be a standalone, single-node system that does not require external distributed storage solutions. Each Prometheus server node is autonomous, meaning it can independently scrape, store, and query time series data. This design simplifies the system architecture and operational overhead but also means that Prometheus is not inherently horizontally scalable. However sharding techniques can be used to manage larger deployments.

#### 

[](#0683a98fbc614526910e5f8e420e771b "4. Time series collection happens via a pull model over HTTP")4\. Time series collection happens via a pull model over HTTP

Prometheus primarily uses a **pull model** to collect metrics:

*   **Pull Model:** Prometheus periodically scrapes metrics from configured targets by making HTTP requests to the `/metrics` endpoint exposed by the targets. This approach allows Prometheus to control the scraping intervals and retry logic.

*   Targets expose their metrics in a specific format that Prometheus understands, typically using client libraries provided by Prometheus for various languages and environments.

#### 

[](#e07d36195e364757a2ade9ab85498c81 "5. Pushing time series is supported via an intermediary gateway")5\. Pushing time series is supported via an intermediary gateway

While Prometheus generally uses a pull model, it also supports a **push model** through the **Pushgateway**:

*   **Pushgateway:** An intermediary service that allows applications and batch jobs to push metrics to it. The Pushgateway then exposes these metrics for Prometheus to scrape. This is useful for short-lived jobs or services that cannot be scraped reliably.

#### 

[](#6f699ae491474b6c96e778bede0a7417 "6. Targets are discovered via service discovery or static configuration")6\. Targets are discovered via service discovery or static configuration

Prometheus supports multiple methods for discovering targets to scrape:

*   **Service Discovery:** Dynamically discovers targets using various service discovery mechanisms like Kubernetes, Consul, AWS, etc. This allows Prometheus to automatically update its target list as the environment changes.

*   **Static Configuration:** Manually specifies the list of targets in the configuration file. This is straightforward but less flexible compared to service discovery.

#### 

[](#9e8f2508bbf44e58aad5f855e5b22085 "7. Multiple modes of graphing and dashboarding support")7\. Multiple modes of graphing and dashboarding support

Prometheus offers several ways to visualize and interact with the collected metrics:

*   **Prometheus UI:** A built-in web interface for ad-hoc queries and simple graphing.

*   **Grafana:** A popular open-source dashboarding tool that integrates well with Prometheus, providing rich visualization and dashboarding capabilities.

*   **Alertmanager:** A component of the Prometheus ecosystem used to handle alerts generated by Prometheus queries, allowing for complex alerting rules and notification integrations.