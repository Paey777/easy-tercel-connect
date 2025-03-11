
import { GitBranch, Vote, Wallet, KeyRound, Users, Briefcase, ShieldCheck, NetworkIcon } from "lucide-react";

const features = [
  {
    icon: <GitBranch className="w-8 h-8 text-emerald-400" />,
    title: "Decentralized Governance",
    description: "Every major decision is made through transparent voting, ensuring collective control rather than centralized decision-making.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    title: "Open to All Investors",
    description: "Both individual investors and institutional investors, including blockchain protocols, can participate in the DAO.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
    title: "Community-Driven Deal Sourcing",
    description: "With a network of sourcers actively finding and proposing deals, Cabble gives power to its members to determine which businesses to acquire.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    title: "Transparency & Automation",
    description: "Leveraging blockchain technology, all proposals, voting outcomes, and financials are transparent and recorded onchain.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Why Cabble?</h2>
          <p className="text-xl text-slate-300">Transforming private equity through decentralization</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 border border-slate-700 group hover:-translate-y-1"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
