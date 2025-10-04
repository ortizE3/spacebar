import React from 'react'
import type { NumLineProps } from '../../models/Props/NumLineProps'

function NumLine(props: NumLineProps) {
    return (
        <div className={`uppercase ${props.className ?? ''}`}>
            <hr className='m-0 border-1' />
            <div className='flex justify-between'>
                <div className='muted'>{props.start}</div>
                <div className='muted'>{props.end}</div>
            </div>
        </div>
    )
}

export default NumLine