
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with a personal account manager today and take the first step towards your financial goals.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Speak to an Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
