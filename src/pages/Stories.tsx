import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import aiTrainingImage from "@/assets/ai-training.jpg";
import onlineTrainingImage from "@/assets/online-training.jpg";

const Stories = () => {
  const stories = [
    {
      name: "Sarah Johnson",
      role: "High School Teacher",
      image: onlineTrainingImage,
      story: "After completing the Digital Tools for Educators course, I completely transformed my classroom. My students are more engaged, and I can now incorporate technology seamlessly into my lessons. The training gave me the confidence to embrace digital education.",
      impact: "Now trains other teachers in digital literacy",
    },
    {
      name: "Michael Chen",
      role: "Student, Web Development Course",
      image: aiTrainingImage,
      story: "I started with zero coding knowledge. Six months later, I built my first website and landed an internship at a tech company. The instructors at EduNGO didn't just teach me to code—they taught me how to think like a developer.",
      impact: "Currently working as a junior web developer",
    },
    {
      name: "Priya Patel",
      role: "AI Training Graduate",
      image: aiTrainingImage,
      story: "The AI Fundamentals course opened up a whole new world for me. Coming from a non-technical background, I was nervous at first, but the supportive environment and excellent teaching made all the difference. I'm now pursuing a career in data science.",
      impact: "Started her own AI consulting business",
    },
    {
      name: "James Martinez",
      role: "Elementary School Principal",
      image: onlineTrainingImage,
      story: "We enrolled 15 of our teachers in the Teacher Training Program. The results have been remarkable. Our school has seen improved student performance, and our teachers report feeling more confident and equipped to handle modern classroom challenges.",
      impact: "School received excellence award for innovation",
    },
    {
      name: "Amina Hassan",
      role: "Computer Courses Graduate",
      image: aiTrainingImage,
      story: "As a single mother trying to re-enter the workforce, I needed practical skills. The computer courses at EduNGO gave me exactly that. From basic office software to data analysis, I learned everything I needed. Within two months of graduating, I found a great job.",
      impact: "Now employed as an administrative manager",
    },
    {
      name: "David Thompson",
      role: "Career Switcher",
      image: onlineTrainingImage,
      story: "At 45, I thought it was too late to learn new skills. EduNGO proved me wrong. The Python programming course was challenging but incredibly rewarding. The age-diverse classroom showed me that learning has no expiration date.",
      impact: "Transitioned to a new career in software development",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed through education
          </p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-12">
          {stories.map((story, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in ${
                index % 2 === 0 ? "" : "bg-muted/30"
              }`}
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
                    <Quote className="w-12 h-12 text-primary mb-6 opacity-50" />
                    
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

        {/* CTA Section */}
        <section className="mt-20 animate-fade-in">
          <div className="bg-gradient-warm text-secondary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Next Success Story</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of students and teachers who have transformed their lives through education. Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/enrollment">
                <button className="px-8 py-3 bg-secondary-foreground text-secondary rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Start Your Journey
                </button>
              </a>
              <a href="/courses">
                <button className="px-8 py-3 bg-secondary-foreground/10 border-2 border-secondary-foreground text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-foreground hover:text-secondary transition-colors">
                  View Courses
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Share Your Story */}
        <section className="mt-12 animate-fade-in">
          <Card className="border-dashed border-2">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Share Your Story</h3>
              <p className="text-muted-foreground mb-6">
                Are you an EduNGO graduate? We'd love to hear about your journey and how our programs have impacted your life.
              </p>
              <a href="/enrollment">
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Contact Us
                </button>
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Stories;
