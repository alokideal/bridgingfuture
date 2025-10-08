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
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Quality education for teachers and students" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-white mb-8 leading-tight">
              Empowering Education Through Technology
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-3xl">
              We provide quality online and offline education, AI training, and computer courses to teachers and students worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/enrollment">
                <Button size="lg" className="w-full sm:w-auto shadow-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Enroll Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold">
                  Support Our Mission
                  <Heart className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-subtle border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3 tracking-tight">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-foreground mb-6">Our Services</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive educational programs designed to empower both teachers and students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services">
              <Button size="lg" className="shadow-lg font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <img
                src={aiTrainingImage}
                alt="AI training workshop with teachers learning new technology"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="animate-fade-in order-1 lg:order-2">
              <h2 className="text-foreground mb-8">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
                We are committed to bridging the digital divide by providing accessible, high-quality education and training to underserved communities. Our programs combine traditional teaching methods with modern technology to create an inclusive learning environment.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-background/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Quality Education</h3>
                    <p className="text-muted-foreground leading-relaxed">Delivering excellence in every course and program</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-background/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Community Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">Creating lasting change in communities worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-background/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Certified Programs</h3>
                    <p className="text-muted-foreground leading-relaxed">Industry-recognized certifications and training</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="inline-block mt-10">
                <Button size="lg" className="shadow-lg font-semibold">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-foreground mb-6">Latest News</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">Stay updated with our recent activities and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {recentNews.map((news, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in border-border/50 hover:border-primary/20 group">
                <div className="overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="text-sm text-primary font-semibold mb-3">{news.date}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{news.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{news.description}</p>
                  <Link to="/news" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center group/link">
                    Read More
                    <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/news">
              <Button variant="outline" size="lg" className="font-semibold">View All News</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-warm text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="w-20 h-20 bg-secondary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <Calendar className="w-10 h-10" />
            </div>
            <h2 className="mb-8 text-white">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/95 leading-relaxed max-w-3xl mx-auto">
              Join thousands of students and teachers who have transformed their lives through our programs
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/enrollment">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-xl font-semibold px-8">
                  Enroll Today
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-secondary-foreground/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold px-8">
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
