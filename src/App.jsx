import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Adjust the path as needed
import AppRouter from './AppRouter'; // Adjust the path as needed
import './App.css'; // Make sure this path points to your CSS file

function MainApp() { 
  return (
    <div className='app-midle'>
      <Provider store={store}> 
        <AppRouter /> 
      </Provider>
    </div>
  ); 
} 

export default MainApp;
