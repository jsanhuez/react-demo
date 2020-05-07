import React from 'react'
import CountUp, { useCountUp } from 'react-countup'

function CustomCountUp() {
    const { countUp, start, pauseResume, reset, update } = useCountUp({
        duration: 5,
        end: 10000,
        startOnMount: false
    })

    return (
        <div>
            <div>
                <h1>{countUp}</h1>
                <button onClick={start}>Start</button>
                <button onClick={reset}>Reset</button>
                <button onClick={pauseResume}>Pause/Resume</button>
                <button onClick={() => update(2000)}>Update to 2000</button>
            </div>

            <p>
                <CountUp end={700} />
            </p>
            
            <p>
                <CountUp end={300} duration={5} />
            </p>
            
            <p>
                <CountUp start={200} end={1000} duration={5} />
            </p>

            <h2>
                <CountUp end={1000} duration={10} prefix='$' decimals={2} />
            </h2>

            <h2>
                <CountUp end={1000} duration={10} suffix=' USD' decimals={2} />
            </h2>
        </div>
    )
}

export default CustomCountUp
