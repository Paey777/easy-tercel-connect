
import { motion } from "framer-motion";
import { Network, Vote, Briefcase, Coins } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sourcers Find Deals",
    description: "Sourcers identify and propose potential acquisitions, including businesses and infrastructure, that align with the DAO's objectives.",
    icon: <Network className="w-8 h-8 text-emerald-400" />,
  },
  {
    number: "02",
    title: "DAO Votes on Deals",
    description: "The Cabble DAO, consisting of individual and institutional investors, collectively votes on whether to approve proposed acquisitions.",
    icon: <Vote className="w-8 h-8 text-blue-400" />,
  },
  {
    number: "03",
    title: "Collective Ownership",
    description: "Once approved, the DAO acquires the business/infrastructure, with ongoing management governed by DAO members.",
    icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
  },
  {
    number: "04",
    title: "Profit Distribution",
    description: "Returns from acquired assets are distributed among the DAO members based on their participation and contributions.",
    icon: <Coins className="w-8 h-8 text-blue-400" />,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">How Cabble Works</h2>
          <p className="text-xl text-slate-300">Decentralized private equity in action</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-6 rounded-lg bg-slate-800/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300 border border-slate-700 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      {step.icon}
                    </div>
                    <div className="text-3xl font-bold text-slate-700">{step.number}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-emerald-500/30"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
          <h3 className="text-2xl font-semibold mb-4 text-white">What is Cabble?</h3>
          <p className="text-slate-300 mb-6">
            Cabble is a fully decentralized private equity DAO that empowers sourcers and investors to collectively acquire and manage real-world businesses and infrastructure. We're not tokenizing assets—we're leveraging blockchain's decentralization, transparency, and automation to transform traditional private equity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
