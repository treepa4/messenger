import { useState }  from 'react';
import { WelcomePage } from './pages/WelcomePage.js';
import { SignForm } from './pages/SignForm.js';
import { MainPage } from './pages/MainPage.js';



export default function App() {
  const [isWelcomeMenu, setWelcomePage] = useState(true);

  // TODO: get from cache/cookies (/ something) and check is it
  const [isLoggedIn, setLoggedIn] = useState(false);

  const welcomePage = new WelcomePage(setWelcomePage);
  const signForm = new SignForm(setLoggedIn);
  const mainPage = new MainPage();

  if (isWelcomeMenu) return welcomePage;

  if (!isLoggedIn) return signForm;

  return mainPage;
}

