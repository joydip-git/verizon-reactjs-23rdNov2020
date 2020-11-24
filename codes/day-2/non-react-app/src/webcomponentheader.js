//webcomponentheader function => component
//headerElement=> content

const webcomponentheader = () => {

    //data
    const headerContent = 'Introduction to Web Components';

    //style
    const headerStyle = {
        backgroundColor: 'burlywood',
        fontFamily: 'Segoe UI',
        border: '1px solid blue',
        borderRadius: '2px'
    }
    //element
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
    headerElement.innerHTML = headerContent;
    //element
    return headerElement;
}
export default webcomponentheader;