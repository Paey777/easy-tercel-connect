
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Network, TrendingUp, Sparkles, Building, KeyRound, Vote, Briefcase, Coins } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <div className="mb-6 inline-block p-3 bg-emerald-500/20 rounded-xl">
              <Network className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Become a Sourcer</h3>
            <p className="text-lg text-slate-300 mb-6">
              Apply to be a sourcer, find businesses or infrastructure deals, and propose them to the DAO. Earn rewards based on successful acquisitions.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-5 h-5 text-emerald-400" /> Identify promising acquisition targets
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Building className="w-5 h-5 text-emerald-400" /> Present deals to the DAO community
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <KeyRound className="w-5 h-5 text-emerald-400" /> Earn rewards for successful deals
              </li>
            </ul>
            <Button size="lg" className="w-full text-lg px-8 bg-emerald-500 hover:bg-emerald-600">
              Apply as a Sourcer
            </Button>
          </div>
          
          <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <div className="mb-6 inline-block p-3 bg-blue-500/20 rounded-xl">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Join as an Investor</h3>
            <p className="text-lg text-slate-300 mb-6">
              Institutional and individual investors can join the DAO, vote on acquisitions, and benefit from the growth of collectively acquired assets.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-slate-300">
                <Vote className="w-5 h-5 text-blue-400" /> Participate in DAO governance decisions
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Briefcase className="w-5 h-5 text-blue-400" /> Access exclusive private equity opportunities
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Coins className="w-5 h-5 text-blue-400" /> Share in returns from acquired assets
              </li>
            </ul>
            <Button size="lg" variant="outline" className="w-full text-lg px-8 border-blue-400 text-blue-400 hover:bg-blue-950">
              Join as an Investor
            </Button>
          </div>
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Institutional Investors</h2>
            <p className="text-xl text-slate-300">
              Cabble welcomes institutional investors, including blockchain protocols, to join the DAO and participate in private equity acquisitions.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <p className="text-slate-300 mb-8">
              Institutional partners bring large-scale investments and industry expertise, and in turn, benefit from the collective governance and transparency of the DAO.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-slate-700/50 rounded-lg flex items-center justify-center h-24">
                <div className="text-blue-400 text-4xl">🏛️</div>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg flex items-center justify-center h-24">
                <div className="text-emerald-400 text-4xl">⛓️</div>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg flex items-center justify-center h-24">
                <div className="text-blue-400 text-4xl">🏢</div>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg flex items-center justify-center h-24">
                <div className="text-emerald-400 text-4xl">🌐</div>
              </div>
            </div>
            
            <Button size="lg" className="w-full text-lg px-8 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600">
              Learn More About Institutional Partnerships
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
