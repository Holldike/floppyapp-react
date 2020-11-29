import React from "react";

class Burger extends React.Component {
    render() {
        return (
            <div className="burger-menu-button" onClick={this.props.onClickHandler}>
                <span className="burger-menu-line burger-menu-line-1"/>
                <span className="burger-menu-line burger-menu-line-2"/>
                <span className="burger-menu-line burger-menu-line-3"/>
            </div>
        );
    }
}

export default Burger;