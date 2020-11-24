//webcomponentheader function => component
//headerElement=> content

const webcomponentheader = (args) => {
    //data
    //const headerContent = args.headerData;

    //style
    const headerStyle = {
        backgroundColor: 'burlywood',
        fontFamily: 'Segoe UI',
        border: '1px solid blue',
        borderRadius: '2px'
    }
    //elements
    const headerElement = document.createElement('h3');

    //element style
    //headerElement.style = headerStyle;
    headerElement.style.backgroundColor = 'burlywood';
    headerElement.style.fontFamily = 'Segoe UI'
    headerElement.style.border = '1px solid blue'
    headerElement.style.borderRadius = '2px'
    headerElement.style.margin = '10px'
    headerElement.style.textAlign = 'center'

    //element content
    //headerElement.innerHTML = headerContent;
    headerElement.innerHTML = args.headerData;

    const valueElement = document.createElement('span');
    valueElement.style.textAlign = 'center'
    valueElement.innerHTML = `<br/>Value:&nbsp;${args.value}`

    const rootElement = document.createElement('div');
    rootElement.appendChild(headerElement);
    rootElement.appendChild(valueElement);
    rootElement.addEventListener('mouseover', args.handler)

    return rootElement;
}
export default webcomponentheader;