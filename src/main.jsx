import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import './index.css'
import App from './App.jsx'
import { ContextApi } from './components/ContextApi.jsx'
import { Provider } from 'react-redux'
import store from './store.js';
import firebaseConfig from './firebase/firebaseConfig.js';
createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <ContextApi>
    <App />
  </ContextApi>
  </Provider>

);
