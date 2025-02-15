
import { PiggyBank, Calendar, CreditCard, UserCheck } from "lucide-react";

const features = [
  {
    icon: <PiggyBank className="w-8 h-8 text-purple-600" />,
    title: "Better Interest Rates",
    description: "Enjoy industry-leading interest rates on your savings with flexible plans.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-blue-500" />,
    title: "Upfront Annual Interest",
    description: "Get your interest paid upfront when you choose our annual savings plan.",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-purple-600" />,
    title: "Instant Withdrawals",
    description: "Access your funds instantly when you close your account - no waiting period.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-blue-500" />,
    title: "Personal Account Manager",
    description: "Get a dedicated manager who handles all your financial needs.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Why Choose Cabble</h2>
          <p className="text-xl text-gray-600">Revolutionary solutions for your financial growth</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-white to-purple-50 hover:shadow-lg transition-all duration-300 border border-purple-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
