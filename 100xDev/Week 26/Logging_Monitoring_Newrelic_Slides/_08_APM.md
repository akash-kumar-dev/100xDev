# APM

Newrelic also lets you see all the logs and stats from your process, not just the host machine

### 

[](#638571d9af0b4a2686814cfac4f5ea1d "Default logs")Default logs

By default, you will see it is tailing `global` nginx logs, but not the application logs

```javascript
/var/log/nginx/access.log
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F368bdc1f-8ce0-469d-ad08-15e9bf7b7619%2FScreenshot_2024-05-25_at_2.58.36_PM.png?table=block&id=9bfbf41c-1819-42f3-9a6c-5a45cfe12325&cache=v2)

### 

[](#399d7bca7525448f95bf36e1cb42c8eb "Setting up APM for a Node.js process")Setting up APM for a Node.js process

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2aee5c33-1438-48cf-9d69-94feef0cf413%2FScreenshot_2024-05-25_at_2.59.13_PM.png?table=block&id=ccca792d-cf42-45b0-a696-ae476f3625fe&cache=v2)

*   Create a new data source with Node.js

*   Use one of 5 ways to set it up (we’ll go with on the host)

*   Install dependencies

```javascript
npm install newrelic express
```

*   Update `package.json`

```javascript
  "scripts": {
    "start": "NEW_RELIC_APP_NAME=test NEW_RELIC_LICENSE_KEY=license_key node -r newrelic index.js"
  },
```

*   Create a simple express app

```javascript
require("newrelic");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
	console.log("route hit");
	res.json({message: "hi there"})
})

app.listen(3000, () => {
	console.log("listening on port 3000");
});
```

*   Open another terminal and loadtest the app

```javascript
npm i -g loadtest
loadtest -c 10 --rps 200 http://localhost:3000/
```

*   Check the APM dashboard

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F01b4c9d0-b76d-4c75-a353-ab39a40ce8d4%2FScreenshot_2024-05-25_at_3.32.01_PM.png?table=block&id=3f1558f4-f98f-4863-bdc3-171490d66023&cache=v2)

*   You will notice logs are still empty

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F890351c7-2127-445a-9854-89b1bde5f725%2FScreenshot_2024-05-25_at_3.35.45_PM.png?table=block&id=fe14f478-f7c0-4145-bede-9600a69654a2&cache=v2)

### 

[](#e104c81d0a2f4fce938f8647ad470c40 "Adding logs")Adding logs

Ref - [https://docs.newrelic.com/docs/logs/logs-context/configure-logs-context-nodejs/](https://docs.newrelic.com/docs/logs/logs-context/configure-logs-context-nodejs/)

*   Try enabling the `NEW_RELIC_APPLICATION_LOGGING_FORWARDING_ENABLED` flag

```javascript
 "scripts": {
    "start": "NEW_RELIC_APPLICATION_LOGGING_FORWARDING_ENABLED=true NEW_RELIC_APP_NAME=test NEW_RELIC_LICENSE_KEY=your_key node -r newrelic index.js"
  },
```

*   Add winston as the logger

```javascript
npm install winston
```

*   Update the code

```javascript
require("newrelic");
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

const express = require("express");
const app = express();

app.get("/", (req, res) => {
	logger.info("route hit");
	if (Math.random() < 0.5) {
		logger.error("there was an err");
	}
	res.json({message: "hi there"})
});

app.listen(3000, () => {
	console.log("listening on port 3000");
});
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ffb708564-5257-42a9-a581-2b15e02accd8%2FScreenshot_2024-05-25_at_3.56.28_PM.png?table=block&id=65a3c26e-2740-4c62-b137-11462e1462b0&cache=v2)