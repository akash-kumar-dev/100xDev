# NRQL

NRQL (New Relic Query Language) is a SQL-like query language used to query data within New Relic, a monitoring and observability platform. NRQL allows users to perform complex data analysis and create custom dashboards and alerts by querying their application and infrastructure performance data stored in New Relic.

### 

[](#4950efdbbad34aa28e64487889d9f917 "CPU Usage")CPU Usage

*   Fetch all CPU usage

```javascript
SELECT average(cpuPercent) AS `CPU used %` FROM SystemSample WHERE (entityGuid = 'xyz') TIMESERIES AUTO
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F753d96c1-e530-4dbd-8221-40bc853e5783%2FScreenshot_2024-05-25_at_2.21.21_PM.png?table=block&id=21660fdc-3f5d-48c7-be39-cec325e72a40&cache=v2)

*   Filter by High CPU Usage

```javascript
SELECT average(cpuPercent) AS `CPU used %`
FROM SystemSample
WHERE (entityGuid = 'NDQ2MDY2NXxJTkZSQXxOQXwzOTczMjM4ODc0NzI4NDk0NzYz') AND cpuPercent > 2
TIMESERIES AUTO
```

*   Multiple graphs in the same timeline

```javascript
SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQ2MDY2NXxJTkZSQXxOQXwtMzE2MTI3OTkyNzM3NDEzMTE1Mw') TIMESERIES AUTO
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe039b516-921d-4b45-ab1c-0249c96e04fb%2FScreenshot_2024-05-25_at_2.52.59_PM.png?table=block&id=58df6051-c295-467d-8973-28b7573626c5&cache=v2)

*   Facets

```javascript
SELECT average(cpuPercent) AS `CPU used %`
FROM SystemSample
WHERE entityGuid IN ('xyz', 'abc')
FACET entityGuid
TIMESERIES AUTO
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fbd42b890-17df-46d6-9044-7a31f9a108e5%2FScreenshot_2024-05-25_at_2.56.00_PM.png?table=block&id=c089b589-1e5b-449f-af4e-72d174036f9b&cache=v2)