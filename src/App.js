import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoadingScreen from './screens/LoadingScreen';
import Home from './screens/Home';
import Cart from './screens/Cart';
import About from './screens/About';
import EmailPage from './screens/EmailPage';
import AdminPage from './screens/AdminPage';
import Order from './screens/Order';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/pizza-react" element={<LoadingScreen />} />
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/main" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/email" element={<EmailPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/orders" element={<Order />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
