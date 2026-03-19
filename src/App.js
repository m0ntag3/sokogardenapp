import './App.css';
import { BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Makepayment from './components/Makepayment';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Sokogarden</h1>
      </header>
      
      <nav>
        <Link to="/" className='btn btn-primary btn-sm m-1'>Home</Link>
        <Link to="/signup" className='btn btn-warning btm-sm m-1'>Register</Link>
        <Link to="/signin" className='btn btn-secondary btm-sm m-1'>Log In</Link>
        <Link to="/addproducts" className='btn btn-info btn-sm m-1'>Add Products</Link>
      </nav>

      {/* Below are the different routes together with the different components */}
      <Routes>
        <Route path='/' element={<Getproducts/>}/>
        <Route path='/addproducts' element={<Addproducts/>}/>
        <Route path='/makepayment'element={<Makepayment/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
