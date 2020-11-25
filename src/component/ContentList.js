import HeaderSection from './HeaderSection';
import TextSection from './TextSection';
import Buttons from './Buttons';

function ContentList() {
	return (
		<div className="content">
			<HeaderSection main="Floppy App" sub="Web Making"/>
			<TextSection text={[
                'Development and support of modern web applications', <br/>,
                'We develop easy-to-use programs', <br/>,
                'stylish and responsive websites for all devices.', <br/>,
                'we produce high-performance web applications in the shortest possible time.'
            ]}/>
            <Buttons/>
		</div>
	);
}

export default ContentList;