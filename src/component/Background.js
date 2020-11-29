import './Background.sass';
import React from 'react';

class Background extends React.Component {
    render() {
        return (
            <div className="background">
                <img data-content="home" src="img/home.jpg"/>
                <img data-content="about" src="img/about.jpg"/>
                <img data-content="service" src="img/service.jpg"/>
                <img data-content="contact" src="img/contact.jpg"/>
            </div>
        )
    }
}

export default Background