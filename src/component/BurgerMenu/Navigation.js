import LinkList from './LinkList';

function Navigation() {
	return (
		<nav className="burger-menu-nav">
		    <LinkList list={[
				{href: '#home', name: 'Home'},
		        {href: '#about', name: 'About Us'},
		        {href: '#services', name: 'Services'},
		        {href: '#contact', name: 'Contact'}
		    ]}/>
		</nav>
	);

}

export default Navigation;