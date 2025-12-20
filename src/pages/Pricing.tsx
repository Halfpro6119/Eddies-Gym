import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'First Session',
      price: 'FREE',
      period: 'one time',
      description: 'Perfect for trying us out',
      features: [
        'Access to any class',
        'Equipment provided',
        'Meet the coaches',
        'No commitment required',
      ],
      popular: false,
    },
    {
      name: 'Pay Per Class',
      price: '5',
      period: 'per class',
      description: 'Flexible training option',
      features: [
        'Access to any class',
        'Equipment provided',
        'No membership required',
        'Pay as you go',
      ],
      popular: false,
    },
    {
      name: 'Monthly',
      price: '25',
      period: 'per month',
      description: 'Our most popular choice',
      features: [
        'Unlimited classes',
        'Equipment provided',
        'Member events',
        'Best value',
        'Cancel anytime',
      ],
      popular: true,
    },
    {
      name: 'Personal Training',
      price: '30',
      period: 'per session',
      description: 'One-on-one coaching',
      features: [
        '60-minute sessions',
        'Customized program',
        'Technique refinement',
        'Progress tracking',
        'Flexible scheduling',
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-neutral-900 min-h-screen">
      <section
        className="relative h-[300px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(/membership.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-4">
            Membership <span className="text-red-600">Plans</span>
          </h1>
          <p className="text-xl text-neutral-300">Choose the plan that fits your goals</p>
        </div>
      </section>

      <section className="py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`bg-black border-2 relative ${
                  plan.popular
                    ? 'border-red-600 scale-105 lg:scale-110 z-10'
                    : 'border-neutral-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-center">
                    <h3 className="text-2xl font-black uppercase mb-2 text-white">
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span className="text-4xl font-black text-red-600">{plan.price === 'FREE' ? plan.price : `£${plan.price}`}</span>
                      <span className="text-neutral-400 text-sm ml-2">{plan.period}</span>
                    </div>
                    <p className="text-sm text-neutral-400 font-normal">{plan.description}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-neutral-300">
                        <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full text-white font-bold uppercase ${
                      plan.popular
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-neutral-800 hover:bg-neutral-700'
                    }`}
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
              What's <span className="text-red-600">Included</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              All memberships include access to our world-class facility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">Professional Equipment</h3>
              <p className="text-neutral-400">
                Heavy bags, speed bags, double-end bags, and professional boxing ring
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">Expert Instruction</h3>
              <p className="text-neutral-400">
                Certified coaches with professional fighting and training experience
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">Quality Training</h3>
              <p className="text-neutral-400">
                Comfortable training environment with experienced coaching staff
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
            Questions About Pricing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss which membership option is right for you
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-red-600 font-bold uppercase"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
