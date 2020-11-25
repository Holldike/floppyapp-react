import './Content.sass';
import HeaderSection from "./HeaderSection";
import TextSection from "./TextSection";
import Buttons from "./Buttons";
import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content-box" id="home">
                    <HeaderSection main="Floppy App" sub="WebMaking"/>
                    <TextSection text={'This is <strong>not</strong> working.'}/>
                    <Buttons/>
                </div>
            </div>
        );
    }
}

export default Content;
