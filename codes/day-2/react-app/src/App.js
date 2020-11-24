import WebComponentHeader from './WebComponentHeader'
import WebComponentPara from './WebComponentPara'
import React from 'react'

const App = () => {
    const headerContent = 'Introduction to Web Components';
    const paraContent = `Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

    Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.`

    const sayHi = () => {
        window.alert('welcome to web component')
    }

    const appDesign = (
        <article id='mainArticle'>
            <WebComponentHeader headerData={headerContent} value={10} handler={sayHi} />
            <WebComponentPara paraData={paraContent} data={'joydip'} caller={sayHi} />
        </article>
    )
    return appDesign;
}
export default App;
/**
 * const properties ={
 * headerData:'',
 * value:10,
 * handler:sayHi
 * }
 * const headerElement = WebComponentHeader(properties)
 */
