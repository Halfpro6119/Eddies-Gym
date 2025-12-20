import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Target, Users, Trophy, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <section
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(/eddies_gym_homepage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tight">
            Unleash Your <span className="text-red-600">Inner Fighter</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-300">
            Transform your body and mind through the discipline of boxing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-lg px-8 py-6"
            >
              <Link to="/pricing">Start Training</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-bold uppercase text-lg px-8 py-6"
            >
              <Link to="/timetable">View Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
              Why Choose <span className="text-red-600">Eddie's Gym</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              We offer more than just a workout. Join a community dedicated to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black border-neutral-800">
              <CardContent className="pt-6 text-center">
                <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 text-white">Expert Training</h3>
                <p className="text-neutral-400">
                  Learn from certified coaches with years of competitive experience
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-neutral-800">
              <CardContent className="pt-6 text-center">
                <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 text-white">Community</h3>
                <p className="text-neutral-400">
                  Train alongside motivated individuals who share your goals
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-neutral-800">
              <CardContent className="pt-6 text-center">
                <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 text-white">Results</h3>
                <p className="text-neutral-400">
                  Proven methods to build strength, speed, and confidence
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-neutral-800">
              <CardContent className="pt-6 text-center">
                <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 text-white">Flexible Hours</h3>
                <p className="text-neutral-400">
                  Classes from early morning to late evening to fit your schedule
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                Your Journey <span className="text-red-600">Starts Here</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-6">
                Whether you're a complete beginner or an experienced fighter, Eddie's Gym
                provides the perfect environment to achieve your goals. Our state-of-the-art
                facility features professional-grade equipment, spacious training areas, and a
                supportive atmosphere that pushes you to be your best.
              </p>
              <p className="text-lg text-neutral-400 mb-8">
                Join us today and discover the physical and mental benefits of boxing training.
                Build confidence, improve fitness, and learn real self-defense skills.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/eddies_gym_your_journey_starts_here.jpg"
                alt="Boxing training"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Eddie's Gym today and start your journey to becoming stronger, faster, and more confident.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-red-600 font-bold uppercase text-lg px-8 py-6"
          >
            <Link to="/pricing">View Membership Plans</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
