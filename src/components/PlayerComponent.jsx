import React from 'react'
import ReactPlayer from 'react-player'

const playerStyle = {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '40px'
}

function PlayerComponent() {
    return (
        <div style={playerStyle}>
            <ReactPlayer
                width='480px'
                height='240px'
                controls
                // playing
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                onReady={() => console.log('onReady callback')}
                onStart={() => console.log('onStart callback')}
                onPause={() => console.log('onPause callback')}
                onEnded={() => console.log('onEnded callback')}
                onError={() => console.log('onError callback')}
            />
        </div>
    )
}

export default PlayerComponent
