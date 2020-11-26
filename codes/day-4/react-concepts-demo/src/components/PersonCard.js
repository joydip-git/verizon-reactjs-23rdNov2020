import React, { memo } from 'react'
import './PersonCard.css'

let PersonCard = (props) => {
    console.log('[PC] rendered')
    let design = (
        <div className='personStyle' onClick={() => props.selectPerson(props.person.id)}>
            Name:&nbsp;{props.person.name}
        </div>
    )
    return design;
}
PersonCard = memo(PersonCard);
export default PersonCard;

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