import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import './App.css'

const Contact = lazy(() => import('./pages/Contact'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Knowledge = lazy(() => import('./pages/Knowledge'));
const Projects = lazy(() => import('./pages/Projects'));
const ThemedParticles = lazy(() => import('./components/ThemedParticles'));

const RouteFallback = () => (
  <div className="app-loading" role="status" aria-live="polite">
    Loading content...
  </div>
);

const AppContent = () => {
  return (
    <Router>
      <Suspense fallback={null}>
        <ThemedParticles />
      </Suspense>
      <Navbar key="navbar"/>
      <Suspense fallback={<RouteFallback />}>
        <Routes key="routes">
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
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
