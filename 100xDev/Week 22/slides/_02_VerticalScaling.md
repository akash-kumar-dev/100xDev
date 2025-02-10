# Vertical scaling

Vertical scaling means increasing the size of your machine to support more load

#### 

[](#0bf7d812278e4d649eb9834d1cc50475 "Single threaded languages")Single threaded languages

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fae98c9ad-e9b4-42ea-ad01-fbb78c82a0d6%2FScreenshot_2024-04-27_at_8.35.23_AM.png?table=block&id=a7e4b92e-dcf1-440e-93ed-1d1f32cd4aac&cache=v2)

#### 

[](#d4ad9e407aa8499b965e31e939386179 "Multi threaded languages")Multi threaded languages

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8e8edb94-37d5-4fe7-9047-7f950e0776c7%2FScreenshot_2024-04-27_at_8.36.13_AM.png?table=block&id=b3a3c9ef-6873-4a6c-80cb-724a22f4ac14&cache=v2)

### 

[](#5e04f778467049738fe14cdd487b633a "Node.js")Node.js

Let’s run an infinite loop in a JS project and see how our CPU is used

```javascript
let c = 0;
while (1) {
  c++;
}
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F218b43db-7892-48fc-8231-c546cb0f8779%2FScreenshot_2024-04-27_at_8.39.00_AM.png?table=block&id=020ff668-4a0f-4397-bf45-e404efedcc6b&cache=v2)

This confirms that only a single core of the machine is being used. We got 3 different processes using 100% CPU each.

## 

[](#7927b3be6be348ae9244324a64f82afc "Rust")Rust

```javascript
use std::thread;

fn main() {
    // Spawn three threads
    for _ in 0..3 {
        thread::spawn(|| {
            let mut counter: f64 = 0.00;
            loop {
                counter += 0.001;
            }
        });
    }

    loop {
        // Main thread does nothing but keep the program alive
    }
}
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F32f18ebe-cc63-4323-bbcd-12ec351583a9%2FScreenshot_2024-04-27_at_8.59.42_AM.png?table=block&id=e264e07b-404d-4ea1-9a6b-5bb351623a77&cache=v2)