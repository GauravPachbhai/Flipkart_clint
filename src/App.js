

import './App.css';

//component
import Header from './component/header/Header';
import Home from './component/home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './component/Detailed/DetailView'
import Cart from './component/cart/cart.jsx';


import { Box } from '@mui/material';

function App() {
  return (
    <DataProvider >
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product/:id' element={<DetailView/>}/>
            <Route path ='/cart' element={<Cart/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
