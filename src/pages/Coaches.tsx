import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Star } from 'lucide-react';

const Coaches = () => {
  const coaches = [
    {
      name: 'Eddie Guest',
      role: 'Head Coach',
      specialty: 'Professional Boxing',
      experience: '20+ years',
      achievements: ['Certified Boxing Trainer', 'Professional Boxing Experience', 'Youth & Adult Training'],
      image: '/eddies_photo.jpg',
    },
    {
      name: 'Tom',
      role: 'Technical Coach',
      specialty: 'Technique & Footwork',
      experience: '10+ years',
      achievements: ['Technical Boxing Specialist','Precision Training Expert', 'Women', 's Session Coach'],
      image: '/toms_photo.jpeg',
    },
    {
      name: 'Dobbo',
      role: 'Fitness Coach',
      specialty: 'Conditioning & Fitness',
      experience: '10+ years',
      achievements: ['Fitness & Conditioning Specialist', 'Boxing Fitness Expert', 'All Levels Training'],
      image: '/dobbos_photo.jpg',
    },
  ];

  return (
    <div className="bg-neutral-900 min-h-screen">
      <section
        className="relative h-[300px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(/coaches.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-4">
            Our <span className="text-red-600">Coaches</span>
          </h1>
          <p className="text-xl text-neutral-300">Learn from the best in the business</p>
        </div>
      </section>

      <section className="py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              Our coaching team brings decades of combined experience from professional competition and elite fitness conditioning. Each coach is dedicated to helping you
              reach your personal best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <Card key={coach.name} className="bg-black border-neutral-800 overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black uppercase mb-1 text-white">
                      {coach.name}
                    </h3>
                    <p className="text-red-600 font-bold uppercase text-sm">{coach.role}</p>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-bold text-white">Specialty</span>
                    </div>
                    <p className="text-neutral-400 text-sm">{coach.specialty}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-bold text-white">Experience</span>
                    </div>
                    <p className="text-neutral-400 text-sm">{coach.experience}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold mb-2 text-white">Achievements</h4>
                    <ul className="space-y-1">
                      {coach.achievements.map((achievement, index) => (
                        <li key={index} className="text-xs text-neutral-400 flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
            Train Like <span className="text-red-600">Champions</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
            Whether you're looking to compete or simply improve your fitness, our coaches will
            guide you every step of the way with personalized attention and expert instruction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Coaches;
