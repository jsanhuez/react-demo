import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

function ColorPicker() {
    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)

    return (
        <div>
            <button onClick={() => 
                setShowColorPicker(showColorPicker => !showColorPicker)
            }>
                { showColorPicker ? 'Close color picker' : 'Pick a color' }
            </button>
            {
                showColorPicker && (
                <div style={{ 
                    position: 'relative',
                    left: '50%',
                    marginLeft: '-112px' 
                }}>
                    <ChromePicker
                        color={color}
                        onChange={(updatedColor) => setColor(updatedColor.hex)}
                    />
                </div>)
            }
            <h3>You picked {color}</h3>
        </div>
    )
}

export default ColorPicker
