import React, {Component} from 'react';

class MarkdownOutput extends Component {
    render() {
        return (
            <div className="col-md-6">
                <h2>Output</h2>
                <div id="markoutput" dangerouslySetInnerHTML={{__html:this.props.value}} />
            </div>
        );
    }
}

export default MarkdownOutput;