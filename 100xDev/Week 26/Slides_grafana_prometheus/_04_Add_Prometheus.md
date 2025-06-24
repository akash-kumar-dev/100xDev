# Add prometheus

Lets try putting this data inside prometheus next.

### 

[](#528d96979cbf47f899709c94de4144e3 "Types of metrics in Prometheus")Types of metrics in Prometheus

#### 

[](#bd8f7ba8f8014868af66f729b8e77436 "Counter")Counter

*   A counter is a cumulative metric that only increases.

*   Example: Counting the number of HTTP requests.

#### 

[](#62c7b21183694c7cbb85abf8ee53910e "Gauge")Gauge

*   A gauge is a metric that can go up and down. It can be used to measure values that fluctuate, such as the current number of active users or the current memory usage.

*   Example: Measuring the current memory usage

#### 

[](#c8597d3610224362baf23f5a7d728807 "Histogram")Histogram

*   A histogram samples observations (usually things like request durations or response sizes) and counts them in configurable buckets. It also provides a sum of all observed values.

*   Example: Measuring the duration of HTTP requests.