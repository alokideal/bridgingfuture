import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Laptop, 
  GraduationCap, 
  Users, 
  Video,
  MapPin,
  Award,
  Clock
} from "lucide-react";
import aiTrainingImage from "@/assets/ai-training.jpg";
import onlineTrainingImage from "@/assets/online-training.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Teacher Training Programs",
      description: "Comprehensive professional development courses designed to enhance teaching methodologies, classroom management, and digital literacy skills.",
      features: ["Certification Programs", "Workshop Series", "Mentorship Opportunities", "Continuous Support"],
      image: onlineTrainingImage,
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "Computer Courses",
      description: "From basic computer literacy to advanced programming, we offer courses that prepare students for the digital workplace.",
      features: ["Microsoft Office Suite", "Web Development", "Data Analysis", "Cybersecurity Basics"],
      image: aiTrainingImage,
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "AI Training",
      description: "Cutting-edge artificial intelligence courses covering machine learning, data science, and AI applications in education.",
      features: ["AI Fundamentals", "Machine Learning", "Python Programming", "Practical Projects"],
      image: aiTrainingImage,
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Student Development Programs",
      description: "Engaging programs designed to develop critical thinking, problem-solving, and digital skills in students of all ages.",
      features: ["STEM Programs", "Coding Clubs", "Digital Literacy", "Career Guidance"],
      image: onlineTrainingImage,
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
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Programs designed to fit around your existing commitments and schedule.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational programs designed to empower teachers and students with essential skills for the future
          </p>
        </div>

        {/* Main Services */}
        <section className="mb-20">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center animate-fade-in ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="w-20 h-20 bg-gradient-hero rounded-lg flex items-center justify-center text-primary-foreground mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/courses">
                    <Button variant="hero">Explore Courses</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Modes */}
        <section className="py-16 bg-gradient-subtle rounded-2xl animate-fade-in">
          <div className="px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Deliver</h2>
              <p className="text-muted-foreground text-lg">Multiple learning formats to suit your needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {deliveryModes.map((mode, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-4">
                      {mode.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{mode.title}</h3>
                    <p className="text-muted-foreground text-sm">{mode.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto bg-gradient-warm text-secondary-foreground rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of learners who have transformed their lives through our programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enrollment">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-secondary-foreground/10 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  Enroll Now
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-secondary-foreground/10 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  View All Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
