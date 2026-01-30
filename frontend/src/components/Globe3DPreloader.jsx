import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Globe3DPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const globeRef = useRef(null);

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
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a15 100%)'
          }}
        >
          {/* Stars Background */}
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* 3D Globe */}
          <div className="relative flex flex-col items-center">
            <div ref={globeRef} className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
              {/* Globe Outer Glow */}
              <div className="absolute inset-[-20px] rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl animate-pulse" />
              
              {/* Main 3D Globe */}
              <motion.div
                className="relative w-full h-full"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="w-full h-full rounded-full relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    background: `
                      radial-gradient(circle at 30% 30%, rgba(100, 200, 255, 0.4) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(50, 100, 200, 0.3) 0%, transparent 50%),
                      linear-gradient(135deg, #1e3a5f 0%, #0d1f3c 50%, #0a1628 100%)
                    `,
                    boxShadow: `
                      inset -30px -30px 60px rgba(0,0,0,0.5),
                      inset 30px 30px 60px rgba(100,200,255,0.1),
                      0 0 80px rgba(0,150,255,0.3),
                      0 0 120px rgba(0,100,200,0.2)
                    `
                  }}
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  {/* Continents Layer */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" style={{ transform: 'rotateX(15deg)' }}>
                    {/* Grid Lines - Latitude */}
                    {[30, 50, 70, 100, 130, 150, 170].map((y, i) => (
                      <ellipse
                        key={`lat-${i}`}
                        cx="100"
                        cy={y}
                        rx={Math.sqrt(Math.max(0, 10000 - Math.pow(y - 100, 2)))}
                        ry={5}
                        fill="none"
                        stroke="rgba(0,200,255,0.15)"
                        strokeWidth="0.5"
                      />
                    ))}
                    
                    {/* Grid Lines - Longitude */}
                    {[0, 30, 60, 90, 120, 150].map((angle, i) => (
                      <ellipse
                        key={`long-${i}`}
                        cx="100"
                        cy="100"
                        rx={8}
                        ry={95}
                        fill="none"
                        stroke="rgba(0,200,255,0.15)"
                        strokeWidth="0.5"
                        transform={`rotate(${angle} 100 100)`}
                      />
                    ))}

                    {/* Continent Shapes - Stylized */}
                    <motion.path
                      d="M60,45 Q75,40 85,50 Q95,55 90,65 Q85,75 70,70 Q55,65 60,45"
                      fill="rgba(34,197,94,0.6)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.path
                      d="M110,55 Q130,50 140,60 Q150,75 145,90 Q135,100 120,95 Q105,85 110,55"
                      fill="rgba(34,197,94,0.5)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.5, 0.9, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.path
                      d="M55,100 Q70,95 80,105 Q85,120 75,130 Q60,135 50,120 Q45,105 55,100"
                      fill="rgba(34,197,94,0.55)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.45, 0.85, 0.45] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />

                    {/* City Points with Pulse */}
                    {[
                      { x: 72, y: 65, name: 'Mumbai', delay: 0 },
                      { x: 78, y: 58, name: 'Delhi', delay: 0.3 },
                      { x: 125, y: 75, name: 'Singapore', delay: 0.6 },
                      { x: 95, y: 68, name: 'Dubai', delay: 0.9 },
                      { x: 55, y: 52, name: 'London', delay: 1.2 },
                      { x: 145, y: 60, name: 'Tokyo', delay: 1.5 },
                    ].map((city, i) => (
                      <g key={i}>
                        <motion.circle
                          cx={city.x}
                          cy={city.y}
                          r="8"
                          fill="rgba(251,191,36,0.3)"
                          initial={{ scale: 0 }}
                          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: city.delay }}
                        />
                        <motion.circle
                          cx={city.x}
                          cy={city.y}
                          r="3"
                          fill="#fbbf24"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + city.delay }}
                        />
                      </g>
                    ))}

                    {/* Connection Lines */}
                    <motion.path
                      d="M72,65 Q90,45 125,75"
                      fill="none"
                      stroke="rgba(251,191,36,0.4)"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.path
                      d="M78,58 Q65,50 55,52"
                      fill="none"
                      stroke="rgba(251,191,36,0.4)"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                  </svg>

                  {/* Globe Highlight */}
                  <div className="absolute top-6 left-10 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-xl" />
                  <div className="absolute top-10 left-14 w-10 h-10 bg-white/20 rounded-full blur-lg" />
                </motion.div>

                {/* Orbiting Ring */}
                <motion.div
                  className="absolute inset-[-30px] rounded-full border border-cyan-400/30"
                  style={{ 
                    borderStyle: 'dashed',
                    transform: 'rotateX(75deg)'
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />

                {/* Orbiting Satellite */}
                <motion.div
                  className="absolute w-4 h-4"
                  style={{ top: '50%', left: '50%' }}
                  animate={{
                    x: [0, 160, 0, -160, 0],
                    y: [-20, 0, 20, 0, -20],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-lg shadow-amber-500/50">
                    <div className="absolute inset-0 bg-amber-400 rounded-full animate-ping opacity-75" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                  ALFA GLOBAL
                </span>
                <span className="block text-lg md:text-xl font-light text-white/60 tracking-widest mt-1">
                  GROUP
                </span>
              </div>
              <p className="text-cyan-400/80 text-sm tracking-[0.3em] uppercase">
                Global Wealth Solutions
              </p>
            </motion.div>

            {/* Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 w-72"
            >
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/40">
                <span>Loading Experience</span>
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
