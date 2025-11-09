import { useState }  from 'react';
import { WelcomePage } from './pages/WelcomePage.js';
import { SignForm } from './pages/SignForm.js';
import { MainPage } from './pages/MainPage.js';



export default function App() {
  const [isWelcomeMenu, setWelcomePage] = useState(true);

  // TODO: get from cache/cookies (/ something) and check logged state
  const [isLoggedIn, setLoggedIn] = useState(false);

  const welcomePage = new WelcomePage(setWelcomePage);
  const signForm = new SignForm(setLoggedIn);
  const mainPage = new MainPage();

  return (
     isWelcomeMenu && !isLoggedIn && welcomePage ||
    !isWelcomeMenu && !isLoggedIn && signForm    ||
    !isWelcomeMenu &&  isLoggedIn && mainPage
  );
}

