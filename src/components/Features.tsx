
import { PiggyBank, Calendar, CreditCard, UserCheck } from "lucide-react";

const features = [
  {
    icon: <PiggyBank className="w-8 h-8" />,
    title: "Flexible Savings Plans",
    description: "Choose between monthly or yearly savings options that suit your needs.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Upfront Annual Interest",
    description: "Receive your interest upfront when you choose our annual savings plan.",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Low-Interest Credit",
    description: "Access affordable credit after one year of consistent savings.",
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Personal Account Manager",
    description: "Get a dedicated manager who handles all your financial needs.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Tercel</h2>
          <p className="text-xl text-gray-600">Simple solutions for your financial growth</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-tercel-neutral hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-gray-900 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
