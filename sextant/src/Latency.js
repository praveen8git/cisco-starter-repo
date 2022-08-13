import React, { useEffect, useState } from 'react'

function Latency() {

    const [latency, setlatency] = useState("not available");

    useEffect(() => {
      const url = "ws://localhost:55455";
      const ws = new WebSocket(url);

      ws.onopen = () => {
        console.log("websocket connected");
      }

      ws.onmessage = (evt) => {
        let currentTime = new Date().getTime();
        setlatency(
            currentTime - evt.data
        )
      }

      ws.onclose = () => {
        console.log("websocket disconnected")
      }
   
    }, [])
      
  return (
    latency
  )
}

export default Latency