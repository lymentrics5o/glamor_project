
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function App() {
  return (
    <Router>
      
      <div className="App">
      <header className="App-header">
       <h1>GLAMOR</h1>
      </header>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/addproduct" element={<AddProducts/>}/>
        <Route path="/" element={<GetProducts/>}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
