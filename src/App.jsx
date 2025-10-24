import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Gate from './components/Gate';
import Header from './components/Header'
import Hero from './components/Hero';
import Forum from './components/Forum';
import About from './components/About';
import Footer from './components/Footer';
import Programgrid from './components/Programgrid';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <Gate key="gate" onAuthenticated={handleAuthenticated} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Program Grid */}
            <Programgrid />

            {/* Forum Section */}
            <Forum />

            {/* About section */}
            <About />
            
            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App