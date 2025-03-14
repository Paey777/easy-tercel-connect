
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Cabble</div>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 md:top-auto flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8 items-start md:items-center bg-slate-900 md:bg-transparent p-6 md:p-0 border-b md:border-b-0 border-slate-800 md:border-slate-800`}>
          <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Why Cabble</a>
          <a href="#how-it-works" className="text-slate-300 hover:text-emerald-400 transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="bg-transparent hover:bg-slate-800 text-emerald-400 flex items-center gap-1 font-medium">
                Sectors <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-800 border-slate-700 text-slate-200">
              <DropdownMenuItem className="hover:bg-slate-700 hover:text-emerald-400 cursor-pointer">
                Business
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-slate-700 hover:text-emerald-400 cursor-pointer">
                Infrastructure
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-slate-700 hover:text-emerald-400 cursor-pointer">
                Real Estate
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-slate-700 hover:text-emerald-400 cursor-pointer">
                Healthcare
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <Button 
          className="md:hidden bg-transparent hover:bg-slate-800 text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
