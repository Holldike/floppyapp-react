import React from 'react';
import './HeaderSection.sass';

class HeaderSection extends React.Component {
    render() {
        return (
            <div className="header-section">
                <h2><span>{this.props.main}</span><br/>{this.props.sub}</h2>
            </div>
        );

    }
}

export default HeaderSection;