import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import aiTrainingImage from "@/assets/ai-training.jpg";
import onlineTrainingImage from "@/assets/online-training.jpg";

const News = () => {
  const newsArticles = [
    {
      title: "EduNGO Launches New AI Training Program",
      date: "March 20, 2024",
      category: "Programs",
      image: aiTrainingImage,
      excerpt: "We're excited to announce the launch of our comprehensive AI training program designed for educators and students. This program covers AI fundamentals, machine learning basics, and practical applications in education.",
      featured: true,
    },
    {
      title: "200+ Teachers Complete Professional Development",
      date: "March 15, 2024",
      category: "Achievement",
      image: onlineTrainingImage,
      excerpt: "Celebrating the successful completion of our winter professional development program, with over 200 teachers receiving certification in modern teaching methodologies and digital tools.",
      featured: true,
    },
    {
      title: "Partnership with Tech Leaders Announced",
      date: "March 10, 2024",
      category: "Partnership",
      image: aiTrainingImage,
      excerpt: "EduNGO has formed strategic partnerships with leading technology companies to enhance our computer courses and provide students with industry-recognized certifications.",
    },
    {
      title: "Community Learning Fair Draws Record Attendance",
      date: "March 5, 2024",
      category: "Events",
      image: onlineTrainingImage,
      excerpt: "Our recent community learning fair attracted over 1,000 attendees, showcasing the growing interest in digital education and skill development programs.",
    },
    {
      title: "New Online Learning Platform Launches",
      date: "February 28, 2024",
      category: "Technology",
      image: aiTrainingImage,
      excerpt: "Introducing our new online learning platform with enhanced features including live sessions, interactive content, and progress tracking for students and teachers.",
    },
    {
      title: "Student Success Stories: From Learning to Leading",
      date: "February 20, 2024",
      category: "Impact",
      image: onlineTrainingImage,
      excerpt: "Meet three of our students who have leveraged their EduNGO education to launch successful careers in technology and now mentor the next generation of learners.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Latest News</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our recent activities, achievements, and announcements
          </p>
        </div>

        {/* Featured Articles */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {newsArticles
              .filter((article) => article.featured)
              .map((article, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <button className="text-primary hover:underline inline-flex items-center font-medium">
                      Read Full Article
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">Recent Updates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {newsArticles
              .filter((article) => !article.featured)
              .map((article, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{article.category}</Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <button className="text-primary hover:underline inline-flex items-center text-sm font-medium">
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-20 animate-fade-in">
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Informed</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, updates, and announcements directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
