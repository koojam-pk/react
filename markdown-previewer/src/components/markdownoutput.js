import React, {Component} from 'react';

class MarkdownOutput extends Component {
    render() {
        return (
            <div className="col-md-6 output-container">
                <div id="markoutput" className="output-data-container" dangerouslySetInnerHTML={{__html:this.props.value}} />
            </div>
        );
    }
}

export default MarkdownOutput;