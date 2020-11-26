import React, { forwardRef } from 'react'
//import { Component, createRef } from 'react'
/*
export default class Child extends Component {
    constructor() {
        super()
        this.childInputRef = createRef()
    }
    //childInputRef = createRef()

    focusChildInput = () => {
        this.childInputRef.current.focus()
    }
    render() {
        return (
            <div>
                Child:&nbsp;<input type='text' ref={this.childInputRef} />
            </div>
        )
    }
}
*/
let Child = (props, reference) => {

    return (
        <div>
            Child:&nbsp;<input type='text' ref={reference} />
        </div>
    )

}
export default forwardRef(Child);

/*
const forRef = (OC) => {
    class ForRef extends Component {
        render() {
            return OC({ ...this.props }, ref);
        }
    }
    return ForRef;
}
*/
//type, props, key, ref
