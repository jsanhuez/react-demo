import React from 'react'

function CustomToast({ closeToast }) {
    return (
        <div>
            <h3>Error!</h3>
            <p>Something went wrong</p>
            <button onClick={ closeToast }>Close</button>
        </div>
    )
}

export default CustomToast