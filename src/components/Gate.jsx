import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';

const Gate = ({ onAuthenticated }) => {
  const [passkey, setPasskey] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!passkey.trim()) return;
    
    setIsVerifying(true);
    
    try {
      // Call the Edge Function to verify passkey
      const { data, error } = await supabase.functions.invoke('verify-passkey', {
        body: { passkey: passkey.trim() }
      });
      
      if (error) {
        console.error('Edge function error:', error);
        throw error;
      }
      
      if (data?.success) {
        onAuthenticated();
      } else {
        // Wrong passkey - shake animation and increment attempts
        setIsShaking(true);
        setAttempts(prev => prev + 1);
        setPasskey('');
        
        // Show hint after 2 failed attempts
        if (attempts >= 1) {
          setShowHint(true);
        }
        
        // Remove shake animation after it completes
        setTimeout(() => setIsShaking(false), 600);
      }
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle error gracefully
      setIsShaking(true);
      setPasskey('');
      setTimeout(() => setIsShaking(false), 600);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black text-white px-4 sm:px-6"
      style={{
        backgroundImage: "url('/assets/gate-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto w-full">
        {/* Logo */}
        <motion.img
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1.25, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          src="/assets/valhalla-logo.png"
          alt="Valhalla Gate"
          className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 animate-pulse"
        />

        {/* Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-wider leading-tight sm:leading-snug"
        >
          PROJEKT<br/>VALHALLA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
        >
          FOR THE UNTAMED, ONLY THE WORTHY REMAIN.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6"
        >
          <div className="relative">
            <motion.input
              animate={isShaking ? {
                x: [-10, 10, -10, 10, -5, 5, 0],
                borderColor: ['#ef4444', '#dc2626', '#ef4444']
              } : {}}
              transition={{ duration: 0.6 }}
              type="text"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              placeholder="Proclaim Thyself Worthy..."
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/50 border-2 border-gray-600 rounded-lg text-white text-center text-base sm:text-lg placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 backdrop-blur-sm"
              autoFocus
              disabled={isVerifying}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: !isVerifying ? 1.05 : 1 }}
            whileTap={{ scale: !isVerifying ? 0.95 : 1 }}
            disabled={isVerifying}
            className="w-full bg-white text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.3)] uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isVerifying ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-black"></div>
                <span>Verifying...</span>
              </div>
            ) : (
              'Enter Valhalla'
            )}
          </motion.button>
        </motion.form>

        {/* Hint */}
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-6 sm:mt-8 p-3 sm:p-4 bg-yellow-900/30 border border-yellow-600 rounded-lg backdrop-blur-sm mx-2 sm:mx-0"
            >
              <p className="text-yellow-200 text-xs sm:text-sm">
                <span className="font-semibold">Hint: </span>
                What truth lies on the lips of the valiant?
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Runes - Full size runes for mobile */}
        <div className="block sm:hidden">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 1.5, duration: 1 },
              y: { delay: 2.5, duration: 15, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-8 left-4 text-4xl text-white/20 font-bold select-none"
          >
            ᚦ 
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 1.7, duration: 1 },
              y: { delay: 2.7, duration: 18, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-16 right-4 text-3xl text-white/20 font-bold select-none"
          >
            ᚦ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 1.9, duration: 1 },
              y: { delay: 2.9, duration: 12, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-20 left-8 text-3xl text-white/20 font-bold select-none"
          >
            ᚱ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 2.1, duration: 1 },
              y: { delay: 3.1, duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-16 right-4 text-4xl text-white/20 font-bold select-none"
          >
            ᚴ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 2.3, duration: 1 },
              y: { delay: 3.3, duration: 16, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-32 left-2 text-3xl text-white/20 font-bold select-none"
          >
            ᚼ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 2.5, duration: 1 },
              y: { delay: 3.5, duration: 14, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-48 right-2 text-4xl text-white/20 font-bold select-none"
          >
            ᚾ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 2.7, duration: 1 },
              y: { delay: 3.7, duration: 22, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-32 left-3 text-3xl text-white/20 font-bold select-none"
          >
            ᛅ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 2.9, duration: 1 },
              y: { delay: 3.9, duration: 17, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-48 right-8 text-3xl text-white/20 font-bold select-none"
          >
            ᛋ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 3.1, duration: 1 },
              y: { delay: 4.1, duration: 19, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-24 right-12 text-4xl text-white/20 font-bold select-none"
          >
            ᛏ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 3.3, duration: 1 },
              y: { delay: 4.3, duration: 13, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-80 left-6 text-3xl text-white/20 font-bold select-none"
          >
            ᛒ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 3.5, duration: 1 },
              y: { delay: 4.5, duration: 21, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-8 right-20 text-4xl text-white/20 font-bold select-none"
          >
            ᛚ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 3.7, duration: 1 },
              y: { delay: 4.7, duration: 11, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-4 left-16 text-5xl text-white/20 font-bold select-none"
          >
            ᛘ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 3.9, duration: 1 },
              y: { delay: 4.9, duration: 23, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-4 left-20 text-3xl text-white/20 font-bold select-none"
          >
            ᛦ
          </motion.div>
        </div>

        {/* Desktop Runes - Full runes for larger screens */}
        <div className="hidden sm:block">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 1.5, duration: 1 },
              y: { delay: 2.5, duration: 15, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-8 left-4 lg:left-12 text-4xl lg:text-6xl text-white/20 font-bold select-none"
          >
            ᚦ 
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 1.7, duration: 1 },
              y: { delay: 2.7, duration: 18, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-16 right-4 lg:right-16 text-3xl lg:text-5xl text-white/20 font-bold select-none"
          >
            ᚦ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 1.9, duration: 1 },
              y: { delay: 2.9, duration: 12, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-20 left-8 lg:left-20 text-3xl lg:text-4xl text-white/20 font-bold select-none"
          >
            ᚱ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 2.1, duration: 1 },
              y: { delay: 3.1, duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-16 right-4 lg:right-12 text-3xl lg:text-5xl text-white/20 font-bold select-none"
          >
            ᚴ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 2.3, duration: 1 },
              y: { delay: 3.3, duration: 16, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-32 left-2 lg:left-4 text-2xl lg:text-3xl text-white/20 font-bold select-none"
          >
            ᚼ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 2.5, duration: 1 },
              y: { delay: 3.5, duration: 14, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-48 right-2 lg:right-4 text-3xl lg:text-4xl text-white/20 font-bold select-none"
          >
            ᚾ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 2.7, duration: 1 },
              y: { delay: 3.7, duration: 22, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-32 left-3 lg:left-8 text-3xl lg:text-5xl text-white/20 font-bold select-none"
          >
            ᛅ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 2.9, duration: 1 },
              y: { delay: 3.9, duration: 17, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-48 right-8 lg:right-24 text-2xl lg:text-3xl text-white/20 font-bold select-none"
          >
            ᛋ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 3.1, duration: 1 },
              y: { delay: 4.1, duration: 19, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-24 right-32 text-4xl text-white/20 font-bold select-none"
          >
            ᛋ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 3.3, duration: 1 },
              y: { delay: 4.3, duration: 13, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-80 left-6 text-3xl text-white/20 font-bold select-none"
          >
            ᛏ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 3.5, duration: 1 },
              y: { delay: 4.5, duration: 21, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-8 right-20 text-4xl text-white/20 font-bold select-none"
          >
            ᛒ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 3.7, duration: 1 },
              y: { delay: 4.7, duration: 11, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-4 left-16 text-5xl text-white/20 font-bold select-none"
          >
            ᛚ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 3.9, duration: 1 },
              y: { delay: 4.9, duration: 23, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-4 left-40 text-3xl text-white/20 font-bold select-none"
          >
            ᛘ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 4.1, duration: 1 },
              y: { delay: 5.1, duration: 24, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-12 left-32 text-4xl text-white/20 font-bold select-none"
          >
            ᛦ
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [0, -2000]
            }}
            transition={{ 
              opacity: { delay: 4.3, duration: 1 },
              y: { delay: 5.3, duration: 10, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-12 right-40 text-3xl text-white/20 font-bold select-none"
          >
            ᛯ
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Gate;