import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Add from './pages/Add.jsx';
import Home from './pages/Home.jsx';
import Update from './pages/Update';

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/add' element={<Add />} />
				<Route path='/update' element={<Update />} />
				<Route path='/delete' element={<Add />} />
			</Routes>
		</Router>
	);
}

export default App;
