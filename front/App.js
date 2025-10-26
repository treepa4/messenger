import React from 'react';
import { SignForm } from './pages/SignForm.js';
import { MainPage } from './pages/MainPage.js';



export default function App() {
  // get from cache/cookies (/ something) and check
  let loggedIn = false;
  
  if (!loggedIn) {
    return new SignForm();
  } else {
    return new MainPage();
  }
}
