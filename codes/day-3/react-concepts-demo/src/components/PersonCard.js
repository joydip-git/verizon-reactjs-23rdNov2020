import React from 'react'
import './PersonCard.css'

export default function PersonCard(props) {
    let design = (
        <div className='personStyle'>
            Name:&nbsp;{props.person.name}
        </div>
    )
    return design;
}