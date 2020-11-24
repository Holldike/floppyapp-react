import LinkList from './LinkList';

function Navigation() {
	return (
		<nav class="burger-menu-nav">
		    <LinkList list={[
				{content: 'home', name: 'Home'},
		        {content: 'about', name: 'About Us'},
		        {content: 'services', name: 'Services'},
		        {content: 'contact', name: 'Contact'}
		    ]}/>
		</nav>
	);

}

export default Navigation;