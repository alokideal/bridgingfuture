import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To provide accessible, quality education and training that empowers teachers and students with the skills needed for the digital age.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "A world where every teacher and student has access to transformative educational opportunities, regardless of their background.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "Excellence, inclusivity, innovation, and community impact guide everything we do.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Community",
      description: "Building a global network of educators and learners committed to positive change.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About EduNGO</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a non-governmental organization dedicated to transforming education through technology and innovation
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Founded in 2009, EduNGO began with a simple yet powerful vision: to bridge the educational gap in underserved communities through technology and quality training programs. What started as a small initiative to train teachers in basic computer skills has grown into a comprehensive educational platform serving thousands of students and educators worldwide.
              </p>
              <p>
                Over the past 15 years, we have expanded our programs to include cutting-edge AI training, advanced computer courses, and innovative teaching methodologies. Our team of dedicated professionals works tirelessly to ensure that every program we offer meets the highest standards of quality and relevance.
              </p>
              <p>
                Today, we are proud to have trained over 10,000 students and certified more than 500 teachers. Our impact extends beyond numbers – we measure our success by the lives we've transformed and the communities we've empowered.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Principles</h2>
            <p className="text-muted-foreground text-lg">The values that drive our mission and guide our work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center text-primary-foreground mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-gradient-subtle rounded-2xl animate-fade-in">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Teachers Certified</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Active Courses</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the dedicated professionals working to make quality education accessible to all
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-muted/50 rounded-2xl p-8 text-center">
            <p className="text-muted-foreground text-lg">
              Our team consists of experienced educators, technology experts, and passionate volunteers who believe in the transformative power of education. Together, we work towards creating opportunities for learning and growth in communities around the world.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
