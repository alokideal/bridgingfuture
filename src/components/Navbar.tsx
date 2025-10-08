import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/bridging-future-logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Events", path: "/events" },
    { name: "News", path: "/news" },
    { name: "Stories", path: "/stories" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/50 shadow-soft transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Bridging Future Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110 animate-float" />
            <span className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">Bridging Future</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/enrollment">
              <Button variant="ghost" size="default" className="font-medium">
                Enroll Now
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="default" className="bg-primary hover:bg-primary/90 shadow-md font-medium">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2.5 rounded-lg text-foreground hover:bg-muted/60 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in border-t border-border/50 mt-2 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted/60"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <Link to="/enrollment" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="lg" className="w-full font-medium">
                    Enroll Now
                  </Button>
                </Link>
                <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 font-medium">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
