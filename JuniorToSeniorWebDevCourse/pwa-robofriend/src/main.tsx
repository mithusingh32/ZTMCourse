import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// @ts-ignore
import { registerSW } from 'virtual:pwa-register';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const updateSW = registerSW({
  onOfflineReady() {},
});

const appStore = await setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
