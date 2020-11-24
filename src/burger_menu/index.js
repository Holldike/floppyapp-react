import Navigation from './Navigation';
import Button from './Button';
import Overlay from './Overlay';

function BurgerMenu() {
	return (
		<div className="burger-menu">
			<Button/>
			<Navigation/>
		    <Overlay/>
		</div>
	);
}

export default BurgerMenu;
