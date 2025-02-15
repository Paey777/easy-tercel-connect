
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Cabble</div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How It Works</a>
          <Button variant="outline" className="ml-4 border-purple-600 text-purple-600 hover:bg-purple-50">
            Speak to an Agent
          </Button>
        </nav>
        <Button className="md:hidden bg-purple-600 hover:bg-purple-700">Menu</Button>
      </div>
    </header>
  );
};

export default Header;
