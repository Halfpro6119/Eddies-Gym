import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/timetable', label: 'Timetable' },
    { path: '/coaches', label: 'Coaches' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/eddies_gym_logo.jpg"
              alt="Eddies Gym Logo"
              className="h-16 w-16 object-contain"
            />
            <span className="font-bold text-2xl">EDDIE'S <span className="text-red-600">GYM</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold uppercase text-sm tracking-wider transition-colors hover:text-red-600 ${
                  isActive(link.path) ? 'text-red-600' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-red-600 hover:bg-red-700 font-bold uppercase text-white">
              <Link to="/contact">Join Now</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 font-semibold uppercase text-sm tracking-wider transition-colors hover:text-red-600 ${
                  isActive(link.path) ? 'text-red-600' : 'text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-red-600 hover:bg-red-700 font-bold uppercase text-white w-full mt-4">
              <Link to="/contact">Join Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
