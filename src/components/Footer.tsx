import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="font-bold text-xl text-foreground">EduNGO</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering teachers and students through quality education, AI training, and computer courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  AI Training
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Computer Courses
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Teacher Training
                </Link>
              </li>
              <li>
                <Link to="/enrollment" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Enrollment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>123 Education Street, Learning City, 12345</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail size={16} />
                <span>info@edungo.org</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} EduNGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
