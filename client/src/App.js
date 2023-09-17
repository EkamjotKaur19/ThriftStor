import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Nav/Nav';
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { AuthProvider } from './components/AuthContext';
import Create from './components/Create/Create';
import Posted from  './components/Posted/Posted';
import Signup from './components/Signup/Signup';
import Buy from './components/Buy/Buy';
import Pickup from './components/Pickup/Pickup';
import About from './components/About/About';

function App() {
  return (
    <>
      <Router>
      <AuthProvider >
        
        <div>
          <Navbar />
          
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/products' exact element={<Product />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/posted' exact element={<Posted />} />
        <Route path='/create' exact element={<Create />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/pickup' exact element={<Pickup />} />
        </Routes>
      </div>
      </AuthProvider>
      </Router>
    </>
  );
}

export default App;
