import React, { createRef, useEffect, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'

const NameComp = ({ nameValue, updateHandler }) => {


    const someValue = useRef(null);//someValue --> RefMutableObj(.current=element)
    
   
    /*
    useMemo(() => {
        for (let i = 0; i < 100000; i++) {
            someValue.current += i;
        }
    }, [someValue])
    */

    useEffect(() => {
        console.log('[NC]: this side effect causing code is executed every time and first for the very first time and returns a callback')
        someValue.current.focus()
        return () => {
            console.log('[NC]: this inner callback code is NOT executed for the very first time but is executed next cycle onwards and before side effect causing code')
        }
    })

    useEffect(() => {
        console.log('[NC]: this side effect causing code is executed when name value changes and first for the very first time and returns a callback')
        return () => {
            console.log('[NC]: this inner callback code is NOT executed for the very first time but is executed next cycle onwards when name value changes and before side effect causing code')
        }
    }, [nameValue])

    useEffect(() => {
        console.log('[NC]: this side effect causing code is executed only one time (for the very first time) and first for the very first time and returns a callback')
        // someValue.current.focus()
        return () => {
            console.log('[NC]: this inner callback code is NOT executed for the very first time rather is executed only one time (when component is dismounted) and before side effect causing code')
        }
    }, [])

    /*
    useEffect(() => {
        console.log('[NC]: component mounted')
    }, [])


    useEffect(() => {
        return () => {
            console.log('[NC] compont is dismounted')
        }
    }, [])
    */
    console.log('[NC] rendered')
    return (
        <div>
            Name:&nbsp;<input type='text' ref={someValue} value={nameValue} onChange={(event) => updateHandler(event.target.value)} />
        </div>
    )
}

NameComp.propTypes = {
    nameValue: PropTypes.string.isRequired,
    updateHandler: PropTypes.func.isRequired
}

export default NameComp
