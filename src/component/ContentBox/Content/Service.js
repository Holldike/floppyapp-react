import React from "react";
import HeaderSection from "./element/HeaderSection";
import TextSection from "./element/TextSection";
import Button from "./element/Button";
import ServiceBox from "./element/ServiceBox";
import './Content.sass';

class Service extends React.Component {
    render() {
        return (
            <div style={{display: this.props.display}} className="content">
                <HeaderSection main="Services" sub="We Do"/>
                <ServiceBox/>
                <TextSection text={[
                        <b>We provide a full cycle of development, launch and promotion of sites of all types</b>, <br/>, <br/>,

                        <b>- Business card sites and landing pages - </b>, 'electronic platforms for launching a new business', <br/>,
                        'informing the market about the emergence of new products and services,', <br/>,
                        'attracting attention to young companies', <br/>, <br/>,

                        <b>- Corporate websites - </b>, 'are a multifunctional image platform for medium and large businesses,', <br/>,
                        'which implies the formation of positive brand perception among consumers ', <br/>, <br/>,

                        <b>- News portals - </b>, 'commercial industry and general news resources of general purpose', <br/>, <br/>,

                        <b>- Online stores - </b>,'trading and advertising platforms for online business ', <br/>,
                       ' and promotion of goods and services in the network with a full cycle of client services', <br/>,
                        '(ordering, payment, delivery, advertising, informing about discounts, promotions, etc.)', <br/>, <br/>,

                        <b>Turnkey Website<br/>Development for our company is</b>, <br/>, <br/>,
                        <b>-</b>, ' Creation and development of a unique design of an electronic platform (taking into account the', <br/>,
                        'corporate style, colors and placement of functional elements)', <br/>, <br/>,
                        <b>-</b>, ' Usability development (navigation, management, content placement and updating, etc.)', <br/>, <br/>,
                        <b>-</b>, ' Creation of custom templates and layout of site pages, taking into account the number of functional', <br/>,
                        'pages and the selected CMS', <br/>, <br/>,
                        <b>-</b>,' Installation and configuration of a working CMS, transfer of the site template to the "engine"', <br/>, <br/>,
                        <b>-</b>,' Test launch of the site on the domain with the elimination of the detected errors', <br/>, <br/>,
                        <b>-</b>, ' Launching an electronic resource into operation', <br/>
                ]}/>
                <div className="buttons">
                    <Button onClickHandler={this.props.showPrev} />
                    <Button onClickHandler={this.props.showNext} type="clickToNext"/>
                </div>
            </div>
        );
    }
}

export default Service