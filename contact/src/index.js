import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ContactManager from './components/ContactManager';

const root = ReactDOM.createRoot(document.getElementById('root'));
const contacts = ["Arnold Mubaiwa", "Thomas Anderson"]

root.render(
  <div>
    <ContactManager data={contacts}/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
