# Implementation

We will be writing the code in

1.  Node.js for the Signaling server. It will be a websocket server that supports 3 types of messages

1.  createOffer
2.  createAnswer
3.  addIceCandidate

2.  React + PeerConnectionObject on the frontend

We’re actually building a slightly complex version of [https://jsfiddle.net/rainzhao/3L9sfsvf/](https://jsfiddle.net/rainzhao/3L9sfsvf/)