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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Bridging Future</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a non-governmental organization dedicated to transforming rural education in India through AI-driven training, digital literacy, and innovative teaching methodologies
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Founded with a powerful vision to bridge the digital divide in rural India, Bridging Future began as a grassroots initiative to empower teachers and students with essential technology skills. What started as small-scale computer literacy workshops in Varanasi has evolved into a comprehensive educational ecosystem serving communities across Uttar Pradesh and beyond.
              </p>
              <p>
                Under the leadership of Dr. Alok Srivastava and our dedicated team, we've expanded our programs to include cutting-edge AI and machine learning training, advanced digital literacy courses, and innovative teaching methodologies. We believe that quality education should not be limited by geography or economic circumstances, and we work tirelessly to make technology education accessible to rural and semi-urban communities.
              </p>
              <p>
                Our approach combines online and offline learning modalities, ensuring flexibility and accessibility for diverse learner needs. We partner with local schools, community centers, and educational institutions to deliver impactful programs that create lasting change. Through collaborative research, workshops, and hands-on training, we're building a generation of digitally empowered educators and students.
              </p>
              <p>
                Today, Bridging Future stands as a testament to what's possible when education meets innovation. We've trained over 25,000 students, certified more than 1,200 teachers, and established 150+ digital learning centers across rural India. But our impact extends beyond numbers – it's measured in the dreams realized, careers transformed, and communities empowered.
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
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">25,000+</div>
                <div className="text-muted-foreground">Students Empowered</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: "0.1s"}}>
                <div className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">1,200+</div>
                <div className="text-muted-foreground">Teachers Certified</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: "0.2s"}}>
                <div className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">150+</div>
                <div className="text-muted-foreground">Learning Centers</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: "0.3s"}}>
                <div className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-muted-foreground">Active Programs</div>
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
