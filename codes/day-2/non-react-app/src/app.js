import webcomponentheader from './webcomponentheader'
import webcomponentpara from './webcomponentpara'

const app = () => {
    const headerElement = webcomponentheader()
    const paraElement = webcomponentpara();

    const appDesign = document.createElement('article', { id: 'mainArticle' });
    appDesign.appendChild(headerElement);
    appDesign.appendChild(paraElement);

    return appDesign;
}
export default app;