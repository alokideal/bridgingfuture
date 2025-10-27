import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Users, 
  Award,
  Laptop,
  Brain,
  GraduationCap,
  Briefcase,
  Heart,
  Activity,
  CheckCircle2,
  CreditCard,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/bridging-future-logo.png";
import teacherTraining from "@/assets/teacher-training-modern.jpg";
import corporateTraining from "@/assets/corporate-ai-training.jpg";
import womenTraining from "@/assets/women-digital-training.jpg";
import vocationalTraining from "@/assets/vocational-training.jpg";

const Courses = () => {
  const courseCategories = [
    {
      category: "Teacher Training & Development",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-primary to-primary-glow",
      image: teacherTraining,
      courses: [
        {
          title: "Digital Tools for Educators",
          duration: "8 weeks",
          level: "Beginner",
          fee: "₹8,000",
          schedule: "Mon & Wed, 6:00 PM - 8:00 PM",
          startDate: "May 5, 2025",
          featured: true,
        },
        {
          title: "AI-Assisted Teaching Methods",
          duration: "6 weeks",
          level: "Intermediate",
          fee: "₹12,000",
          schedule: "Tue & Thu, 5:00 PM - 7:00 PM",
          startDate: "May 10, 2025",
          featured: true,
        },
        {
          title: "Classroom Management Excellence",
          duration: "4 weeks",
          level: "All Levels",
          fee: "₹6,000",
          schedule: "Saturdays, 10:00 AM - 2:00 PM",
          startDate: "May 15, 2025",
        },
        {
          title: "Modern Pedagogical Methods",
          duration: "10 weeks",
          level: "Advanced",
          fee: "₹15,000",
          schedule: "Wed & Fri, 4:00 PM - 6:00 PM",
          startDate: "May 20, 2025",
        },
        {
          title: "Blended Learning Strategies",
          duration: "6 weeks",
          level: "Intermediate",
          fee: "₹9,000",
          schedule: "Mon & Thu, 7:00 PM - 9:00 PM",
          startDate: "June 1, 2025",
        },
      ],
    },
    {
      category: "TET & Competitive Exam Preparation",
      icon: <Award className="w-6 h-6" />,
      color: "from-secondary to-accent",
      image: corporateTraining,
      courses: [
        {
          title: "CTET Complete Preparation",
          duration: "12 weeks",
          level: "All Levels",
          fee: "₹18,000",
          schedule: "Daily, 9:00 AM - 12:00 PM",
          startDate: "May 8, 2025",
          featured: true,
        },
        {
          title: "UP-TET Intensive Course",
          duration: "10 weeks",
          level: "All Levels",
          fee: "₹16,000",
          schedule: "Mon-Fri, 6:00 AM - 9:00 AM",
          startDate: "May 12, 2025",
        },
        {
          title: "Child Psychology & Pedagogy",
          duration: "6 weeks",
          level: "Intermediate",
          fee: "₹10,000",
          schedule: "Tue & Sat, 5:00 PM - 7:00 PM",
          startDate: "May 18, 2025",
        },
        {
          title: "Environmental Studies for TET",
          duration: "4 weeks",
          level: "Beginner",
          fee: "₹7,000",
          schedule: "Weekends, 11:00 AM - 2:00 PM",
          startDate: "May 25, 2025",
        },
      ],
    },
    {
      category: "AI & Technology Skills",
      icon: <Brain className="w-6 h-6" />,
      color: "from-accent to-primary",
      image: corporateTraining,
      courses: [
        {
          title: "AI Fundamentals & Applications",
          duration: "8 weeks",
          level: "Beginner",
          fee: "₹14,000",
          schedule: "Mon & Wed, 7:00 PM - 9:00 PM",
          startDate: "May 7, 2025",
          featured: true,
        },
        {
          title: "Machine Learning Mastery",
          duration: "12 weeks",
          level: "Advanced",
          fee: "₹25,000",
          schedule: "Tue, Thu & Sat, 6:00 PM - 8:00 PM",
          startDate: "May 14, 2025",
          featured: true,
        },
        {
          title: "Data Science with Python",
          duration: "10 weeks",
          level: "Intermediate",
          fee: "₹20,000",
          schedule: "Mon & Thu, 5:00 PM - 7:30 PM",
          startDate: "May 20, 2025",
        },
        {
          title: "Natural Language Processing",
          duration: "8 weeks",
          level: "Advanced",
          fee: "₹22,000",
          schedule: "Wed & Fri, 7:00 PM - 9:30 PM",
          startDate: "June 2, 2025",
        },
        {
          title: "Computer Vision & Image AI",
          duration: "10 weeks",
          level: "Advanced",
          fee: "₹24,000",
          schedule: "Tue & Sat, 4:00 PM - 7:00 PM",
          startDate: "June 5, 2025",
        },
      ],
    },
    {
      category: "Computer & Digital Skills",
      icon: <Laptop className="w-6 h-6" />,
      color: "from-primary to-secondary",
      image: womenTraining,
      courses: [
        {
          title: "Complete Web Development",
          duration: "16 weeks",
          level: "Beginner",
          fee: "₹22,000",
          schedule: "Mon, Wed & Fri, 6:00 PM - 8:00 PM",
          startDate: "May 9, 2025",
          featured: true,
        },
        {
          title: "Digital Graphic Design Pro",
          duration: "10 weeks",
          level: "Intermediate",
          fee: "₹18,000",
          schedule: "Tue & Thu, 5:00 PM - 7:30 PM",
          startDate: "May 13, 2025",
          featured: true,
        },
        {
          title: "MS Office Complete Suite",
          duration: "6 weeks",
          level: "Beginner",
          fee: "₹8,000",
          schedule: "Saturdays, 10:00 AM - 1:00 PM",
          startDate: "May 16, 2025",
        },
        {
          title: "Advanced Excel & Data Analytics",
          duration: "8 weeks",
          level: "Intermediate",
          fee: "₹12,000",
          schedule: "Wed & Sat, 6:00 PM - 8:00 PM",
          startDate: "May 22, 2025",
        },
        {
          title: "UI/UX Design Fundamentals",
          duration: "8 weeks",
          level: "Beginner",
          fee: "₹15,000",
          schedule: "Mon & Thu, 7:00 PM - 9:00 PM",
          startDate: "May 28, 2025",
        },
        {
          title: "Mobile App Development",
          duration: "14 weeks",
          level: "Advanced",
          fee: "₹28,000",
          schedule: "Tue, Thu & Sat, 5:00 PM - 7:30 PM",
          startDate: "June 3, 2025",
        },
        {
          title: "Cybersecurity Essentials",
          duration: "8 weeks",
          level: "Intermediate",
          fee: "₹16,000",
          schedule: "Mon & Wed, 6:00 PM - 8:30 PM",
          startDate: "June 8, 2025",
        },
        {
          title: "Cloud Computing & AWS",
          duration: "10 weeks",
          level: "Advanced",
          fee: "₹24,000",
          schedule: "Wed & Fri, 5:00 PM - 7:30 PM",
          startDate: "June 10, 2025",
        },
      ],
    },
    {
      category: "Vocational Training for Students",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-secondary to-primary",
      image: vocationalTraining,
      courses: [
        {
          title: "Digital Marketing Mastery",
          duration: "8 weeks",
          level: "Beginner",
          fee: "₹12,000",
          schedule: "Mon & Thu, 6:00 PM - 8:00 PM",
          startDate: "May 11, 2025",
        },
        {
          title: "Content Creation & Social Media",
          duration: "6 weeks",
          level: "Beginner",
          fee: "₹10,000",
          schedule: "Tue & Fri, 5:00 PM - 7:00 PM",
          startDate: "May 17, 2025",
        },
        {
          title: "Video Editing & Production",
          duration: "8 weeks",
          level: "Intermediate",
          fee: "₹14,000",
          schedule: "Weekends, 2:00 PM - 5:00 PM",
          startDate: "May 24, 2025",
        },
        {
          title: "E-commerce & Online Business",
          duration: "6 weeks",
          level: "Beginner",
          fee: "₹11,000",
          schedule: "Wed & Sat, 4:00 PM - 6:00 PM",
          startDate: "May 30, 2025",
        },
        {
          title: "Photography & Photo Editing",
          duration: "10 weeks",
          level: "Intermediate",
          fee: "₹16,000",
          schedule: "Sundays, 10:00 AM - 2:00 PM",
          startDate: "June 6, 2025",
        },
        {
          title: "Entrepreneurship & Startup Skills",
          duration: "8 weeks",
          level: "All Levels",
          fee: "₹13,000",
          schedule: "Tue & Thu, 6:00 PM - 8:00 PM",
          startDate: "June 12, 2025",
        },
      ],
    },
    {
      category: "Women Empowerment Programs",
      icon: <Heart className="w-6 h-6" />,
      color: "from-accent to-secondary",
      image: womenTraining,
      courses: [
        {
          title: "Financial Literacy & Planning",
          duration: "4 weeks",
          level: "All Levels",
          fee: "₹5,000",
          schedule: "Saturdays, 3:00 PM - 5:00 PM",
          startDate: "May 19, 2025",
        },
        {
          title: "Leadership & Communication Skills",
          duration: "6 weeks",
          level: "Intermediate",
          fee: "₹9,000",
          schedule: "Mon & Wed, 5:00 PM - 7:00 PM",
          startDate: "May 23, 2025",
        },
        {
          title: "Home-Based Business Development",
          duration: "8 weeks",
          level: "Beginner",
          fee: "₹10,000",
          schedule: "Tue & Fri, 4:00 PM - 6:00 PM",
          startDate: "May 29, 2025",
        },
        {
          title: "Skill Development for Employment",
          duration: "10 weeks",
          level: "All Levels",
          fee: "₹12,000",
          schedule: "Wed & Sat, 11:00 AM - 1:00 PM",
          startDate: "June 4, 2025",
        },
        {
          title: "Career Counseling & Guidance",
          duration: "4 weeks",
          level: "All Levels",
          fee: "₹6,000",
          schedule: "Sundays, 3:00 PM - 5:00 PM",
          startDate: "June 7, 2025",
        },
      ],
    },
    {
      category: "Health & Wellness Education",
      icon: <Activity className="w-6 h-6" />,
      color: "from-primary to-accent",
      image: teacherTraining,
      courses: [
        {
          title: "Community Health Worker Training",
          duration: "8 weeks",
          level: "Beginner",
          fee: "₹8,000",
          schedule: "Mon & Thu, 4:00 PM - 6:00 PM",
          startDate: "May 26, 2025",
        },
        {
          title: "Nutrition & Wellness Awareness",
          duration: "6 weeks",
          level: "All Levels",
          fee: "₹7,000",
          schedule: "Weekends, 9:00 AM - 11:00 AM",
          startDate: "June 1, 2025",
        },
        {
          title: "First Aid & Emergency Response",
          duration: "4 weeks",
          level: "Beginner",
          fee: "₹5,000",
          schedule: "Saturdays, 2:00 PM - 4:00 PM",
          startDate: "June 9, 2025",
        },
        {
          title: "Mental Health & Counseling Basics",
          duration: "8 weeks",
          level: "Intermediate",
          fee: "₹11,000",
          schedule: "Tue & Fri, 6:00 PM - 8:00 PM",
          startDate: "June 14, 2025",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <img src={logo} alt="Bridging Future" className="h-24 w-auto mx-auto mb-6 animate-bounce-subtle drop-shadow-2xl" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-vibrant bg-clip-text text-transparent">Our Training Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive courses across 50+ programs in teacher training, TET preparation, AI & technology, digital skills, vocational training, women empowerment, and health education
          </p>
          <div className="flex justify-center mt-6">
            <p className="text-lg font-semibold text-primary italic">Innovate, Educate & Empower</p>
          </div>
        </div>

        {/* Payment Options Banner */}
        <Card className="mb-12 bg-gradient-hero text-primary-foreground border-0 animate-fade-in">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <CreditCard className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Easy Online Payment</h3>
                  <p className="opacity-90">Secure payment options available for all courses</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button size="lg" variant="secondary" asChild className="shadow-lg">
                  <Link to="/donate">
                    Pay Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm text-center opacity-80">EMI options available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {[
            { icon: <Award className="w-8 h-8" />, title: "Certified Courses", desc: "Government recognized certifications" },
            { icon: <Users className="w-8 h-8" />, title: "Expert Trainers", desc: "Learn from industry professionals" },
            { icon: <Laptop className="w-8 h-8" />, title: "Online & Offline", desc: "Flexible learning modes" },
            { icon: <CheckCircle2 className="w-8 h-8" />, title: "Job Assistance", desc: "Career support & placement" },
          ].map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-2xl flex items-center justify-center text-white">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Categories */}
        <div className="space-y-16">
          {courseCategories.map((category, catIndex) => (
            <section key={catIndex} className="animate-fade-in" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              {/* Category Header */}
              <div className="relative mb-10">
                <div className="relative h-64 rounded-3xl overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-90`} />
                  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div>
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                        {category.icon}
                      </div>
                      <h2 className="text-4xl font-bold text-white mb-2">{category.category}</h2>
                      <p className="text-white/90 text-lg">{category.courses.length} courses available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Courses Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.courses.map((course, courseIndex) => (
                  <Card
                    key={courseIndex}
                    className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 relative overflow-hidden ${
                      course.featured ? 'border-primary' : ''
                    }`}
                  >
                    {course.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-accent text-accent-foreground font-bold shadow-lg">
                          Featured
                        </Badge>
                      </div>
                    )}
                    
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`} />
                    
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <BookOpen className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-medium">{course.duration}</span>
                          <Badge variant="outline" className="ml-auto">{course.level}</Badge>
                        </div>
                        
                        <div className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-foreground">Starts: {course.startDate}</div>
                            <div className="text-xs mt-1">{course.schedule}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <div className="text-2xl font-bold text-primary">{course.fee}</div>
                          <div className="text-xs text-muted-foreground">Course fee</div>
                        </div>
                        <Button size="sm" asChild className="group/btn">
                          <Link to="/enrollment">
                            Enroll Now
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-20 bg-gradient-vibrant text-white border-0 animate-fade-in">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of successful students who have upgraded their skills and advanced their careers
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="shadow-xl">
                <Link to="/enrollment">
                  Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link to="/donate">
                  Pay Course Fee <CreditCard className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Courses;
