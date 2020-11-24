function LinkList(props) {
	return props.list.map((link) => 
		<a href={link.content} data-content={link.content} class="burger-menu-link">{link.name}</a>
	);

}

export default LinkList;