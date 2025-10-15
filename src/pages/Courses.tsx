import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Clock, Users, Laptop, GraduationCap, Video, MapPin, Award, Briefcase } from "lucide-react";
import aiTrainingImage from "@/assets/ai-training.jpg";
import onlineTrainingImage from "@/assets/online-training.jpg";
import logo from "@/assets/bridging-future-logo.png";

const Courses = () => {
  const courses = [
    // Teacher Training & Education
    {
      category: "Teacher Training",
      title: "Modern Teaching Methodologies",
      description: "Explore innovative teaching strategies and classroom management techniques for 21st-century education.",
      duration: "8 weeks",
      level: "All Levels",
      students: "520+",
      type: "Hybrid",
      featured: true,
    },
    {
      category: "Teacher Training",
      title: "Digital Tools for Educators",
      description: "Master educational technology tools including Google Classroom, Zoom, and interactive learning platforms.",
      duration: "6 weeks",
      level: "Beginner",
      students: "480+",
      type: "Online",
      featured: true,
    },
    {
      category: "Teacher Training",
      title: "Classroom Management Excellence",
      description: "Advanced techniques for managing diverse classrooms and creating inclusive learning environments.",
      duration: "6 weeks",
      level: "Intermediate",
      students: "380+",
      type: "Offline",
    },
    {
      category: "Teacher Training",
      title: "Assessment & Evaluation Strategies",
      description: "Learn effective methods for student assessment, grading, and providing constructive feedback.",
      duration: "5 weeks",
      level: "All Levels",
      students: "350+",
      type: "Online",
    },
    {
      category: "Teacher Training",
      title: "Special Education & Inclusive Teaching",
      description: "Strategies for teaching students with diverse learning needs and creating accessible education.",
      duration: "8 weeks",
      level: "Intermediate",
      students: "290+",
      type: "Hybrid",
    },
    
    // TET (Teacher Eligibility Test) Courses
    {
      category: "TET Preparation",
      title: "TET Paper 1 Preparation (Classes I-V)",
      description: "Comprehensive preparation for CTET/UPTET Paper 1 covering Child Development, EVS, Mathematics, and Languages.",
      duration: "12 weeks",
      level: "All Levels",
      students: "680+",
      type: "Both",
      featured: true,
    },
    {
      category: "TET Preparation",
      title: "TET Paper 2 Preparation (Classes VI-VIII)",
      description: "Complete CTET/UPTET Paper 2 preparation with subject-specific content and teaching methodology.",
      duration: "12 weeks",
      level: "All Levels",
      students: "590+",
      type: "Both",
    },
    {
      category: "TET Preparation",
      title: "Child Development & Pedagogy",
      description: "In-depth coverage of child psychology, learning theories, and pedagogical approaches for TET exams.",
      duration: "6 weeks",
      level: "All Levels",
      students: "450+",
      type: "Online",
    },
    
    // AI & Technology Training
    {
      category: "AI & Technology",
      title: "AI Fundamentals for Educators",
      description: "Learn the basics of artificial intelligence and how to integrate AI tools into your teaching practice.",
      duration: "8 weeks",
      level: "Beginner",
      students: "320+",
      type: "Online",
      featured: true,
    },
    {
      category: "AI & Technology",
      title: "Machine Learning Basics",
      description: "Introduction to machine learning concepts, algorithms, and practical applications in education and industry.",
      duration: "10 weeks",
      level: "Intermediate",
      students: "280+",
      type: "Hybrid",
    },
    {
      category: "AI & Technology",
      title: "Data Science Fundamentals",
      description: "Master data analysis, statistics, Python programming, and visualization techniques for data science careers.",
      duration: "14 weeks",
      level: "Intermediate",
      students: "340+",
      type: "Online",
      featured: true,
    },
    {
      category: "AI & Technology",
      title: "Advanced Data Science & Analytics",
      description: "Deep dive into machine learning algorithms, big data processing, and advanced analytics techniques.",
      duration: "16 weeks",
      level: "Advanced",
      students: "180+",
      type: "Online",
    },
    
    // Computer & Digital Skills
    {
      category: "Computer Courses",
      title: "Digital Literacy Essentials",
      description: "Master essential computer skills including Microsoft Office, email, internet, and digital communication.",
      duration: "6 weeks",
      level: "Beginner",
      students: "720+",
      type: "Both",
    },
    {
      category: "Computer Courses",
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript to build modern, responsive websites from scratch.",
      duration: "12 weeks",
      level: "Beginner",
      students: "420+",
      type: "Online",
    },
    {
      category: "Computer Courses",
      title: "Advanced Excel & Data Analysis",
      description: "Master Excel formulas, pivot tables, macros, and data visualization for business analytics.",
      duration: "8 weeks",
      level: "Intermediate",
      students: "380+",
      type: "Hybrid",
    },
    {
      category: "Computer Courses",
      title: "Graphic Design with Adobe Suite",
      description: "Professional training in Photoshop, Illustrator, and InDesign for creative digital design.",
      duration: "10 weeks",
      level: "Beginner",
      students: "350+",
      type: "Offline",
      featured: true,
    },
    {
      category: "Computer Courses",
      title: "Digital Marketing Fundamentals",
      description: "Learn SEO, social media marketing, content marketing, and Google Ads for digital business growth.",
      duration: "8 weeks",
      level: "Beginner",
      students: "440+",
      type: "Online",
    },
    
    // Vocational Training for Students
    {
      category: "Vocational Training",
      title: "Python Programming for Beginners",
      description: "Start your coding journey with Python - perfect for students exploring programming careers.",
      duration: "10 weeks",
      level: "Beginner",
      students: "560+",
      type: "Online",
    },
    {
      category: "Vocational Training",
      title: "Mobile App Development",
      description: "Learn to build Android and iOS apps using modern frameworks and tools.",
      duration: "12 weeks",
      level: "Intermediate",
      students: "290+",
      type: "Online",
    },
    {
      category: "Vocational Training",
      title: "Video Editing & Content Creation",
      description: "Master video editing with Premiere Pro, After Effects, and content creation for YouTube and social media.",
      duration: "8 weeks",
      level: "Beginner",
      students: "380+",
      type: "Hybrid",
    },
    {
      category: "Vocational Training",
      title: "Accounting & Tally ERP",
      description: "Professional accounting skills with Tally ERP, GST, and financial management for career opportunities.",
      duration: "10 weeks",
      level: "Beginner",
      students: "420+",
      type: "Offline",
    },
    {
      category: "Vocational Training",
      title: "Spoken English & Communication",
      description: "Improve English speaking, writing, and communication skills for professional success.",
      duration: "12 weeks",
      level: "All Levels",
      students: "640+",
      type: "Both",
    },
    
    // Women Empowerment Courses
    {
      category: "Women Empowerment",
      title: "Digital Entrepreneurship for Women",
      description: "Learn to start and grow online businesses, e-commerce, and digital marketing for women entrepreneurs.",
      duration: "10 weeks",
      level: "Beginner",
      students: "380+",
      type: "Hybrid",
      featured: true,
    },
    {
      category: "Women Empowerment",
      title: "Financial Literacy & Planning",
      description: "Essential financial management, investment, savings, and wealth creation skills for women.",
      duration: "6 weeks",
      level: "All Levels",
      students: "450+",
      type: "Online",
    },
    {
      category: "Women Empowerment",
      title: "Career Re-entry Program",
      description: "Specialized program for women returning to work after career breaks, covering skills and confidence building.",
      duration: "8 weeks",
      level: "All Levels",
      students: "290+",
      type: "Hybrid",
    },
    {
      category: "Women Empowerment",
      title: "Leadership & Management Skills",
      description: "Develop leadership qualities, team management, and decision-making skills for professional growth.",
      duration: "8 weeks",
      level: "Intermediate",
      students: "320+",
      type: "Online",
    },
    {
      category: "Women Empowerment",
      title: "Handicrafts & Small Business",
      description: "Traditional and modern handicraft skills with business development for home-based enterprises.",
      duration: "10 weeks",
      level: "Beginner",
      students: "410+",
      type: "Offline",
    },
    
    // Health & Wellness Education
    {
      category: "Health Education",
      title: "Public Health & Hygiene Awareness",
      description: "Essential knowledge on public health, sanitation, disease prevention, and community health.",
      duration: "6 weeks",
      level: "All Levels",
      students: "380+",
      type: "Both",
    },
    {
      category: "Health Education",
      title: "Nutrition & Wellness Coaching",
      description: "Learn about nutrition science, healthy eating, and wellness practices for personal and community health.",
      duration: "8 weeks",
      level: "Beginner",
      students: "320+",
      type: "Hybrid",
    },
    {
      category: "Health Education",
      title: "First Aid & Emergency Response",
      description: "Critical first aid skills, CPR, and emergency response training for schools and communities.",
      duration: "4 weeks",
      level: "All Levels",
      students: "450+",
      type: "Offline",
    },
    {
      category: "Health Education",
      title: "Mental Health & Counseling Basics",
      description: "Understanding mental health, stress management, and basic counseling techniques for educators and caregivers.",
      duration: "8 weeks",
      level: "Beginner",
      students: "280+",
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
          <img src={logo} alt="Bridging Future" className="h-32 w-auto mx-auto mb-6 animate-bounce-subtle drop-shadow-2xl" />
          <div className="inline-block px-8 py-3 bg-gradient-hero rounded-full text-primary-foreground font-bold mb-6 shadow-glow animate-pulse-glow text-lg">
            40+ Comprehensive Courses Available
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent drop-shadow-lg">Transform Your Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From Teacher Training to Data Science, Women Empowerment to Health Education - Discover programs that empower communities and create opportunities
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
                className={`group overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 hover:border-primary/40 animate-fade-in-up bg-gradient-card backdrop-blur ${
                  course.featured ? 'ring-2 ring-accent/50 shadow-xl' : ''
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`h-2 ${course.featured ? 'bg-gradient-accent' : 'bg-gradient-hero'} group-hover:h-3 transition-all duration-300`}></div>
                <CardContent className="p-6 relative">
                  {course.featured && (
                    <div className="absolute top-4 right-4 bg-accent text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse-glow">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {course.category}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                    {course.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed min-h-[4rem]">{course.description}</p>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                      <Clock className="w-4 h-4 mr-2.5 text-primary" />
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                      <Users className="w-4 h-4 mr-2.5 text-primary" />
                      <span className="font-semibold">{course.students} enrolled</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                      <Briefcase className="w-4 h-4 mr-2.5 text-primary" />
                      <span className="font-semibold">{course.type}</span>
                    </div>
                  </div>

                  <Link to="/enrollment">
                    <Button className="w-full group/btn shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" variant={course.featured ? "hero" : "default"}>
                      <Award className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
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
