import './BurgerMenu.sass';
import React from "react";
import Navigation from './Navigation';
import Button from './Button';
import Overlay from './Overlay';

class BurgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);

        this.state = {
            isActive: false
        };

    }

    onClickHandler() {
        this.setState({isActive: !this.state.isActive});

    }

    render() {
        let className = 'burger-menu';

        if (this.state.isActive) {
            className += ' burger-menu-active';

        }

        return (
            <div className={className}>
                <Button onClickHandler={this.onClickHandler}/>
                <Navigation/>
                <Overlay onClickHandler={this.onClickHandler}/>
            </div>
        );

    }

}

export default BurgerMenu;
