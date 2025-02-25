import { useEffect, useState } from "react"

export function Sender() {

    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen = () => {
            console.log('WebSocket connection established from sender side.');
            socket.send(JSON.stringify({type: 'sender'}));
        };
        setSocket(socket);
    }, [])

    async function startSendingVideo() {
        if(!socket) return;
        // create an offer
        const pc = new RTCPeerConnection();
        pc.onnegotiationneeded = async () => {
            console.log('negotiation needed');
            const offer = await pc.createOffer();   // sdp
            await pc.setLocalDescription(offer);
            socket?.send(JSON.stringify({type: 'createOffer', sdp: pc.localDescription}));
        }
        

        pc.onicecandidate = (event) => {
            if(event.candidate) {
                socket?.send(JSON.stringify({type: 'iceCandidate', candidate: event.candidate}));
            }
        }

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'createAnswer') {
                pc.setRemoteDescription(data.sdp);
            } else if (data.type === 'iceCandidate') {
                pc.addIceCandidate(data.candidate);
            }
        }

        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        // const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
        // pc.addTrack(stream.getAudioTracks()[0] );
        pc.addTrack(stream.getVideoTracks()[0] );
        const video = document.createElement('video');
        document.body.appendChild(video);
        video.srcObject = stream;
        video.play();
    }

  return <div>Sender
    <button onClick={startSendingVideo}>Send Video</button>
  </div>
}