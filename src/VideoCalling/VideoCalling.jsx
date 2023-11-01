import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const VideoCalling = () => {
  const [roomCode,SetroomCode] = useState("");
  const Navigate = useNavigate()
  const JoinRoom = useCallback(()=>{
    Navigate(`/room/${roomCode}`)
  },[Navigate,roomCode])
  return (
    <div>
      <h1>Hello Video Calling here</h1>
      <input type="text" 
      placeholder='Enter Room Code'
      value={roomCode}
      onChange={(e)=>SetroomCode(e.target.value)}
      />
      <button onClick={JoinRoom}>Join Room</button>
     </div>
  )
}

export default VideoCalling
