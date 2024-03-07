import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './GlobalStyle.tsx'
import { Provider } from 'react-redux'
import store from './redux/config/configStore.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
    <GlobalStyle/>
  </Provider>
);
