import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App.js";
import './css/main.css'

const parentTagId = document.getElementById("main");
const application = ReactDOMClient.createRoot(parentTagId);

application.render(<App />);


// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
//
// reportWebVitals();
