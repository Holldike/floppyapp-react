import './Buttons.sass'
import React from 'react'

class Buttons extends React.Component {
    render() {
        return (
            <div className="buttons">
                <a className="click" data-content="about">click to next
                    <div className="arrow-right"/>
                </a>
            </div>
        );
    }

}

export default Buttons;