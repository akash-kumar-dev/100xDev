import  { useEffect, useRef } from "react"

export function Receiver() {
    // const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen = () => {
            console.log('WebSocket connection established from receiver side.');
            socket.send(JSON.stringify({type: 'receiver'}));
        };

        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            let pc: RTCPeerConnection | null = null;
            if (message.type === 'createOffer') {
                // create an answer
                pc = new RTCPeerConnection();
                await pc.setRemoteDescription(message.sdp);

                pc.onicecandidate = (event) => {
                    // console.log(event);
                    if(event.candidate) {
                        socket?.send(JSON.stringify({type: 'iceCandidate', candidate: event.candidate}));
                    }
                }

                pc.ontrack = (event) => {
                    console.log(event);
                    const video = document.createElement('video');
                    document.body.appendChild(video);
                    video.srcObject = new MediaStream([event.track]);
                    // video.play();
                    setTimeout(() => {
                        video.play();
                    }, 1000)
                    // if(videoRef.current) {
                    //     videoRef.current.srcObject = new MediaStream([event.track]);
                    // }
                }

                const answer = await pc.createAnswer();
                await pc.setLocalDescription(answer);
                socket.send(JSON.stringify({type: 'createAnswer', sdp: pc.localDescription}));
            } else if (message.type === 'iceCandidate') {
                // @ts-ignore
                if(pc !== null) {
                    // @ts-ignore
                    pc.addIceCandidate(message.candidate);
                }
            }
        }
    }, [])


    return <div>
            <h1>Receiver</h1>
            {/* <video ref={videoRef}></video> */}
    </div>
}