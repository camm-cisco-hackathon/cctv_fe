import { useState, useEffect, useRef } from "react";

function Sender() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [receivedImage, setReceivedImage] = useState(null);
  const videoRef = useRef(null);
  const wsRef = useRef(null);
  const pcRef = useRef(null);
  const canvasRef = useRef(null);
  const streamIntervalRef = useRef(null);

  const startStreaming = async () => {
    if (isStreaming) return;

    try {
      // 웹캠 스트림 가져오기
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoRef.current.srcObject = stream;

      // 프레임 캡처를 위한 캔버스 설정
      const canvas = document.createElement("canvas");
      canvasRef.current = canvas;
      const context = canvas.getContext("2d");
      const video = videoRef.current;

      // 캔버스 크기 설정을 위해 비디오 메타데이터 로드 대기
      video.onloadedmetadata = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      };

      // WebSocket 연결 설정
      const ws = new WebSocket(`${import.meta.env.VITE_WS_URL}`);
      wsRef.current = ws;

      ws.onopen = () => {
        console.log("WebSocket 연결됨");
        setupPeerConnection(stream);

        // 연결되면 비디오 프레임 전송 시작
        streamIntervalRef.current = setInterval(() => {
          if (video.readyState === video.HAVE_ENOUGH_DATA) {
            // 비디오 프레임을 캔버스에 그리기
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // JPEG 데이터 URL로 프레임 가져오기
            const frameData = canvas.toDataURL("image/jpeg", 0.8);
            // 데이터 URL 접두사 제거
            const base64Frame = frameData.split(",")[1];

            // 서버에 프레임 전송
            ws.send(
              JSON.stringify({
                type: "video_frame",
                data: base64Frame,
              })
            );
          }
        }, 100); // 초당 약 10프레임 전송
      };

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);

        if (message.type === "answer") {
          const answer = { type: message.type, sdp: message.sdp };
          pcRef.current.setRemoteDescription(new RTCSessionDescription(answer));
        } else if (message.type === "video_frame") {
          // 수신된 프레임 표시
          setReceivedImage(`data:image/jpeg;base64,${message.data}`);
        }
      };

      ws.onerror = (error) => {
        console.error("WebSocket 오류:", error);
        stopStreaming();
      };

      ws.onclose = () => {
        console.log("WebSocket 연결 종료");
        stopStreaming();
      };

      setIsStreaming(true);
    } catch (error) {
      console.error("스트림 시작 오류:", error);
    }
  };

  const setupPeerConnection = (stream) => {
    // RTCPeerConnection 생성
    const pc = new RTCPeerConnection();
    pcRef.current = pc;

    // 스트림에서 트랙 추가
    stream.getTracks().forEach((track) => {
      pc.addTrack(track, stream);
    });

    // 오퍼 생성 및 전송
    pc.createOffer()
      .then((offer) => pc.setLocalDescription(offer))
      .then(() => {
        wsRef.current.send(
          JSON.stringify({
            type: "offer",
            sdp: pc.localDescription.sdp,
          })
        );
      })
      .catch((error) => console.error("오퍼 생성 오류:", error));
  };

  const stopStreaming = () => {
    if (!isStreaming) return;

    // 프레임 전송 중지
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current);
      streamIntervalRef.current = null;
    }

    // 모든 트랙 중지
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }

    // WebSocket 닫기
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    // 피어 연결 닫기
    if (pcRef.current) {
      pcRef.current.close();
      pcRef.current = null;
    }

    setIsStreaming(false);
    setReceivedImage(null);
  };

  // 컴포넌트 언마운트 시 정리
  useEffect(() => {
    return () => {
      stopStreaming();
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Video Streaming</h2>
      <div className="flex flex-wrap gap-4">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-80 h-60 border border-gray-300 rounded"
        />
        {receivedImage && (
          <img
            src={receivedImage}
            alt="Received frame"
            className="w-80 h-60 border border-gray-300 rounded"
          />
        )}
      </div>
      <div className="mt-4">
        {!isStreaming ? (
          <button
            onClick={startStreaming}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Start Streaming
          </button>
        ) : (
          <button
            onClick={stopStreaming}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Stop Streaming
          </button>
        )}
      </div>
    </div>
  );
}

export default Sender;
