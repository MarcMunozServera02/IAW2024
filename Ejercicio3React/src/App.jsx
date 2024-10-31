import './App.css';
import Header from "./components/Header";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import Blog from './pages/Blog';
import Nosotros from './pages/Nosotros.jsx';
import Tienda from './pages/Tienda';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Header/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
