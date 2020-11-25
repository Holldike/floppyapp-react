function LinkList() {
	let list = [
		{href: '#home', name: 'Home'},
        {href: '#about', name: 'About Us'},
        {href: '#services', name: 'Services'},
        {href: '#contact', name: 'Contact'}
	];

	return list.map((link, key) =>
		<a key={key} href={link.href} className="burger-menu-link">{link.name}</a>
	);

}

export default LinkList;