import { useState, useEffect, useRef } from "react";

const Viewer = ({
  wsUrl = "ws://localhost:52049/ws",
  streamOnMount = false,
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const wsRef = useRef(null);

  // connect to websocket server
  const connectWebSocket = () => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket connection established");
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "stream_frame") {
        setCurrentFrame(`data:image/jpeg;base64,${message.data}`);
      } else if (message.type === "stream_complete") {
        console.log("Stream complete");
        setIsStreaming(false);
      } else if (message.type === "frame_received") {
        console.log(`Frame ${message.frame_number} received by server`);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
      setIsConnected(false);
      setIsStreaming(false);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      setIsConnected(false);
      setIsStreaming(false);
    };
  };

  // request stream
  const requestStream = () => {
    if (!isConnected || isStreaming) return;

    setIsStreaming(true);
    wsRef.current.send(
      JSON.stringify({
        type: "stream_request",
      })
    );
  };

  // Connect on component mount if streamOnMount is true
  useEffect(() => {
    connectWebSocket();

    if (streamOnMount) {
      setTimeout(() => {
        requestStream();
      }, 1000); // Give time for connection to establish
    }

    // Cleanup
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [streamOnMount]);

  return (
    <div className="viewer-container">
      <div className="viewer-controls">
        <button
          onClick={isConnected ? requestStream : connectWebSocket}
          disabled={isStreaming}
        >
          {!isConnected
            ? "Connect"
            : isStreaming
            ? "Streaming..."
            : "Start Stream"}
        </button>
      </div>

      <div className="stream-display">
        {currentFrame ? (
          <img src={currentFrame} alt="Stream frame" />
        ) : (
          <div className="no-stream">
            {isConnected
              ? isStreaming
                ? "Waiting for frames..."
                : 'Click "Start Stream" to begin'
              : "Connect to server first"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Viewer;
