import React from 'react';
import './ContactForm.sass';

class ContactForm extends React.Component {
    render() {
        return (
            <div className="form">
                <div className="input-box">
                    <input type="text" name="" placeholder="Full Name"/>
                </div>
                <div className="input-box">
                    <input type="text" name="" placeholder="Email Address"/>
                </div>
                <div className="input-box">
                    <input type="text" name="" placeholder="Mobile No."/>
                </div>
                <div className="input-box">
                    <textarea placeholder="Write your message here"/>
                </div>
                <div className="input-box">
                    <input type="submit" name="" value="Send"/>
                </div>
            </div>
        );

    }

}

export default ContactForm