import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = () => {
    return <span style={{ color: 'yellow' }}>Colored component</span>
}

const CustomChild = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div>First line</div>
            <div>Second line</div>
        </div>
    )
})

function Tooltip() {
    return (
        <div>
            <div style={{ paddingBottom: '20px', paddingTop: '20px' }}>
                <Tippy
                    placement='left'
                    arrow={false}
                    delay={1000} 
                    content='Basic Tooltip'
                >
                    <button>Hover</button>
                </Tippy>

                <Tippy 
                    content={<span style={{ color: 'orange' }}>Colored</span>}
                >
                    <button>Hover</button>
                </Tippy>

                <Tippy content={<ColoredTooltip />}>
                    <button>Hover</button>
                </Tippy>

                <Tippy placement='top-start' content={<ColoredTooltip />}>
                    <CustomChild />
                </Tippy>
            </div>
        </div>
    )
}

export default Tooltip
