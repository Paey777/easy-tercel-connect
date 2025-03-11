
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Cabble</h3>
            <p className="text-slate-400">The future of private equity: decentralized, collective, onchain.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-400 hover:text-emerald-400">Why Cabble</a></li>
              <li><a href="#how-it-works" className="text-slate-400 hover:text-emerald-400">How It Works</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-slate-400">Email: contact@cabble.xyz</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Cabble DAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
