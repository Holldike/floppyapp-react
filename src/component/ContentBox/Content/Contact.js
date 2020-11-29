import React from "react";
import './Content.sass';
import TextSection from "./element/TextSection";
import Button from "./element/Button";
import ContactForm from "./element/ContactForm";
import HeaderSection from "./element/HeaderSection";

class Contact extends React.Component {
    render() {
        return (
            <div style={{display: this.props.display}} className="content">
                <HeaderSection main="Contact" sub="Ask Us"/>
                <TextSection text = {[
                    'We operate in an industry built on trust. This can only be achieved through communication and experienced support', <br/>,
                    'If you have a questions can ask them us in this form or through contact data from bellow panel'
                ]}/>
                <ContactForm/>
                <div className="buttons">
                    <Button onClickHandler={this.props.showPrev} />
                </div>
            </div>
        );
    }
}

export default Contact;