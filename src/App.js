
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Headers/Navbar';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Home from '../src/components/pages/Home'
import Services from './components/pages/Services.js'
import Products from './components/pages/Product';
import SignUp from './components/pages/Sign-up';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/services' exact element={<Services/>}/>
          <Route path='/products' exact element={<Products/>}/>
          <Route path='/sign-up' exact element={<SignUp/>}/>
        </Routes>
      </Router>
      </>
  );
}

export default App;
