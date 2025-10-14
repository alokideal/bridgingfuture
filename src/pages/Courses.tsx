import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Clock, Users, Laptop, GraduationCap, Video, MapPin, Award, Briefcase } from "lucide-react";
import aiTrainingImage from "@/assets/ai-training.jpg";
import onlineTrainingImage from "@/assets/online-training.jpg";
import logo from "@/assets/bridging-future-logo.png";

const Courses = () => {
  const courses = [
    {
      category: "AI Training",
      title: "AI Fundamentals for Educators",
      description: "Learn the basics of artificial intelligence and how to integrate AI tools into your teaching practice.",
      duration: "8 weeks",
      level: "Beginner",
      students: "250+",
      type: "Online",
    },
    {
      category: "AI Training",
      title: "Machine Learning Basics",
      description: "Introduction to machine learning concepts, algorithms, and practical applications.",
      duration: "10 weeks",
      level: "Intermediate",
      students: "180+",
      type: "Hybrid",
    },
    {
      category: "Computer Courses",
      title: "Digital Literacy Essentials",
      description: "Master essential computer skills including Microsoft Office, email, and internet basics.",
      duration: "6 weeks",
      level: "Beginner",
      students: "500+",
      type: "Both",
    },
    {
      category: "Computer Courses",
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript to build modern, responsive websites.",
      duration: "12 weeks",
      level: "Beginner",
      students: "320+",
      type: "Online",
    },
    {
      category: "Computer Courses",
      title: "Data Analysis with Excel",
      description: "Advanced Excel techniques for data analysis, visualization, and reporting.",
      duration: "8 weeks",
      level: "Intermediate",
      students: "290+",
      type: "Hybrid",
    },
    {
      category: "Teacher Training",
      title: "Modern Teaching Methodologies",
      description: "Explore innovative teaching strategies and classroom management techniques.",
      duration: "6 weeks",
      level: "All Levels",
      students: "400+",
      type: "Offline",
    },
    {
      category: "Teacher Training",
      title: "Digital Tools for Educators",
      description: "Master educational technology tools to enhance student engagement and learning.",
      duration: "8 weeks",
      level: "Beginner",
      students: "380+",
      type: "Online",
    },
    {
      category: "Student Programs",
      title: "Python Programming for Beginners",
      description: "Start your coding journey with Python, one of the most popular programming languages.",
      duration: "10 weeks",
      level: "Beginner",
      students: "450+",
      type: "Online",
    },
  ];

  const deliveryModes = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Online Learning",
      description: "Flexible, self-paced courses accessible from anywhere with internet connectivity.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Offline Training",
      description: "In-person workshops and training sessions in community centers and schools.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification",
      description: "Industry-recognized certificates upon successful completion of programs.",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-success/10 text-success border-success/20";
      case "Intermediate":
        return "bg-accent/10 text-accent border-accent/20";
      case "Advanced":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Hero Section with Logo */}
        <div className="text-center mb-20 animate-fade-in">
          <img src={logo} alt="Bridging Future" className="h-28 w-auto mx-auto mb-6 animate-bounce-subtle drop-shadow-2xl" />
          <div className="inline-block px-8 py-3 bg-gradient-hero rounded-full text-primary-foreground font-bold mb-6 shadow-glow animate-pulse-glow text-lg">
            50+ Courses & Services Available
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent drop-shadow-lg">Our Courses & Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive educational programs designed to empower teachers and students with essential skills for the digital future
          </p>
        </div>

        {/* Featured Services Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Our Core Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transformative programs that bridge the digital divide and empower communities
            </p>
          </div>

          <div className="space-y-24">
            {/* Service 1: Teacher Training */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500">
              <div>
                <img
                  src={onlineTrainingImage}
                  alt="Teacher Training"
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-primary/20"
                />
              </div>
              <div>
                <div className="w-24 h-24 bg-gradient-hero rounded-3xl flex items-center justify-center text-primary-foreground mb-6 shadow-glow animate-pulse-glow">
                  <BookOpen className="w-14 h-14" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Teacher Training Programs</h3>
                <p className="text-muted-foreground text-lg md:text-xl mb-6 leading-relaxed">
                  Comprehensive professional development courses designed to enhance teaching methodologies, classroom management, and digital literacy skills.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3 bg-accent/5 p-3 rounded-xl">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                    <span className="text-sm font-semibold">Certification Programs</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-accent/5 p-3 rounded-xl">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                    <span className="text-sm font-semibold">Workshop Series</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-accent/5 p-3 rounded-xl">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                    <span className="text-sm font-semibold">Mentorship</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-accent/5 p-3 rounded-xl">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                    <span className="text-sm font-semibold">Continuous Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: AI & Tech Training */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-accent/10 hover:border-accent/30 transition-all duration-500">
              <div className="md:order-2">
                <img
                  src={aiTrainingImage}
                  alt="AI Training"
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-accent/20"
                />
              </div>
              <div className="md:order-1">
                <div className="w-24 h-24 bg-gradient-accent rounded-3xl flex items-center justify-center text-primary-foreground mb-6 shadow-glow animate-pulse-glow">
                  <GraduationCap className="w-14 h-14" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">AI & Technology Training</h3>
                <p className="text-muted-foreground text-lg md:text-xl mb-6 leading-relaxed">
                  Cutting-edge artificial intelligence and computer courses covering machine learning, programming, data science, and digital workplace skills.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3 bg-primary/5 p-3 rounded-xl">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-sm font-semibold">AI Fundamentals</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-primary/5 p-3 rounded-xl">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-sm font-semibold">Web Development</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-primary/5 p-3 rounded-xl">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-sm font-semibold">Python Programming</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-primary/5 p-3 rounded-xl">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-sm font-semibold">Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Modes */}
        <section className="py-16 px-8 bg-gradient-hero/10 backdrop-blur-sm rounded-3xl mb-24 animate-fade-in shadow-2xl border-2 border-primary/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-accent bg-clip-text text-transparent">How We Deliver</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg md:text-xl">Flexible learning formats designed for your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deliveryModes.map((mode, index) => (
              <Card key={index} className="hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 animate-fade-in-up border-2 hover:border-accent/50 bg-card backdrop-blur group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-accent rounded-3xl flex items-center justify-center text-primary-foreground mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    {mode.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{mode.title}</h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{mode.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Courses Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Available Courses</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground">Choose from our wide range of specialized programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 hover:border-primary/40 animate-fade-in-up bg-gradient-card backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-2 bg-gradient-accent group-hover:h-3 transition-all duration-300"></div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-bold px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {course.category}
                    </span>
                    <span className={`text-sm font-bold px-4 py-2 rounded-full border ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">{course.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                      <Clock className="w-5 h-5 mr-3 text-primary" />
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                      <Users className="w-5 h-5 mr-3 text-primary" />
                      <span className="font-semibold">{course.students} enrolled</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                      <Briefcase className="w-5 h-5 mr-3 text-primary" />
                      <span className="font-semibold">{course.type}</span>
                    </div>
                  </div>

                  <Link to="/enrollment">
                    <Button className="w-full group/btn shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" variant="hero">
                      <Award className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Enroll Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero text-primary-foreground rounded-3xl p-12 md:p-20 shadow-glow animate-fade-in border-4 border-accent/30">
          <img src={logo} alt="Bridging Future" className="h-20 w-auto mx-auto mb-8 drop-shadow-2xl animate-bounce-subtle" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Join thousands of learners who are building their skills and creating better opportunities through our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/enrollment">
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-primary-foreground text-primary border-0 hover:bg-primary-foreground/90 shadow-2xl transition-all duration-300 hover:scale-110 font-bold text-lg px-10 py-7">
                <span>Enroll Now</span>
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-accent text-primary-foreground border-0 hover:bg-accent/90 shadow-2xl transition-all duration-300 hover:scale-110 font-bold text-lg px-10 py-7">
                <span>Contact Us</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
