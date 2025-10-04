import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeeIllustrationPage from './pages/FeeIllustrationPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/fee-illustration" element={<FeeIllustrationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
