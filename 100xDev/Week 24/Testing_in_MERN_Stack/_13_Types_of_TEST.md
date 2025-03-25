# Unit tests vs integration tests vs end to end tests

### 

[](#50515ca89d1b4d3ba9a99088fd25cde8 "Unit tests")Unit tests

If you mock out external services (DBs, kafka, redist), then you’re testing just the functionality of the method. These are called unit tests

#### 

[](#fc9c7d8c73ce4b9cbb34bf3ea619984e "Integration tests")Integration tests

If you don’t mock out these services but actually start them locally, then it is considered an integration test

#### 

[](#3c3aacc6ff9641f0918fc702be153450 "End to end tests")End to end tests

If you have a full stack app and you actually open a browser and test things, it’s called an end to end test