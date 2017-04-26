import React, { Component } from 'react';

class MarkdownInput extends Component{
    render() {
        return (
            <div className="col-md-6">
                <h2>Input</h2>
                <textarea 
                    className="form-control" 
                    id="markinput" 
                    rows="35"
                    onChange={this.props.onTextChange} 
                    defaultValue={this.props.value}></textarea>
            </div>
        );
    }
}

export default MarkdownInput;