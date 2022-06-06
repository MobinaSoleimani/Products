import { Route, Routes, Navigate} from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import NavbarProducts from './components/shared/NavbarProducts';
import ShopCart from './components/ShopCart';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <>
    <Provider store={store}>
    <NavbarProducts />
    
    <Routes> 
      <Route path="/products/:id" element={<ProductDetails/>} />
      <Route path="/products" element={<Store/>} />
      <Route path="/cart" element={<ShopCart/>} />
      <Route path="/*" element={<Navigate to="/products"/>} />
     </Routes> 
    </Provider> 
</>
  );
}

export default App;
