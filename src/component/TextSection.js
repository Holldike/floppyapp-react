import React from 'react';
import './TextSection.sass'

class TextSection extends React.Component{
    render() {
        return (
            <div className="text-section">
                {this.props.text}
            </div>
        );

    }
}

export default TextSection;