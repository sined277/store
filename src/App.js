import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ToastContainer />
    <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
