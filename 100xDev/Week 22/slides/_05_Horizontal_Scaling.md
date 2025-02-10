# Horizontal scaling

Horizontal scaling represents increasing the number of instances you have based on a metric to be able to support more load.

AWS has the concept of `Auto scaling groups`, which as the name suggests lets you autoscale the number of machines based on certain metrics.

### 

[](#11fd8c91a6a34e5b988d683c1d3e406e "Buzz words")Buzz words

Images (AMI) - Snapshots of a machine from which you can create more machines Load balancer - An entrypoint that your users send requests to that forwards it to one of many machines (or more specifically, to a target group). Its a `fully managed` service which means you don’t have to worry about scaling it ever. AWS takes care of making it highly available.

Target groups - A group of EC2 instances that a load balancer can send requests to

Launch template - A template that can be used to start new machines

💡

Please make sure you get rid of all your resources after this.

There are two ways you can use ASGs

*   Create a EC2 instance.

1.  install Node.js on it [https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

2.  Clone the repo - [https://github.com/100xdevs-cohort-2/week-22](https://github.com/100xdevs-cohort-2/week-22)

*   Create an AMI with your machine

*   Create security group

*   Launch template

*   Ref for User data - [https://stackoverflow.com/questions/15904095/how-to-check-whether-my-user-data-passing-to-ec2-instance-is-working](https://stackoverflow.com/questions/15904095/how-to-check-whether-my-user-data-passing-to-ec2-instance-is-working)

```javascript
#!/bin/bash 
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v22.0.0/bin/
echo "hi there before"
echo "hi there after"
npm install -g pm2
cd /home/ubuntu/week-22
pm2 start index.js
pm2 save
pm2 startup
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F371fb427-6d1d-4de2-911d-b3b26b76a2fc%2FScreenshot_2024-04-28_at_2.56.43_PM.png?table=block&id=3a988b2a-bb8f-422b-9528-125d560bcd33&cache=v2)

*   ASG

*   Callout on availability zones - ASGs try to balance instances in each zone

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fac0ac67a-e59b-4276-b2e9-7737d579372d%2FScreenshot_2024-04-28_at_2.58.46_PM.png?table=block&id=947df69e-c484-4a3e-897d-2ade03c043a9&cache=v2)

*   Load balancer

*   Add an HTTPS Listener from your domain, request a certificate from ACM

*   Target group - Attach the target group to the ASG

### 

[](#9ce25563cac4401c9bf7f2d76a500bd5 "Autoscaling part")Autoscaling part

You can create an `dynamic scaling` policy

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F05934146-4089-402c-b8e7-9a609ae9b85f%2FScreenshot_2024-04-28_at_3.18.57_PM.png?table=block&id=8badc8c9-2915-4bf1-a819-373604aee18c&cache=v2)

Try playing with the Min and max on the ASG

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1b3975f3-49ca-4289-914f-508cfdedbefc%2FScreenshot_2024-04-28_at_3.19.44_PM.png?table=block&id=e49eb5ba-8508-4c0b-beeb-b1f59f05cf4d&cache=v2)

### 

[](#01c52278cd95422a936e6f9fc3ef7ff7 "Try killing servers")Try killing servers

Try to stop a few servers in the ASG. Notice they spin back up to arrive at the desired amount.

### 

[](#0027ccddaed640af9b4c7b61330d5f84 "Simulate a scale up")Simulate a scale up

Try running an infinite for loop on the instance to see if a scale up happens

```javascript
let c = 0;

while (1) {
	c++;
}
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe046a54d-646d-465f-ae65-527e6634db04%2FScreenshot_2024-04-28_at_3.21.01_PM.png?table=block&id=b1a32d19-56a9-459c-8fe0-f68bb6da88a6&cache=v2)

You’ll notice the desired capacity goes up by one in some time

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1fc77ed4-4a87-40e4-8202-797ad57ca601%2FScreenshot_2024-04-28_at_3.27.58_PM.png?table=block&id=d00dc721-04d5-4a75-870c-2d96fd46d484&cache=v2)

Try turning the infinite loop off and notice a scale down happens

## 

[](#586f2c28a50c454ab0826e0a14296c6a "Scaling via a Node.js app")Scaling via a Node.js app

Create a new user with permissions to `AutoscalingFullAccess`

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2d03a8da-3834-4793-9c77-35dbac3ea977%2FScreenshot_2024-04-28_at_5.50.52_PM.png?table=block&id=e08c3c22-1ce9-49c8-8ba5-aa95de6ee445&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe008a297-24d1-4cad-9586-06da2c6ce578%2FScreenshot_2024-04-28_at_5.58.12_PM.png?table=block&id=6c7c2452-99b9-4806-b83f-fd30f2b41975&cache=v2)

```javascript
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'ap-south-1',
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_ACCESS_SECRET'
});

// Create an Auto Scaling client
const autoscaling = new AWS.AutoScaling();

// Function to update the desired capacity of an Auto Scaling group
const updateDesiredCapacity = (autoScalingGroupName: string, desiredCapacity: number) => {
  const params = {
    AutoScalingGroupName: autoScalingGroupName,
    DesiredCapacity: desiredCapacity
  };

  autoscaling.setDesiredCapacity(params, (err, data) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
};

// Example usage
const groupName = 'node-app-1'; // Set your Auto Scaling group name
const newDesiredCapacity = 3; // Set the new desired capacity

// Call the function
updateDesiredCapacity(groupName, newDesiredCapacity);
```

## 

[](#0746301ca33048379e9292aec9382898 "Cleanup")Cleanup

Please delete all things one by one

1.  ASG

2.  Target group

3.  Load balancer

4.  Launch template

5.  Image

6.  Instance that the image was created from

💡

Try using elastic beanstalk. Gives you the same benefits w/o the developer having to create all of these