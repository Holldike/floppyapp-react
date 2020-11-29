import React from 'react';
import './ServiceBox.sass';

class ServiceBox extends React.Component {
    render() {
        return (
            <div className="service-box">
                <div className="wrap">
                    <img src="img/service/icon1.png"/>
                    <p>Design</p>
                </div>
                <div className="wrap">
                    <img src="img/service/icon2.png"/>
                    <p>Custom Web Software</p>
                </div>
                <div className="wrap">
                    <img src="img/service/icon3.png"/>
                    <p>Websites</p>
                </div>
            </div>
        )
    }
}

export default ServiceBox