import React from "react";
import Home from "./Content/Home";
import About from "./Content/About";
import Service from "./Content/Service";
import Contact from "./Content/Contact";
import './ContentBox.sass';
import ContactInfo from "./ContactInfo";

class ContentBox extends React.Component {
    constructor(props) {
        super(props);
        this.replaceContent = this.replaceContent.bind(this);

        this.state = {
            home: 'block',
            about: 'none',
            service: 'none',
            contact: 'none',
        }

    }

    replaceContent(replacer) {
        for (let content in this.state) {
            if (this.state.hasOwnProperty(content)) {
                this.setState({[content]: 'none'})

            }

        }

        this.setState({[replacer]: 'block'})
    }

    render() {
        return (
            <div className="content-box">
                <Home
                    display={this.state.home}
                    showNext={() => this.replaceContent('about')}
                />
                <About
                    display={this.state.about}
                    showNext={() => this.replaceContent('service')}
                    showPrev={() => this.replaceContent('home')}
                />
                <Service
                    display={this.state.service}
                    showNext={() => this.replaceContent('contact')}
                    showPrev={() => this.replaceContent('about')}
                />
                <Contact
                    display={this.state.contact}
                    showPrev={() => this.replaceContent('service')}
                />
                <ContactInfo/>
                <div className="all-right-reserved">©All rights reserved</div>
            </div>
        );
    }
}

export default ContentBox