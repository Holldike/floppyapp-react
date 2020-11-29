import './App.sass';
import Header from './Header/Header';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import ContentBox from "./ContentBox/ContentBox";
import Background from "./Background";

function App() {
	return (
		<>
			<Header/>
			<ContentBox/>
			<BurgerMenu/>
			<Background/>
		</>
	);

}

export default App;
