
const steps = [
  {
    number: "01",
    title: "Connect with an Agent",
    description: "Speak with our friendly agent who will guide you through the process.",
  },
  {
    number: "02",
    title: "Choose Your Plan",
    description: "Select a savings plan that matches your financial goals.",
  },
  {
    number: "03",
    title: "Start Saving",
    description: "Begin your journey to financial growth with regular savings.",
  },
  {
    number: "04",
    title: "Access Benefits",
    description: "Enjoy upfront interest and access to low-interest credit after one year.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-tercel-green/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to get started</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-6 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl font-bold text-gray-200 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
