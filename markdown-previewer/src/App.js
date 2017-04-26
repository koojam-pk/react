import React, { Component } from 'react';
import marked from 'marked';
import MarkdownInput from './components/markdowninput';
import MarkdownOutput from './components/markdownoutput';
import './App.css';

class App extends Component {
    defaultText = 'Heading\n' +
'=======\n\n' +
'Sub-heading\n'+
'----------\n\n'+
'### Another deeper heading\n\n' +
'Paragraphs are separated\n' +
'by a blank line.\n\n' +
'Leave 2 spaces at the end of a line to do a\n' +
'line break\n\n'+
'Text attributes *italic*, **bold**,\n' +
'`monospace`, ~~strikethrough~~ .\n\n' +
'Shopping list:\n\n' +
'  * apples\n' +
'  * oranges\n' +
'  * pears\n\n' +
'Numbered list:\n\n' +
'  1. apples\n' +
'  2. oranges\n' +
'  3. pears\n\n' + 
'The rain---not the reign---in\n' +
'Spain.\n\n' +
' *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'; 
    constructor(props) {
        super(props);
        
        this.state = { 
            markData: this.defaultText
        };
    }
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center display-title">Markdown Previewer</h1>
                <MarkdownInput value={this.state.markData} onTextChange={this.onTextChange}/>
                <MarkdownOutput value={marked(this.state.markData)}/>
            </div>
        );
    }
    
    onTextChange=(event)=>{
        this.setState({markData: event.target.value});
    }
}

export default App;
