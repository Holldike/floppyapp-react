import React from "react";

class Burger extends React.Component {
    render() {
        return (
            <a href="#" className="burger-menu-button" onClick={this.props.onClickHandler}>
                <span className="burger-menu-line burger-menu-line-1"/>
                <span className="burger-menu-line burger-menu-line-2"/>
                <span className="burger-menu-line burger-menu-line-3"/>
            </a>
        );
    }
}

export default Burger;