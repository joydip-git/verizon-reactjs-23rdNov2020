import React, { Fragment } from 'react'

const WebComponentPara = (args) => {

    const paraStyle = {
        backgroundColor: 'beige',
        fontFamily: 'Segoe UI',
        fontSize: 'medium',
        border: '1px solid blue',
        borderRadius: '2px',
        margin: '10px'
    }
    const paraMessage = 'message from para component';
    const paraElement = (
        // <Fragment>
        <>
            <span>
                Author Name:&nbsp;{args.data}
                <br />
            </span>
            <p id='contentPara' style={paraStyle} onClick={() => args.caller(paraMessage)}>

                Data:&nbsp;{args.paraData}
            </p>
        </>
        //</Fragment>
    )

    return paraElement;
}
export default WebComponentPara;

/*
class Frag extends Component {
    render() {
        return this.props.children;
    }
}
*/