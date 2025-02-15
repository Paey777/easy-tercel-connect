
const Footer = () => {
  return (
    <footer className="bg-tercel-neutral py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tercel</h3>
            <p className="text-gray-600">Simple savings and credit solutions for everyone.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Phone: (234) XXX-XXXX</li>
              <li className="text-gray-600">Email: contact@tercel.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Office</h4>
            <p className="text-gray-600">
              Lagos, Nigeria<br />
              Business Hours: 9am - 5pm
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Tercel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
