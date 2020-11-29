import './Button.sass'
import React from 'react'

class Button extends React.Component {
    render() {
		if (this.props.type === 'clickToNext') {
            return (
                <div className="button" onClick={this.props.onClickHandler}>
					click to next
                    <div className="arrow-right"/>
                </div>
            );

		} else {
            return (
                <div className="button" onClick={this.props.onClickHandler}>
                    <div className="arrow-left"/>
					click to back
                </div>
            );

		}

    }

}

export default Button;
