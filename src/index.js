import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* {store}에 저장된 state를 하위 자식 컴포넌트들이 자유롭게 사용 가능 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
