import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
<App/>
<CadastroVideo />
<CadastroCategoria />
</BrowserRouter>,
document.getElementById('root')
);

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
