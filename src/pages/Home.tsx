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
  Heart,
  Lightbulb,
  TrendingUp,
  Globe,
  Sparkles,
  MapPin,
  Shield,
  Zap,
  Rocket,
  Star,
  CheckCircle2
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import studentsClassroom from "@/assets/students-classroom-india.jpg";
import teacherComputer from "@/assets/teacher-computer-training.jpg";
import teacherWorkshop from "@/assets/teacher-workshop.jpg";
import aiLearning from "@/assets/ai-learning-session.jpg";
import outdoorLearning from "@/assets/outdoor-learning.jpg";
import ruralClassroom from "@/assets/rural-classroom.jpg";
import teacherTraining from "@/assets/teacher-training-rural.jpg";
import studentsTech from "@/assets/students-technology.jpg";

const Home = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Teacher Training",
      description: "Professional development programs for educators to enhance teaching skills and methodologies.",
      color: "from-primary via-primary/80 to-primary/60",
      image: teacherWorkshop
    },
    {
      icon: <Laptop className="w-8 h-8 text-white" />,
      title: "Computer Courses",
      description: "Comprehensive computer literacy and advanced technology courses for digital empowerment.",
      color: "from-accent via-accent/80 to-accent/60",
      image: teacherComputer
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "AI Training",
      description: "Cutting-edge artificial intelligence courses preparing students for the future of technology.",
      color: "from-secondary via-secondary/80 to-secondary/60",
      image: aiLearning
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Student Programs",
      description: "Engaging educational programs designed to unlock every student's potential.",
      color: "from-primary via-accent to-secondary",
      image: studentsClassroom
    },
  ];

  const visionGoals = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Our Vision",
      description: "To create an empowered India where every teacher and student in rural areas has access to quality education and technology, breaking the cycle of educational inequality and fostering sustainable development.",
      color: "bg-primary/10",
      highlights: ["Quality Education Access", "Break Inequality Cycle", "Rural Empowerment"]
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Innovation in Education",
      description: "Integrate cutting-edge AI and technology training into traditional teaching methods to prepare rural communities for the digital future, bridging the gap between urban and rural education quality.",
      color: "bg-accent/10",
      highlights: ["AI Integration", "Modern Methods", "Digital Literacy"]
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Sustainable Growth",
      description: "Build self-sustaining educational ecosystems in rural areas by training local teachers who become community leaders and mentors, creating a ripple effect of positive change.",
      color: "bg-secondary/10",
      highlights: ["Community Leadership", "Teacher Empowerment", "Sustainable Model"]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Nationwide Impact",
      description: "Expand our reach to 10,000+ villages across India, impacting over 1 million students and 50,000 teachers by 2030, with a focus on the most underserved regions.",
      color: "bg-success/10",
      highlights: ["10,000+ Villages", "1M Students", "50K Teachers by 2030"]
    },
  ];

  const impactAreas = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Rural Reach",
      stat: "500+",
      label: "Villages Connected",
      description: "Bringing quality education to India's most remote areas"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Certified Programs",
      stat: "95%",
      label: "Success Rate",
      description: "Nationally recognized certifications with proven outcomes"
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "Digital Transformation",
      stat: "20,000+",
      label: "Lives Transformed",
      description: "Students and teachers equipped with digital skills"
    },
    {
      icon: <Heart className="w-8 h-8 text-success" />,
      title: "Community Impact",
      stat: "100+",
      label: "Partner Organizations",
      description: "Collaborative approach to educational development"
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
      title: "Rural Transformation: 500+ Villages Connected",
      date: "March 15, 2024",
      description: "Our AI and digital literacy programs have reached over 500 rural villages, empowering 15,000 students with future-ready skills.",
      image: studentsTech,
    },
    {
      title: "Teacher Training Milestone Achieved",
      date: "March 10, 2024",
      description: "Successfully certified 2,000 rural teachers in modern teaching methodologies and technology integration.",
      image: teacherTraining,
    },
    {
      title: "Community Learning Centers Launched",
      date: "March 5, 2024",
      description: "Inaugurated 50 new community learning centers bringing quality education to remote areas of rural India.",
      image: ruralClassroom,
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
              Empowering Rural India Through Education
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-3xl">
              Bridging Future brings world-class education, AI training, and technology courses to rural teachers and students across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/enrollment">
                <Button size="lg" className="w-full sm:w-auto shadow-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold group">
                  Enroll Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold group">
                  Support Our Mission
                  <Heart className="ml-2 group-hover:scale-110 transition-transform" size={20} />
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
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">Our Services</span>
            </div>
            <h2 className="text-foreground mb-6">Transforming Education Through Innovation</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive educational programs designed to empower both teachers and students in rural India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 animate-scale-up border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden relative" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-70 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white to-white/90 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-float">
                    <div className="animate-pulse-glow">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services">
              <Button size="lg" className="shadow-lg font-semibold group">
                View All Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-24 md:py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">Our Impact</span>
            </div>
            <h2 className="text-foreground mb-6">Creating Lasting Change</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Measurable outcomes that demonstrate our commitment to transforming rural education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 animate-scale-up border-border/50 hover:border-primary/20 overflow-hidden text-center bg-gradient-to-br from-card to-background" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg border-2 border-primary/20">
                    <div className="animate-float">
                      {area.icon}
                    </div>
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">{area.stat}</div>
                  <div className="text-lg font-bold text-foreground mb-2 flex items-center gap-2 justify-center">
                    <Star className="w-4 h-4 text-primary fill-primary animate-pulse-glow" />
                    {area.label}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="animate-fade-in order-2 lg:order-1">
              <div className="relative">
                <img
                  src={outdoorLearning}
                  alt="Rural Indian classroom with engaged students and dedicated teacher"
                  className="rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10 animate-float"></div>
              </div>
            </div>
            <div className="animate-fade-in order-1 lg:order-2">
              <div className="inline-block mb-4">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">Our Mission</span>
              </div>
              <h2 className="text-foreground mb-8">
                Transforming Rural India Through Education
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
                Bridging Future is committed to eliminating educational inequality in rural India. We bring world-class digital literacy, AI training, and modern teaching methods to underserved communities, empowering teachers and students to build a brighter tomorrow.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-muted/30 transition-all duration-300 group border border-border/30 hover:border-primary/40 hover:shadow-xl bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-xl">
                    <Sparkles className="w-8 h-8 text-primary-foreground animate-pulse-glow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary animate-pulse-glow" />
                      Quality Education for All
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">Delivering world-class education to every corner of rural India, ensuring no child is left behind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-muted/30 transition-all duration-300 group border border-border/30 hover:border-accent/40 hover:shadow-xl bg-gradient-to-br from-accent/5 to-transparent">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent via-accent/80 to-accent/60 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-xl">
                    <Users className="w-8 h-8 text-accent-foreground animate-float" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent animate-pulse-glow" />
                      Community-Driven Impact
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">Building sustainable learning ecosystems by training local teachers as community champions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-muted/30 transition-all duration-300 group border border-border/30 hover:border-secondary/40 hover:shadow-xl bg-gradient-to-br from-secondary/5 to-transparent">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-xl">
                    <Award className="w-8 h-8 text-secondary-foreground animate-shimmer" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary animate-pulse-glow" />
                      Certified Excellence
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">Nationally recognized certifications that open doors to better opportunities and futures.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="inline-block mt-10">
                <Button size="lg" className="shadow-xl font-semibold group">
                  Learn More About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Vision & Goals */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">Vision & Goals</span>
            </div>
            <h2 className="text-foreground mb-6">Building India's Educational Future</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Our vision extends beyond classrooms - we're creating a movement that transforms lives and communities across rural India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visionGoals.map((goal, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 animate-scale-up border-border/50 hover:border-primary/40 overflow-hidden bg-gradient-to-br from-card to-background" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8">
                  <div className={`w-24 h-24 ${goal.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border-2 border-primary/20`}>
                    <div className="text-primary animate-float">
                      {goal.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    <Star className="w-6 h-6 text-primary fill-primary animate-pulse-glow" />
                    {goal.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">{goal.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {goal.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm rounded-full border-2 border-primary/30 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 font-semibold shadow-sm">
                        ✓ {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-24 md:py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">Latest Updates</span>
            </div>
            <h2 className="text-foreground mb-6">Latest News & Achievements</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">Stay updated with our recent activities and milestones</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {recentNews.map((news, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 animate-scale-up border-border/50 hover:border-primary/30 group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="overflow-hidden relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardContent className="p-8">
                  <div className="text-sm text-primary font-semibold mb-3 flex items-center gap-2">
                    <Calendar size={16} className="animate-pulse-glow" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">{news.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{news.description}</p>
                  <Link to="/news" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center group/link">
                    Read More
                    <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
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
              <Calendar className="w-10 h-10 animate-float" />
            </div>
            <h2 className="mb-8 text-white">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/95 leading-relaxed max-w-3xl mx-auto">
              Join thousands of students and teachers who have transformed their lives through our programs
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/enrollment">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-xl font-semibold px-8 group">
                  Enroll Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold px-8 group">
                  Make a Donation
                  <Heart className="ml-2 group-hover:scale-110 transition-transform" />
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
