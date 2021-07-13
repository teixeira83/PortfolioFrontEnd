import { Home } from './pages/index';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalStyle from "./assets/css/settings/global";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
  return (
      <>
        <Home />
        <GlobalStyle />
        <ToastContainer />
      </>
  );
}