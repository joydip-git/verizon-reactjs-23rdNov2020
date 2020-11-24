const webcomponentpara = (args) => {
    const paraElement = document.createElement('p', { id: 'contentPara' });
    //event
    paraElement.addEventListener('click', args.caller)

    // const paraStyle = {
    //     backgroundColor: 'beige',
    //     fontFamily: 'Segoe UI',
    //     fontSize: 'medium',
    //     border: '1px solid blue',
    //     borderRadius: '2px',
    //     margin: '10px'
    // }
    //paraElement.style = paraStyle;
    paraElement.style.backgroundColor = 'beige';
    paraElement.style.fontFamily = 'Segoe UI'
    paraElement.style.fontSize = 'medium'
    paraElement.style.border = '1px solid blue'
    paraElement.style.borderRadius = '2px'
    paraElement.style.margin = '10px'

    //paraElement.innerHTML = paraContent;
    paraElement.innerHTML = args.paraData;
    return paraElement;
}
export default webcomponentpara;