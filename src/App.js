import './App.css';
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import {Home} from './Components/Home'
import {UpdateProduct} from './Components/UpdateProduct'
import {AddProduct} from './Components/AddProduct'
import {AllProductHome} from './Components/AllProductHome'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/UpdateProduct' element={<UpdateProduct/>} />
        <Route path='/AllProductHome' element={<AllProductHome/>} />
        <Route path='/AddProduct' element={<AddProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
