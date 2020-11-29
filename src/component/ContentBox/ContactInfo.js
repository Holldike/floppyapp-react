import './ContactInfo.sass';

function ContactInfo() {
    return (
        <div className="contact-info">
            <div>
                <div className="contact-container">
                    <div className="contact-logo">
                        <img src="img/contact/telegram.png"/>
                    </div>
                    <div className="contact-text">
                        <p>@floppyapp</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="contact-container">
                    <div className="contact-logo">
                        <img src="img/contact/email.png"/>
                    </div>
                    <div className="contact-text">
                        <p>floppyapp@gmail.com</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="contact-container">
                    <div className="contact-logo">
                        <img src="img/contact/phone.png"/>
                    </div>
                    <div className="contact-text">
                        <p>+38099876543</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ContactInfo