import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
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
            Contact <span className="text-red-600">Us</span>
          </h1>
          <p className="text-xl text-neutral-300">Get in touch to start your journey</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-black border-neutral-800 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-black uppercase">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your fitness goals..."
                        rows={6}
                        className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 font-bold uppercase"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-black border-neutral-800 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-black uppercase">Visit Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold uppercase mb-1">Address</h3>
                      <p className="text-neutral-400">
                        Eddies Gym<br />
                        82 Isleham Rd, Fordham<br />
                        ELY CB7 5NN
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold uppercase mb-1">Phone</h3>
                      <p className="text-neutral-400">+44 7956 597466</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold uppercase mb-1">Hours</h3>
                      <p className="text-neutral-400">
                        Monday: 6:00 PM - 7:30 PM<br />
                        Tuesday: 6:00 PM - 7:30 PM<br />
                        Wednesday: 6:00 PM - 7:30 PM & 7:30 PM - 9:00 PM<br />
                        Thursday: 6:00 PM - 7:30 PM<br />
                        Friday: 5:00 PM - 6:00 PM<br />
                        Saturday: 4:00 PM - 5:00 PM<br />
                        Sunday: 10:30 AM - 11:30 AM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black border-neutral-800 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-black uppercase">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden border border-neutral-800">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.5160872649603!2d0.40074787666929546!3d52.32478297201058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d840310adacc25%3A0x9a9e37bda1bc97b4!2s82%20Isleham%20Rd%2C%20Fordham%2C%20ELY%20CB7%205NN!5e0!3m2!1sen!2suk!4v1766261751779!5m2!1sen!2suk"
                      width="100%"
                      height="300"
                      style={{border: 0}}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
            Ready to Get <span className="text-red-600">Started?</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Stop by for a tour of our facility or contact us to schedule your first class.
            We look forward to helping you achieve your goals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
