import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Users, Award, BookOpen } from "lucide-react";

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

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "Intermediate":
        return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
      case "Advanced":
        return "bg-red-500/10 text-red-700 dark:text-red-400";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-gradient-hero rounded-full text-primary-foreground text-sm font-medium mb-6 animate-bounce-subtle">
            50+ Courses Available
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Transform Your Future
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of AI-driven courses, computer literacy programs, and teacher training workshops designed to empower rural communities with digital skills
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in-up group hover:-translate-y-2 border-2 border-transparent hover:border-primary/20"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="h-1 bg-gradient-hero group-hover:h-2 transition-all duration-300"></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs font-semibold">
                    {course.category}
                  </Badge>
                  <Badge className={`${getLevelColor(course.level)} font-semibold`}>{course.level}</Badge>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {course.title}
                </h3>

                <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{course.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">{course.students} enrolled</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                    <BookOpen className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">{course.type}</span>
                  </div>
                </div>

                <Link to="/enrollment">
                  <Button className="w-full group/btn" variant="hero">
                    <Award className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Enroll Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto bg-gradient-subtle rounded-2xl p-12 border border-border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're constantly adding new courses. Contact us to suggest topics or inquire about custom training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enrollment">
                <Button size="lg" variant="hero">
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
