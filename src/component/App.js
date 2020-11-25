import './App.sass';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Header from './Header/Header';
import ContentList from './ContentList';

function App() {
	return (
		<>
			<Header/>
			<BurgerMenu/>
			<div className="content-box">
				<ContentList/>
			</div>
		</>
	);

}

export default App;
