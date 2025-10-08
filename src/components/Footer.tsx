import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50 mt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-11 h-11 bg-gradient-hero rounded-xl flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="font-bold text-2xl text-foreground tracking-tight">EduNGO</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering teachers and students through quality education, AI training, and computer courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Courses</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Events</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">AI Training</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Computer Courses</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Teacher Training</span>
                </Link>
              </li>
              <li>
                <Link to="/enrollment" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Enrollment</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="leading-relaxed">123 Education Street, Learning City, 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <span>info@edungo.org</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EduNGO. All rights reserved. Empowering education worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
