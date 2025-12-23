import { CheckCircle, Users, Smartphone, Shield, MessageSquare } from 'lucide-react';

const Rules = () => {
  const sections = [
    {
      id: 'general',
      title: 'General Gym Rules & Etiquette',
      icon: CheckCircle,
      rules: [
        'Be on time. Sessions are strictly scheduled. Punctuality builds discipline, commitment, respect, and professionalism.',
        'Be respectful toward coaches and fellow boxers. Everyone has their own journey — honour and support it.',
        'Maintain clean and dignified language at all times. Boxing demands high standards of communication and conduct.',
        'Commitment and dedication are essential. Show up, work hard, push yourself, and support others.',
        'All equipment is supplied except personal protective gear (mouth guards, groin guards). Respect and care for gym equipment. Practice hygienic training by wiping down equipment after use where possible.',
        'Safety first. Dress appropriately, hydrate regularly, take rest intervals, follow coach instructions, and wear suitable footwear. Look after yourself and others.',
        'Report injuries immediately. Follow medical and coaching advice and respect recovery time.',
      ],
    },
    {
      id: 'sparring',
      title: 'Sparring Code of Conduct',
      icon: Users,
      rules: [
        'Sparring is not a fight. It is a controlled environment to develop skill, defence, and strength. Do not enter "fight mode."',
        'Give right of way to pairs who are actively sparring or drilling.',
        'Always ask permission before pad work. Approval from the head coach is required.',
      ],
    },
    {
      id: 'phone',
      title: 'Phone Usage',
      icon: Smartphone,
      rules: [
        'Avoid phone use during training sessions. Phones are a distraction and can be dangerous during focused training.',
      ],
    },
  ];

  return (
    <div className="bg-neutral-900 min-h-screen">
      <section
        className="relative h-[300px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(/contact_us.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-4">
            Gym Rules & <span className="text-red-600">Code of Conduct</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Our rules exist to ensure safety, respect, and growth for all members
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-neutral-300 mb-16 leading-relaxed">
            Eddie's Gym is built on the principles of discipline, integrity, and mutual respect. These rules ensure that every
            member can train safely, effectively, and with the support of a strong community. We expect all members to uphold these
            standards and contribute to maintaining the highest levels of professionalism and conduct.
          </p>

          <div className="space-y-16">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div key={section.id}>
                  <div className="flex items-center gap-4 mb-8">
                    <IconComponent className="h-8 w-8 text-red-600 flex-shrink-0" />
                    <h2 className="text-3xl font-black uppercase text-white">{section.title}</h2>
                  </div>
                  <ul className="space-y-4">
                    {section.rules.map((rule, index) => (
                      <li key={index} className="flex gap-4 text-neutral-300">
                        <span className="text-red-600 font-bold flex-shrink-0 mt-1">•</span>
                        <span className="leading-relaxed text-base">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <div className="border-t border-neutral-800 pt-16">
              <div className="flex items-start gap-4 mb-8">
                <Shield className="h-8 w-8 text-red-600 flex-shrink-0" />
                <h2 className="text-3xl font-black uppercase text-white">
                  Absolute Non-Negotiable Rule
                </h2>
              </div>
              <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-6">
                <p className="text-neutral-200 mb-4 leading-relaxed">
                  No member may use their boxing skills, strength, or physical advantage for any illegal, unethical,
                  or immoral activity outside the gym.
                </p>
                <p className="text-neutral-200 font-semibold leading-relaxed">
                  Any involvement in criminal activity (physical or otherwise) will result in an immediate ban from
                  training at the gym.
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-16">
              <div className="flex items-center gap-4 mb-8">
                <MessageSquare className="h-8 w-8 text-red-600 flex-shrink-0" />
                <h2 className="text-3xl font-black uppercase text-white">
                  The Golden Rule
                </h2>
              </div>
              <div className="bg-black border border-neutral-800 rounded-lg p-8">
                <p className="text-2xl font-black text-red-600 text-center leading-relaxed">
                  Practice common courtesy. Be polite, respectful, and maintain a dignified attitude at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
            Ready to Train with <span className="text-red-600">Discipline & Respect?</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Join us and become part of a community that values excellence, integrity, and mutual support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Rules;
