import React from 'react'
import { BarLoader, BeatLoader, BounceLoader } from 'react-spinners'
import { css } from "@emotion/core"

const loadingStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '40px',
    paddingTop: '40px'
}

const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`

function LoadingDemo() {
    return (
        <div style={loadingStyle}>
            <BarLoader css={loaderCSS} size={24} color='red' loading />
            <BeatLoader css={loaderCSS} size={48} color='orange' loading />
            <BounceLoader css={loaderCSS} size={72} color='maroon' loading />
        </div>
    )
}

export default LoadingDemo
