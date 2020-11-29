import React from "react";
import HeaderSection from "./element/HeaderSection";
import Button from "./element/Button";
import TextSection from "./element/TextSection";
import './Content.sass';

class Home extends React.Component {
    render() {
        console.log(this.props.display);
        return (
            <div style={{display: this.props.display}} className="content">
                <HeaderSection main="Floppy App" sub="Web Making"/>
                <TextSection text={[
                    'Development and support of modern web applications', <br/>,
                    'We develop easy-to-use programs,', <br/>,
                    'stylish and responsive websites for all devices.', <br/>,
                    'Using modern creation technologies,', <br/>,
                    'we produce high-performance web applications in the shortest possible time.'
                ]}/>
                <div className="buttons">
                    <Button onClickHandler={this.props.showNext} type="clickToNext"/>
                </div>
            </div>
        );
    }
}

export default Home