# Winston logger

#### 

[](#82b1c5f1e05c4eb2b32374a4750e79b6 "Transports")Transports

Winston lets you stash logs in various places (files, console, postgres tables etc)

```javascript
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

💡

Good list of transports - [https://github.com/winstonjs/winston/blob/master/docs/transports.md#postgresql-transport](https://github.com/winstonjs/winston/blob/master/docs/transports.md#postgresql-transport)

#### 

[](#45c7f52e78014044acf7245ee739d9e1 "Formats")**Formats**

```javascript

import winston from 'winston';
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ]
})


logger.error('Hello, world!');
logger.info('Hello, world!');
```