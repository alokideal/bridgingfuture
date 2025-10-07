import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Laptop, 
  Award, 
  Calendar,
  ArrowRight,
  GraduationCap,
  Target,
  Heart
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import aiTrainingImage from "@/assets/ai-training.jpg";
import onlineTrainingImage from "@/assets/online-training.jpg";

const Home = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Teacher Training",
      description: "Professional development programs for educators to enhance teaching skills.",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Computer Courses",
      description: "Comprehensive computer literacy and advanced technology courses.",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "AI Training",
      description: "Cutting-edge artificial intelligence courses for modern education.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Programs",
      description: "Engaging educational programs designed for student success.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Students Trained" },
    { number: "500+", label: "Teachers Certified" },
    { number: "50+", label: "Courses Offered" },
    { number: "15+", label: "Years Experience" },
  ];

  const recentNews = [
    {
      title: "New AI Course Launch",
      date: "March 15, 2024",
      description: "Introducing our latest AI fundamentals course for beginners.",
      image: aiTrainingImage,
    },
    {
      title: "Teacher Training Success",
      date: "March 10, 2024",
      description: "Over 200 teachers completed our professional development program.",
      image: onlineTrainingImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="Education" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Education Through Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              We provide quality online and offline education, AI training, and computer courses to teachers and students worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/enrollment">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Enroll Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Support Our Mission
                  <Heart className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive educational programs designed to empower both teachers and students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="hero" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={aiTrainingImage}
                alt="AI Training"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                We are committed to bridging the digital divide by providing accessible, high-quality education and training to underserved communities. Our programs combine traditional teaching methods with modern technology to create an inclusive learning environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quality Education</h3>
                    <p className="text-muted-foreground">Delivering excellence in every course and program</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Community Impact</h3>
                    <p className="text-muted-foreground">Creating lasting change in communities worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Certified Programs</h3>
                    <p className="text-muted-foreground">Industry-recognized certifications and training</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="inline-block mt-6">
                <Button variant="hero">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest News</h2>
            <p className="text-muted-foreground text-lg">Stay updated with our recent activities and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {recentNews.map((news, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{news.date}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{news.title}</h3>
                  <p className="text-muted-foreground mb-4">{news.description}</p>
                  <Link to="/news" className="text-primary hover:underline inline-flex items-center">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/news">
              <Button variant="outline">View All News</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Calendar className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of students and teachers who have transformed their lives through our programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enrollment">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-secondary-foreground/10 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  Enroll Today
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-secondary-foreground/10 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  Make a Donation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
