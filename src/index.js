import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import UserProfileComponent from 'components/Profile/userProfileComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <UserProfileComponent/>
  </React.StrictMode>
);
