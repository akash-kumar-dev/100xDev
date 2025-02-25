# Other architectures

There are two other popular architectures for doing WebRTC

1.  SFU

2.  MCU

### 

[](#9871f400cde844e387b77577d0b796db "Problems with p2p")Problems with p2p

Doesn’t scale well beyond 3-4 people in the same call

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Feecbe4a3-2b10-421a-8e42-1de3f10173ba%2FScreenshot_2024-05-04_at_7.55.05_PM.png?table=block&id=80cbf71c-099d-4d03-ba10-33f1c24d1e55&cache=v2)

### 

[](#25a0c32d00e44106a9dc1c094af44a3c "SFU")SFU

SFU stands for `Selective forwarding unit`. This acts as a central media server which `forwards` packets b/w users

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe28af61c-af64-4bfb-bfe3-843f16e984e3%2FScreenshot_2024-05-04_at_7.55.38_PM.png?table=block&id=3e615dd7-200f-4ae0-9c81-96f30aeaa726&cache=v2)

Popular Open source SFUs -

1.  [https://github.com/versatica/mediasoup](https://github.com/versatica/mediasoup)

2.  [https://github.com/pion/webrtc](https://github.com/pion/webrtc) (not exactly an SFU but you can build one on top of it)

### 

[](#b624e41138604404b650a85132ff2062 "MCU")MCU

It mixes audio/video together on the server before forwarding it.

This means it needs to

1.  decode video/audio (using something like ffmpeg)

2.  Mix them (create a video canvas/create a single audio stream)

3.  Send out the merged audio stream to everyone

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F33b6d704-e1ad-4c77-9044-bba7f4b9f460%2FScreenshot_2024-05-04_at_7.56.56_PM.png?table=block&id=1a883553-f298-4e9d-81e0-c3be0079ee18&cache=v2)