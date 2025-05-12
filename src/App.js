import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProducts from './components/AddProducts';
import GetProducts from './components/Getproducts';
import MainContent from './components/MainContent'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import './navbar.css';
import './carousel.css';
import Footer from './components/Footer';
import SingleProducts from './components/SingleProducts';
import './splashscreen.css';
import SplashScreen from './components/SplashScreen';

function App() {
  return (
    <Router>  {/* Router wraps everything */}
      <div className="App">
        <header className="App-header">
          <h1>NOVA PHARMACEUTICALS</h1>
        </header>
        <Routes>
          {/* SplashScreen route - This is the default route */}
          <Route path="/" element={<SplashScreen />} /> 

          {/* Other routes */}
          <Route path='/signin' element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/" element={<GetProducts />} />
          <Route path='/singleproducts' element={<SingleProducts />} />
          <Route path='/home' element={<GetProducts />} /> {/* Main Content after splash */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
