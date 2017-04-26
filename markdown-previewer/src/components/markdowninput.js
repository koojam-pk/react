import React, { Component } from 'react';

class MarkdownInput extends Component{
    render() {
        return (
            <div className="col-md-6">
                <textarea 
                    className="form-control textarea-container" 
                    id="markinput" 
                    rows="35"
                    onChange={this.props.onTextChange} 
                    defaultValue={this.props.value}></textarea>
            </div>
        );
    }
}

export default MarkdownInput;