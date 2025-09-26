import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemedParticles from './components/ThemedParticles'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage';
import Knowledge from './pages/Knowledge';
import './App.css'

const AppContent = () => {
  return (
    <Router>
      <ThemedParticles />
      <Navbar key="navbar"/>
      <Routes key="routes">
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/knowledge" element={<Knowledge />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App
