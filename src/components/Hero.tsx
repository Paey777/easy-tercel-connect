
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Network, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
          >
            The Future of Private Equity: Decentralized, Collective, Onchain.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-8"
          >
            Join the Cabble DAO to source, invest, and govern the acquisition of real-world businesses and infrastructure.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 bg-emerald-500 hover:bg-emerald-600 flex items-center gap-2">
              <Network size={20} />
              Become a Sourcer
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-blue-400 text-blue-400 hover:bg-blue-950 flex items-center gap-2">
              <TrendingUp size={20} />
              Join as an Investor
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="relative h-[300px] md:h-[400px] bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full opacity-40">
                <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
                  <g>
                    {[...Array(15)].map((_, i) => (
                      <circle key={i} cx={Math.random() * 800} cy={Math.random() * 500} r={Math.random() * 5 + 2} fill="#4ade80" />
                    ))}
                    {[...Array(20)].map((_, i) => (
                      <path 
                        key={`path-${i}`}
                        d={`M${Math.random() * 800},${Math.random() * 500} C${Math.random() * 800},${Math.random() * 500} ${Math.random() * 800},${Math.random() * 500} ${Math.random() * 800},${Math.random() * 500}`}
                        stroke="#60a5fa"
                        strokeWidth="1"
                        fill="none"
                      />
                    ))}
                  </g>
                </svg>
              </div>
              <div className="absolute flex flex-wrap justify-center items-center gap-8 p-8">
                <div className="bg-slate-700/70 backdrop-blur-md p-4 rounded-lg border border-slate-600 shadow-xl">
                  <div className="h-16 w-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-2xl">🏢</span>
                  </div>
                  <p className="mt-2 text-xs text-center">Business</p>
                </div>
                <div className="bg-slate-700/70 backdrop-blur-md p-4 rounded-lg border border-slate-600 shadow-xl">
                  <div className="h-16 w-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 text-2xl">🏗️</span>
                  </div>
                  <p className="mt-2 text-xs text-center">Infrastructure</p>
                </div>
                <div className="bg-slate-700/70 backdrop-blur-md p-4 rounded-lg border border-slate-600 shadow-xl">
                  <div className="h-16 w-16 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <span className="text-indigo-400 text-2xl">🔗</span>
                  </div>
                  <p className="mt-2 text-xs text-center">Blockchain</p>
                </div>
                <div className="bg-slate-700/70 backdrop-blur-md p-4 rounded-lg border border-slate-600 shadow-xl">
                  <div className="h-16 w-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-400 text-2xl">🗳️</span>
                  </div>
                  <p className="mt-2 text-xs text-center">Governance</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
