import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/bridging-future-logo.png";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Teacher Training Workshop",
      date: "April 15-17, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Brij Enclave Colony, Sunderpur, Varanasi",
      attendees: "150 registered",
      description: "Join us for three days of intensive professional development covering modern teaching methodologies and digital tools for rural educators across Uttar Pradesh.",
      type: "Workshop",
      status: "Registration Open",
    },
    {
      title: "AI in Education Seminar (Hindi & English)",
      date: "April 28, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Online (Google Meet)",
      attendees: "300+ registered",
      description: "Explore how artificial intelligence is transforming education in India and learn practical applications for the classroom. Bilingual session in Hindi and English.",
      type: "Seminar",
      status: "Registration Open",
    },
    {
      title: "Student Coding Bootcamp - Web Development",
      date: "May 5-12, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Bridging Future Center, Varanasi",
      attendees: "80 slots available",
      description: "Week-long intensive coding bootcamp for students from Uttar Pradesh interested in web development, with focus on practical projects and job readiness.",
      type: "Bootcamp",
      status: "Early Bird",
    },
    {
      title: "Community Learning Fair - Digital India Initiative",
      date: "May 20, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Lanka Crossing, Varanasi",
      attendees: "Open to all",
      description: "Free community event showcasing our programs, with interactive demonstrations, career counseling, and enrollment opportunities for students and teachers.",
      type: "Fair",
      status: "Free Event",
    },
  ];

  const pastEvents = [
    {
      title: "Digital Literacy Training for Rural Teachers",
      date: "March 2024",
      attendees: "200 participants from UP",
      description: "Successfully trained 200 teachers from rural schools across Uttar Pradesh in essential digital literacy skills and AI-assisted teaching methods.",
    },
    {
      title: "Youth Tech Summit - Varanasi Edition",
      date: "February 2024",
      attendees: "350 students",
      description: "Inspiring summit in Varanasi that introduced students to career opportunities in technology, featuring industry leaders from Bangalore and Delhi.",
    },
    {
      title: "Online Teaching Workshop (Hindi Medium)",
      date: "January 2024",
      attendees: "180 educators",
      description: "Comprehensive bilingual workshop on effective online teaching strategies and tools, specifically designed for teachers in semi-urban and rural areas.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <img src={logo} alt="Bridging Future" className="h-28 w-auto mx-auto mb-8 animate-bounce-subtle drop-shadow-2xl" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Events & News</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join us for workshops, seminars, and community events that bring education and technology together
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
              <span className="bg-gradient-accent bg-clip-text text-transparent">Upcoming Events</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up border-2 hover:border-primary/40 bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-2 bg-gradient-accent"></div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{event.type}</Badge>
                    <Badge className="bg-green-500/10 text-green-700 dark:text-green-400">
                      {event.status}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-4">{event.title}</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start text-muted-foreground">
                      <Calendar className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <Clock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <Users className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{event.description}</p>

                  <Link to="/enrollment">
                    <Button className="w-full" variant="hero">
                      Register Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-24 animate-fade-in">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Past Events</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-2 hover:border-accent/40 bg-card/80 backdrop-blur" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.attendees}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Latest News Section */}
        <section className="mt-24 animate-fade-in bg-gradient-hero/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-primary/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-accent bg-clip-text text-transparent">Latest News & Updates</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Stay informed about our recent activities, achievements, and announcements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bridging Future Launches New AI Training Program",
                date: "March 20, 2024",
                category: "Programs",
                excerpt: "We're excited to announce the launch of our comprehensive AI training program designed for educators and students across Uttar Pradesh. This program covers AI fundamentals, machine learning basics, and practical applications in education.",
              },
              {
                title: "200+ Teachers Complete Professional Development in Varanasi",
                date: "March 15, 2024",
                category: "Achievement",
                excerpt: "Celebrating the successful completion of our winter professional development program, with over 200 teachers from rural areas receiving certification in modern teaching methodologies and digital tools.",
              },
              {
                title: "Partnership with Tech Leaders for Digital India",
                date: "March 10, 2024",
                category: "Partnership",
                excerpt: "Bridging Future Trust has formed strategic partnerships with leading Indian technology companies to enhance our computer courses and provide students with industry-recognized certifications.",
              },
              {
                title: "Community Learning Fair Draws Record Attendance in Sunderpur",
                date: "March 5, 2024",
                category: "Events",
                excerpt: "Our recent community learning fair in Sunderpur, Varanasi attracted over 1,000 attendees, showcasing the growing interest in digital education and skill development programs in rural communities.",
              },
              {
                title: "New Online Learning Platform Launches for Rural India",
                date: "February 28, 2024",
                category: "Technology",
                excerpt: "Introducing our new bilingual online learning platform with enhanced features including live sessions in Hindi and English, interactive content, and progress tracking for students and teachers.",
              },
              {
                title: "Student Success Stories: From Varanasi to Bangalore",
                date: "February 20, 2024",
                category: "Impact",
                excerpt: "Inspiring stories of students who completed our programs and secured positions with leading tech companies across India, demonstrating the real-world impact of our training initiatives.",
              },
            ].map((news, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 hover:border-accent/50 bg-card backdrop-blur animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-2 bg-gradient-accent"></div>
                <CardContent className="p-8">
                  <Badge variant="secondary" className="mb-4 font-semibold">{news.category}</Badge>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 animate-fade-in">
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-12 text-center shadow-glow">
            <Calendar className="w-16 h-16 mx-auto mb-6 animate-bounce-subtle" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Don't miss out on our upcoming events and latest news. Subscribe to our newsletter or follow us on social media for regular updates about our programs and impact.
            </p>
            <Link to="/enrollment">
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg">
                Contact Us for More Info
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
