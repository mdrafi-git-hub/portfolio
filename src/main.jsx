import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ This enables toggles & collapse



createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <App />
  </BrowserRouter>
)
