import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";
import logo from "@/assets/bridging-future-logo.png";

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
        <div className="text-center mb-20 animate-fade-in">
          <img src={logo} alt="Bridging Future" className="h-28 w-auto mx-auto mb-8 animate-bounce-subtle drop-shadow-2xl" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">About Bridging Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transforming rural education in India through AI-driven training, digital literacy, and innovative teaching methodologies
          </p>
          <div className="flex justify-center mt-6">
            <p className="text-lg font-semibold text-primary italic">Innovate, Educate & Empower</p>
          </div>
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

        {/* Success Stories Section */}
        <section className="mt-20 animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real stories from real people whose lives have been transformed through education
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                name: "Ananya Sharma",
                role: "Government School Teacher, Varanasi",
                image: "/src/assets/story-teacher-digital.jpg",
                story: "After completing the Digital Tools for Educators course at Bridging Future Trust, I completely transformed my classroom in rural Varanasi. My students are now more engaged with technology, and I can seamlessly integrate digital learning into our curriculum. The training gave me the confidence to bridge the digital divide in our community.",
                impact: "Now trains 50+ teachers across Uttar Pradesh in digital literacy",
              },
              {
                name: "Rahul Verma",
                role: "Student, Web Development Course",
                image: "/src/assets/story-student-coding.jpg",
                story: "Coming from a small town in Uttar Pradesh with zero coding knowledge, I was hesitant. But six months after joining Bridging Future Trust's web development program, I built my first e-commerce website and secured an internship at a Bangalore-based tech startup. The instructors didn't just teach me to code—they taught me how to think like a problem solver.",
                impact: "Currently working as a junior web developer at a leading IT firm",
              },
              {
                name: "Priya Gupta",
                role: "AI Training Graduate",
                image: "/src/assets/story-ai-graduate.jpg",
                story: "The AI Fundamentals course at Bridging Future Trust opened up a whole new world for me. Coming from a non-technical background in Varanasi, I was nervous at first, but the supportive environment and excellent mentorship made all the difference. Today, I'm pursuing advanced studies in data science and helping local businesses leverage AI for growth.",
                impact: "Started her own AI consulting firm serving MSMEs in North India",
              },
            ].map((story, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up border-2 ${
                  index % 2 === 0 ? "" : "bg-muted/30"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div
                    className={`grid md:grid-cols-2 gap-0 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full min-h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                    </div>

                    <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <div className="w-12 h-12 text-primary mb-6 opacity-50">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                      </div>
                      
                      <blockquote className="text-lg text-muted-foreground mb-6 italic">
                        "{story.story}"
                      </blockquote>

                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-foreground">{story.name}</h3>
                        <p className="text-muted-foreground">{story.role}</p>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-sm font-medium text-primary">Impact:</p>
                        <p className="text-muted-foreground">{story.impact}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
