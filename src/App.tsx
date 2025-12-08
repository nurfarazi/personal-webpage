import { Suspense, lazy, Component, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import './App.css'

const Contact = lazy(() => import('./pages/Contact'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Knowledge = lazy(() => import('./pages/Knowledge'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ThemedParticles = lazy(() => import('./components/ThemedParticles'));

const RouteFallback = () => (
  <div className="app-loading" role="status" aria-live="polite">
    Loading content...
  </div>
);

const ParticlesFallback = () => null;

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Silently catch errors in ThemedParticles
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

const AppContent = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<ParticlesFallback />}>
          <ThemedParticles />
        </Suspense>
      </ErrorBoundary>
      <Navbar key="navbar"/>
      <Suspense fallback={<RouteFallback />}>
        <Routes key="routes">
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
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
