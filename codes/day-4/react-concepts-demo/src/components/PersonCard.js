import React from 'react'
import './PersonCard.css'

export default function PersonCard(props) {
    console.log('[PC] rendered')
    let design = (
        <div className='personStyle' onClick={() => props.selectPerson(props.person.id)}>
            Name:&nbsp;{props.person.name}
        </div>
    )
    return design;
}
/**
 * {
 *   type:'div',
 *   key:null,
 *   ref:null,
 *   props:{
 *     person:{},
 *     children:[{},{},{}]
 *   }
 * }
 */