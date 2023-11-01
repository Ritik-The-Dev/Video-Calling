import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomID} = useParams();

    const MyMeeting = async (elem)=>{
        try{
            const appID = 1485891994;
         const serverSecret = "372815993e40731697648ab8e6f57f75";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  "123",  "Ritik Joshi");
        const ZC = ZegoUIKitPrebuilt.create(kitToken);
        ZC.joinRoom({
            container: elem,
            sharedLinks: [
                {
                    name: "Copy Link"
                    ,url: `https://localhost:3000/room/${roomID}`

                }
            ],
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall
            }
        }
        )
        }
        catch(err){
            console.log(err)
        }
    }
   return (
    <div>
      <h1>Room Page {roomID}</h1>
      <div ref={MyMeeting}/>
    </div>
  )
}

export default RoomPage
