import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import teacherDigitalImage from "@/assets/story-teacher-digital.jpg";
import studentCodingImage from "@/assets/story-student-coding.jpg";
import aiGraduateImage from "@/assets/story-ai-graduate.jpg";
import principalImage from "@/assets/story-principal.jpg";
import careerWomanImage from "@/assets/story-career-woman.jpg";
import careerSwitcherImage from "@/assets/story-career-switcher.jpg";

const Stories = () => {
  const stories = [
    {
      name: "Ananya Sharma",
      role: "Government School Teacher, Varanasi",
      image: teacherDigitalImage,
      story: "After completing the Digital Tools for Educators course at Bridging Future Trust, I completely transformed my classroom in rural Varanasi. My students are now more engaged with technology, and I can seamlessly integrate digital learning into our curriculum. The training gave me the confidence to bridge the digital divide in our community.",
      impact: "Now trains 50+ teachers across Uttar Pradesh in digital literacy",
    },
    {
      name: "Rahul Verma",
      role: "Student, Web Development Course",
      image: studentCodingImage,
      story: "Coming from a small town in Uttar Pradesh with zero coding knowledge, I was hesitant. But six months after joining Bridging Future Trust's web development program, I built my first e-commerce website and secured an internship at a Bangalore-based tech startup. The instructors didn't just teach me to code—they taught me how to think like a problem solver.",
      impact: "Currently working as a junior web developer at a leading IT firm",
    },
    {
      name: "Priya Gupta",
      role: "AI Training Graduate",
      image: aiGraduateImage,
      story: "The AI Fundamentals course at Bridging Future Trust opened up a whole new world for me. Coming from a non-technical background in Varanasi, I was nervous at first, but the supportive environment and excellent mentorship made all the difference. Today, I'm pursuing advanced studies in data science and helping local businesses leverage AI for growth.",
      impact: "Started her own AI consulting firm serving MSMEs in North India",
    },
    {
      name: "Rajesh Kumar",
      role: "Government School Principal, Sunderpur",
      image: principalImage,
      story: "We enrolled 20 of our teachers in Bridging Future Trust's comprehensive Teacher Training Program. The transformation has been remarkable. Our school in Sunderpur has seen a 40% improvement in student engagement, and our teachers now confidently use digital tools and AI-assisted learning methods to deliver quality education even in resource-constrained settings.",
      impact: "School received District Excellence Award for Educational Innovation 2024",
    },
    {
      name: "Meera Singh",
      role: "Computer Courses Graduate",
      image: careerWomanImage,
      story: "As a single mother in Varanasi trying to re-enter the workforce, I needed practical skills. The computer courses at Bridging Future Trust gave me exactly that—from MS Office to advanced data analysis. Within two months of completing the program, I secured a position as an administrative manager. This training changed my family's future.",
      impact: "Now employed as Senior Administrative Manager, mentoring other women",
    },
    {
      name: "Vikram Pandey",
      role: "Career Switcher",
      image: careerSwitcherImage,
      story: "At 45, working in a traditional business in Varanasi, I thought it was too late to learn programming. Bridging Future Trust proved me wrong. The Python and AI course was challenging but incredibly rewarding. The age-diverse classroom and patient instructors showed me that learning truly has no expiration date. Today, I'm building AI solutions for small businesses.",
      impact: "Successfully transitioned to a new career in software development and AI",
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
                Are you a Bridging Future Trust graduate? We'd love to hear about your journey and how our programs have impacted your life.
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
