import React from 'react'

function Indicator({ color, content }) {
    const ColorMap = {
        green: 'bg-green-200 border-green-600',
        blue: 'bg-blue-200 border-blue-600',
        purple: 'bg-purple-200 border-purple-600',
        red: 'bg-red-100 border-red-400',
        yellow: 'bg-yellow-100 border-yellow-400',
    }
    const colorClass = ColorMap[color];
    
    return (
        <div className='flex items-center gap-2 mb-2'>
            <span className={`${colorClass} border-2 w-6 h-6 rounded-sm`} />
            <div className='text-gray-800'>{content}</div>
        </div>
    )
}

export default Indicator