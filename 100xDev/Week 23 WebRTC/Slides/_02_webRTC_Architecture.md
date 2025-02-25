# WebRTC Architecture/jargon

### 

[](#fb63f79f60464d45848ac52d5b12ece1 "P2P")P2P

WebRTC is a peer to peer protocol. This means the you directly send your media over to the other person without the need of a central server

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd2ac1dd1-0dee-4a95-ac58-480952eddbe1%2FScreenshot_2024-05-04_at_4.08.18_PM.png?table=block&id=4c68439d-c7b4-48dc-a1de-6133761f63bb&cache=v2)

💡

You do need a central server for signalling and sometimes for sending media as well (turn). We’ll be discussing this later

### 

[](#8fffbd317c23408588ed88c2e356f342 "Signalling server")Signalling server

Both the browsers need to exchange their `address` before they can start talking to each other. A `signaling server` is used for that.

It is usually a websocket server but can be anything (http)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc790a3de-337f-44a8-887a-64a207f7195c%2FScreenshot_2024-05-04_at_4.16.23_PM.png?table=block&id=7e2e3c43-dc21-45d9-88ef-d0648596f109&cache=v2)

### 

[](#c6d2b49906d2452aa668a13ca698b195 "Stun (Session Traversal Utilities for NAT)")Stun (Session Traversal Utilities for NAT)

It gives you back your publically accessable IPs. It shows you how the world sees you

Check [https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fac6c5d61-a704-4ff5-89e5-5d8d887082e1%2FScreenshot_2024-05-04_at_4.57.40_PM.png?table=block&id=d8b50e61-842c-41e2-857c-ef2753af011f&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3dc43212-493b-44bc-8fb4-7f6d55b16413%2FScreenshot_2024-05-04_at_5.07.21_PM.png?table=block&id=9294085b-6462-43d7-bde4-24deed58f9b8&cache=v2)

### 

[](#df89658aec2d4b99a5ca5006877293a6 "Ice candidates")Ice candidates

ICE (Interactive Connectivity Establishment) candidates are potential networking endpoints that WebRTC uses to establish a connection between peers. Each candidate represents a possible method for two devices (peers) to communicate, usually in the context of real-time applications like video calls, voice calls, or peer-to-peer data sharing.

If two friends are trying to connect to each other in a `hostel wifi` , then they can connect via their private router ice candidates.

If two people from different countries are trying to connect to each other, then they would connect via their public IPs.

### 

[](#ee7dc7e85ca8458ca2fc12614eab94c9 "Turn server")Turn server

A lot of times, your network doesn’t allow media to come in from `browser 2` . This depends on how restrictive your network is

Since the `ice candidate` is discovered by the `stun server`, your network `might` block incoming data from `browser 2` and only allow it from the `stun server`

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F13065925-b2f1-44cf-88d9-714431244257%2FScreenshot_2024-05-04_at_5.13.50_PM.png?table=block&id=2ff90658-4bea-440e-bd07-c6fe791dbb52&cache=v2)

### 

[](#0efe26aaf6ec4a8c8b221fe62c5822b9 "Offer")Offer

The process of the first browser (the one initiating connection) sending their `ice candidates` to the other side.

### 

[](#9d0368b9588044bf9880813566c8a5ff "Answer")Answer

The other side returning their `ice candidates` is called the answer.

### 

[](#969861a136bd49c7af9d8bda8ede1377 "SDP - Session description protocol")SDP - Session description protocol

A single file that contains all your

1.  ice candidates

2.  what media you want to send, what protocols you’ve used to encode the media

This is the file that is sent in the `offer` and received in the `answer`

Example

```javascript
v=0
o=- 423904492236154649 2 IN IP4 127.0.0.1
s=-
t=0 0
m=audio 49170 RTP/AVP 0
c=IN IP4 192.168.1.101
a=rtpmap:0 PCMU/8000
a=ice-options:trickle
a=candidate:1 1 UDP 2122260223 192.168.1.101 49170 typ host
a=candidate:2 1 UDP 2122194687 10.0.1.1 49171 typ host
a=candidate:3 1 UDP 1685987071 93.184.216.34 49172 typ srflx raddr 10.0.1.1 rport 49171
a=candidate:4 1 UDP 41819902 10.1.1.1 3478 typ relay raddr 93.184.216.34 rport 49172
```

### 

[](#6fa020cee7e14df98743441912eaadc6 "RTCPeerConnection (pc, peer connection)")RTCPeerConnection (pc, peer connection)

[https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection)

This is a class that the browser provides you with which gives you access to the `sdp`, lets you create `answers` / `offers` , lets you send media.

This class hides all the complexity of webrtc from the developer

### 

[](#a24e3ea3e6eb485babd29b14ca968ab9 "Summary")Summary

You need a `signaling server`, `stun server` to initiate the webrtc conn b/w the parties. You can kill these once the conn is made.

You need to include a `turn server` incase any of the users are on a restrictive network so you can get back a `turn` ice candidate as well.