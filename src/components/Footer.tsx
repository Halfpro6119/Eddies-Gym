import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/eddies_gym_logo.jpg"
                alt="Eddies Gym Logo"
                className="h-16 w-16 object-contain"
                loading="lazy"
              />
              <span className="font-bold text-2xl">EDDIE'S <span className="text-red-600">GYM</span></span>
            </Link>
            <p className="text-neutral-400 text-sm">
              Transform your body and mind through the discipline of boxing.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/timetable" className="text-neutral-400 hover:text-red-600 transition-colors text-sm">
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link to="/coaches" className="text-neutral-400 hover:text-red-600 transition-colors text-sm">
                  Our Coaches
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral-400 hover:text-red-600 transition-colors text-sm">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-red-600 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-400 text-sm">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-red-600" />
                <span>Eddie's Gym<br />82 Isleham Rd, Fordham<br />ELY CB7 5NN</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-400 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-red-600" />
                <span>+44 7956 597466</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/eddiesgym/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/eddiesboxinggym/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-neutral-400 text-xs">
                <strong className="text-white">Hours:</strong><br />
                Monday: 6:00 PM - 7:30 PM<br />
Tuesday: 6:00 PM - 7:30 PM<br />
Wednesday: 6:00 PM - 7:30 PM & 7:30 PM - 9:00 PM<br />
Thursday: 6:00 PM - 7:30 PM<br />
Friday: 5:00 PM - 6:00 PM<br />
Saturday: 4:00 PM - 5:00 PM<br />
Sunday: 10:30 AM - 11:30 AM<br />
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; 2024 Eddie's Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
