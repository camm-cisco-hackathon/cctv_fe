import { useState, useEffect, useRef } from "react";

const Viewer = ({
  wsUrl = "ws://localhost:52049/ws",
  streamOnMount = false,
  isAdmin,
}) => {
  const [isConnected, setIsConnected] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [decryptionKey, setDecryptionKey] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [decryptionError, setDecryptionError] = useState(null);
  const [isDecryptionEnabled, setIsDecryptionEnabled] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
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
      } else if (message.type === "decryption_key_valid") {
        setIsDecrypting(false);
        setIsDecryptionEnabled(true);
        setDecryptionError(null);
        setStatusMessage("Decryption enabled. Streaming original images.");
      } else if (message.type === "decryption_key_invalid") {
        setIsDecrypting(false);
        setIsDecryptionEnabled(false);
        setDecryptionError(message.message);
      } else if (message.type === "decryption_disabled") {
        setIsDecrypting(false);
        setIsDecryptionEnabled(false);
        setStatusMessage("Decryption disabled. Streaming mosaic images.");
      } else if (message.type === "decryption_error") {
        console.error("Decryption error:", message.message);
        setIsDecrypting(false);
        setIsDecryptionEnabled(false);
        setDecryptionError(message.message);
        setStatusMessage("Failed to decrypt. Showing mosaic images.");
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
      setIsConnected(false);
      setIsStreaming(false);
      setIsDecryptionEnabled(false);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      setIsConnected(false);
      setIsStreaming(false);
      setIsDecryptionEnabled(false);
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

  // set decryption key
  const setDecryptionKeyOnServer = () => {
    if (!isConnected || !decryptionKey) return;

    setIsDecrypting(true);
    setDecryptionError(null);
    wsRef.current.send(
      JSON.stringify({
        type: "set_decryption_key",
        key: decryptionKey,
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

        {isAdmin && (
          <div className="decryption-controls">
            <input
              type="password"
              placeholder="Decryption Key"
              value={decryptionKey}
              onChange={(e) => setDecryptionKey(e.target.value)}
              disabled={!isConnected || isDecrypting}
            />
            <button
              onClick={setDecryptionKeyOnServer}
              disabled={!isConnected || isDecrypting || !decryptionKey}
            >
              {isDecrypting
                ? "Applying..."
                : isDecryptionEnabled
                ? "Change Key"
                : "Apply Key"}
            </button>
            {decryptionError && <div className="error">{decryptionError}</div>}
            {statusMessage && <div className="status">{statusMessage}</div>}
          </div>
        )}
      </div>
      <div className="stream-display">
        {currentFrame ? (
          <img src={currentFrame} alt="Stream frame" />
        ) : (
          <div className="no-stream">
            {isConnected
              ? isStreaming
                ? "Waiting for frames..."
                : isDecrypting
                ? "Applying decryption key..."
                : 'Click "Start Stream" to begin or enter decryption key'
              : "Connect to server first"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Viewer;
