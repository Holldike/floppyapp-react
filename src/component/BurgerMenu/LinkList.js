function LinkList(props) {
	return props.list.map((link, key) =>
		<a key={key} href={link.href} className="burger-menu-link">{link.name}</a>
	);

}

export default LinkList;