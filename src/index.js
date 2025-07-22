import './public-path/Public-path.js';    // ← include .js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';               // ← include .jsx
import './index.css';                    // ← include .css

let root = null;

// Qiankun bootstrap
export async function bootstrap() {
  console.log('Dashboard app bootstrapped');
}

// Qiankun mount
export async function mount(props) {
  console.log('Dashboard app mounted with props:', props);
  const container = props?.container
    ? props.container.querySelector('#root')
    : document.getElementById('root');

  root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>
  );
}

// Qiankun unmount
export async function unmount() {
  console.log('Dashboard app unmounted');
  root?.unmount();
  root = null;
}

// Standalone mode (outside Qiankun)
if (!window.__POWERED_BY_QIANKUN__) {
  const container = document.getElementById('root');
  root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
