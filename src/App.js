import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import AboutUs from './components/pages/AboutUs';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />

        <Body />
      </Provider>

    </div>
  );
}

export default App;
