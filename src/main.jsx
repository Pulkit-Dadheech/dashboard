import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './public-path/Public-path'; 

let root = null;

// Qiankun lifecycle function: bootstrap
export async function bootstrap() {
  console.log('Verizon Dashboard app bootstrapped');
}

// Qiankun lifecycle function: mount
export async function mount(props) {
  console.log('Verizon Dashboard app mounted with props:', props);
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

// Qiankun lifecycle function: unmount
export async function unmount(props) {
  console.log('Verizon Dashboard app unmounted');
  root?.unmount();
  root = null;
}

if (!window.__POWERED_BY_QIANKUN__) {
  const container = document.getElementById('root');
  root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
