import WebComponentHeader from './WebComponentHeader'
import WebComponentPara from './WebComponentPara'
import React, { Component } from 'react'

class App extends Component {
    state = {
        headerContent: 'Introduction to Web Component using React JS',

        paraContent: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

        Declarative views make your code more predictable and easier to debug.`,

        count: 0,

        show: true,

        name: 'joydip'
    }

    sayHi = (message) => {
        console.log(message)
        window.alert(message)
    }

    increaseCountHandler = () => {
        this.setState((previousState) => {
            console.log(previousState)
            return {
                count: previousState.count + 1
            }
        }, () => console.log(this.state))
        /*
        this.setState((previousState, props) => {
            console.log(previousState)
            return {
                count: previousState.count + props.randomValue + 1
            }
        }, () => console.log(this.state))
        */
    }

    changeHeaderContentHandler = () => {
        this.setState({
            headerContent: 'Introduction to React JS'
        }, () => {
            console.log(this.state)
        })
        // setTimeout(() => {
        //     console.log(this.state)
        // }, 1000);

    }
    //WebComponentHeader({headerData:'Introduction to React JS', value:10, handler:sayHi})
    render() {
        console.log(this.props)
        const appDesign = (
            <article id='mainArticle'>
                <button onClick={this.changeHeaderContentHandler}>Change Header</button>
                <WebComponentHeader headerData={this.state.headerContent} value={this.state.count} handler={this.increaseCountHandler} />
                <WebComponentPara paraData={this.state.paraContent} data={this.state.name} caller={this.sayHi} />
            </article>
        )
        return appDesign;
    }
}
export default App;

/**
 * const properties ={
 * headerData:'Introduction to React JS',
 * value:10,
 * handler:sayHi
 * }
 * const newheaderElement = WebComponentHeader(properties)
 */
