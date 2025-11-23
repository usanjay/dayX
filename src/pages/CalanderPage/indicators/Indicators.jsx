import React from 'react'
import Indicator from './Indicator';

function Indicators() {
    return (
        <div className='flex flex-wrap md:justify-center gap-x-6 sm:gap-x-10 gap-y-3 mt-4 md:mt-8'>
            <Indicator color="green" content="Today" />
            <Indicator color="blue" content="Start" />
            <Indicator color="purple" content="End" />
            <Indicator color="red" content="Past" />
            <Indicator color="yellow" content="Future" />
        </div>
    )
}

export default Indicators;