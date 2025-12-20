import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const Timetable = () => {
  const schedule = [
    {
      day: 'Monday',
      classes: [
        { time: '6:00 PM - 7:30 PM', name: 'Amateur Boxing', coach: 'Eddie Guest', level: 'Amateur' },
      ],
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '6:00 PM - 7:30 PM', name: 'Beginner Class (White Collar)', coach: 'Eddie Guest', level: 'Beginner' 'All Levels' },
      ],
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '6:00 PM - 7:30 PM', name: 'Womans Session', coach: 'Tom', level: 'All Levels' },
        { time: '7:30 PM - 9:00 PM', name: 'Amateur Boxing', coach: 'Eddie Guest', level: 'Amateur' },
      ],
    },
    {
      day: 'Thursday',
      classes: [
        { time: '6:00 PM - 7:30 PM', name: 'Beginner Class (White Collar)', coach: 'Eddie Guest', level: 'Beginner, All Levels Welcome' },
      ],
    },
    {
      day: 'Friday',
      classes: [
        { time: '5:00 PM - 6:00 PM', name: 'Fitness', coach: 'Dobbo', level: 'All Levels' },
      ],
    },
    {
      day: 'Saturday',
      classes: [
        { time: '4:00 PM - 5:00 PM', name: 'Kids Session', coach: 'Eddie Guest', level: 'Youth' },
      ],
    },
    {
      day: 'Sunday',
      classes: [
        { time: '10:30 AM - 11:30 AM', name: 'Kids Session', coach: 'Eddie Guest', level: 'Youth' },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-600';
      case 'Amateur':
        return 'bg-yellow-600';
      case 'Youth':
        return 'bg-blue-600';
      default:
        return 'bg-neutral-600';
    }
  };

  return (
    <div className="bg-neutral-900 min-h-screen">
      <section
        className="relative h-[300px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(/class_timetable.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-4">
            Class <span className="text-red-600">Timetable</span>
          </h1>
          <p className="text-xl text-neutral-300">Find your perfect training time</p>
        </div>
      </section>

      <section className="py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-green-600" />
              <span className="text-sm">Beginner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-yellow-600" />
              <span className="text-sm">Amateur</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-neutral-600" />
              <span className="text-sm">All Levels</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-blue-600" />
              <span className="text-sm">Youth</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {schedule.map((day) => (
              <Card key={day.day} className="bg-black border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-black uppercase text-white">
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {day.classes.length === 0 ? (
                    <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800 text-center">
                      <p className="text-neutral-400">No sessions scheduled</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {day.classes.map((classItem, index) => (
                        <div
                          key={index}
                          className="p-4 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-red-600 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-red-600" />
                              <span className="font-bold text-white">{classItem.time}</span>
                            </div>
                            <span
                              className={`text-xs px-2 py-1 rounded text-white ${getLevelColor(
                                classItem.level
                              )}`}
                            >
                              {classItem.level}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-1">{classItem.name}</h4>
                          <p className="text-sm text-neutral-400">Coach: {classItem.coach}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timetable;
