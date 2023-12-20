import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './store';
import Home from './screens/Home';
import Cart from './screens/Cart';
import About from './screens/About';
import EmailPage from './screens/EmailPage';
import LoadingScreen from './screens/LoadingScreen';
import { useHistory } from 'react-router-dom';
import baseURL from "./components/login/api/axios";
import axios from 'axios';
import { subscribeTokenRefresh, onRefreshed } from './components/login/interseptor';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
      <Provider store={store}>
<Routes>
<Route path="/pizza-react" element={<LoadingScreen/>} />
  <Route path="/main" element={<Home/>}/>
  <Route path="/cart" element ={<Cart/>}/>
  <Route path="/email" element ={<EmailPage/>}/>
  <Route path="/about" element ={<About/>}/>
</Routes>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
