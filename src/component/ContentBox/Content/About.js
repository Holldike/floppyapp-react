import React from "react";
import './Content.sass';
import TextSection from "./element/TextSection";
import Button from "./element/Button";
import HeaderSection from "./element/HeaderSection";

class About extends React.Component {
    render() {
        return (
            <div style={{display: this.props.display}} className="content">
                <HeaderSection main="About Us" sub="We Are"/>
                <TextSection text={[
                    <b>Ukrainian company specializing in the development of web products</b>, <br/>, <br/>,
                    'By harmoniously combining design and development, we turn complex tasks into', <br/>,
                    'simple and understandable solutions, helping you grow your business and interact more effectively with your customers',
                    <br/>, <br/>,
                    'Using modern management methods and advanced tools to optimize performance', <br/>,
                    ' we create products and services based on your needs,', <br/>,
                    'combining reality and the digital world into a single unique customer experience'
                ]}/>
                <div className="buttons">
                    <Button onClickHandler={this.props.showPrev}/>
                    <Button onClickHandler={this.props.showNext} type="clickToNext"/>
                </div>
            </div>
        );
    }
}

export default About;