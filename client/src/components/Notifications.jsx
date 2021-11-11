import React from 'react'
import { Button } from '@material-ui/core'
import { useSocketContext } from '../SocketContext'

const Notifications = () => {
  const { answerCall, call, callAccepted } = useSocketContext()

  return (
    <div>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>{call.name} is calling: </h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </div>
  )
}

export default Notifications
