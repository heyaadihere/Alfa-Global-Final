import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Globe3DPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 700);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 60);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#050a0f' }}
        >
          {/* Subtle particle dots */}
          <div className="absolute inset-0">
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${1 + Math.random() * 2}px`,
                  height: `${1 + Math.random() * 2}px`,
                  background: i % 3 === 0 ? '#22c55e' : '#ffffff',
                  opacity: 0,
                }}
                animate={{ opacity: [0, 0.4 + Math.random() * 0.4, 0] }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Radial gradient glow behind logo */}
          <motion.div
            className="absolute"
            style={{
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 40%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Main content */}
          <div className="relative flex flex-col items-center">
            {/* Outer rotating ring */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 mb-10 flex items-center justify-center">
              {/* Spinning ring 1 */}
              <motion.div
                className="absolute inset-[-16px] rounded-full"
                style={{
                  border: '1px solid rgba(34,197,94,0.15)',
                  borderTopColor: 'rgba(34,197,94,0.5)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
              {/* Spinning ring 2 (reverse) */}
              <motion.div
                className="absolute inset-[-32px] rounded-full"
                style={{
                  border: '1px solid rgba(34,197,94,0.08)',
                  borderBottomColor: 'rgba(34,197,94,0.3)',
                  borderLeftColor: 'rgba(34,197,94,0.2)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              {/* Spinning ring 3 */}
              <motion.div
                className="absolute inset-[-48px] rounded-full"
                style={{
                  border: '1px dashed rgba(34,197,94,0.06)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Logo entrance animation */}
              <motion.div
                className="relative"
                initial={{ scale: 0, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
              >
                {/* Logo glow pulse */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(34,197,94,0.3) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* The actual logo */}
                <motion.img
                  src="/alfa-logo-preloader.png"
                  alt="Alfa Global"
                  className="relative w-44 h-44 md:w-56 md:h-56 object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(34,197,94,0.4))' }}
                  animate={{
                    y: [0, -6, 0],
                    filter: [
                      'drop-shadow(0 0 20px rgba(34,197,94,0.3))',
                      'drop-shadow(0 0 40px rgba(34,197,94,0.6))',
                      'drop-shadow(0 0 20px rgba(34,197,94,0.3))',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>

              {/* Orbiting dots */}
              {[0, 120, 240].map((offset, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i === 0 ? '#22c55e' : i === 1 ? '#4ade80' : '#86efac',
                    boxShadow: `0 0 8px ${i === 0 ? '#22c55e' : '#4ade80'}`,
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    x: [
                      Math.cos((offset * Math.PI) / 180) * 130,
                      Math.cos(((offset + 120) * Math.PI) / 180) * 130,
                      Math.cos(((offset + 240) * Math.PI) / 180) * 130,
                      Math.cos(((offset + 360) * Math.PI) / 180) * 130,
                    ],
                    y: [
                      Math.sin((offset * Math.PI) / 180) * 130,
                      Math.sin(((offset + 120) * Math.PI) / 180) * 130,
                      Math.sin(((offset + 240) * Math.PI) / 180) * 130,
                      Math.sin(((offset + 360) * Math.PI) / 180) * 130,
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
              ))}
            </div>

            {/* Brand text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-3">
                <motion.span
                  className="text-3xl md:text-4xl font-bold tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 40%, #86efac 70%, #22c55e 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  animate={{ backgroundPosition: ['0% center', '200% center'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  ALFA GLOBAL
                </motion.span>
                <span className="block text-lg md:text-xl font-light text-white/50 tracking-[0.4em] mt-1">
                  GROUP
                </span>
              </div>
              <motion.p
                className="text-green-500/60 text-xs tracking-[0.3em] uppercase"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Global Wealth Solutions
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 w-64 md:w-72"
            >
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.min(progress, 100)}%`,
                    background: 'linear-gradient(90deg, #22c55e, #4ade80, #22c55e)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/30 font-light">
                <span>Loading</span>
                <span>{Math.round(Math.min(progress, 100))}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Globe3DPreloader;
