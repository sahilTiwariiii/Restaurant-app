
import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup';
import ContextReducer from './components/ContextReducer';
import Cart from './screens/Cart';
import MyOrder from './screens/MyOrder';


function App() {
  return (
    <ContextReducer>
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/createuser' element={<Signup/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/myOrder' element={<MyOrder/>}/>
        
      </Routes>
    </Router>
    <div >
   {/* <Home/> */}
    </div>
    </>
    </ContextReducer>
  );
}


export default App;
