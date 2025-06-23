# Metrics on logs

You can add metrics on top of log counts (esp for errors) to catch if a certain error is being thrown too often/there is a spike

```javascript
SELECT count(`message`) FROM Log WHERE (`entity.guid` = 'NDQ2MDY2NXxBUE18QVBQTElDQVRJT058NTY0ODg2NzU5' OR `entity.guids` LIKE '%NDQ2MDY2NXxBUE18QVBQTElDQVRJT058NTY0ODg2NzU5%' OR `service_name` = 'test' OR `serviceName` = 'test' OR `service.name` = 'test' OR `entity.name` = 'test') AND (level='error') TIMESERIES AUTO
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Faa9994d4-9511-4f3b-82a2-516e72e68a54%2FScreenshot_2024-05-25_at_3.59.29_PM.png?table=block&id=df3fd157-5216-4b0d-b98c-53bd38814332&cache=v2)

You can also add individual set of metrics on individual errors

```javascript
AND message LIKE '%there was an error%' 
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F29abee71-9c6b-4ab1-a9df-673187f1cc6a%2FScreenshot_2024-05-25_at_4.01.50_PM.png?table=block&id=e0558dc1-09d2-49c7-8510-ab9f9326891a&cache=v2)