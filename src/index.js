import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZtr05XD7oyhgbrppZJilpCsrJmtw_o9M",
  authDomain: "coderhouse-ecommerce-17d88.firebaseapp.com",
  projectId: "coderhouse-ecommerce-17d88",
  storageBucket: "coderhouse-ecommerce-17d88.appspot.com",
  messagingSenderId: "505097378019",
  appId: "1:505097378019:web:0fb4b8e5cdb71a9b3ecdd6",
  measurementId: "G-4TNFE21GFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
