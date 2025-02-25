## WebRTC

SFU [mediasoup](https://github.com/versatica/mediasoup)
[Janus](https://github.com/meetecho/janus-gateway)

SFU => forward packets => does not need to decode video (ffmpeg)

MCY => Does need to decode video (ffmpeg) => merge => re-encode

peerJS => [https://github.com/peers/peerjs](https://github.com/peers/peerjs) (use for simple implementation of WebRTC peer to peer)