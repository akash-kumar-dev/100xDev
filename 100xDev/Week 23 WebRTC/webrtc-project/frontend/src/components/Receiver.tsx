import  { useEffect, useRef, useState } from "react"

export function Receiver() {
    const [pc] = useState<RTCPeerConnection>(() => {
        const newPc = new RTCPeerConnection();
        
        newPc.ontrack = (event) => {
            console.log('Track received:', event);
            const video = document.createElement('video');
            video.autoplay = true;
            video.playsInline = true;
            video.srcObject = new MediaStream([event.track]);
            video.controls = true;
            document.body.appendChild(video);
            setTimeout(() => {
                video.play();
            }, 1000)
        };

        return newPc;
    });

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        
        socket.onopen = () => {
            console.log('WebSocket connection established from receiver side.');
            socket.send(JSON.stringify({type: 'receiver'}));
        };

        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            
            if (message.type === 'createOffer') {
                await pc.setRemoteDescription(message.sdp);
                
                const answer = await pc.createAnswer();
                await pc.setLocalDescription(answer);
                socket.send(JSON.stringify({type: 'createAnswer', sdp: pc.localDescription}));
            } else if (message.type === 'iceCandidate') {
                await pc.addIceCandidate(message.candidate);
            }
        };

        return () => {
            socket.close();
            pc.close();
        };
    }, [pc]);

    return (
        <div>
            <h1>Receiver</h1>
        </div>
    );
}