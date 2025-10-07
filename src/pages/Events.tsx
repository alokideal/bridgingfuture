import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Teacher Training Workshop",
      date: "April 15-17, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Central Education Center",
      attendees: "150 registered",
      description: "Join us for three days of intensive professional development covering modern teaching methodologies and digital tools.",
      type: "Workshop",
      status: "Registration Open",
    },
    {
      title: "AI in Education Seminar",
      date: "April 28, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Online (Zoom)",
      attendees: "300+ registered",
      description: "Explore how artificial intelligence is transforming education and learn practical applications for the classroom.",
      type: "Seminar",
      status: "Registration Open",
    },
    {
      title: "Student Coding Bootcamp",
      date: "May 5-12, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Learning Hub",
      attendees: "80 slots available",
      description: "Week-long intensive coding bootcamp for students interested in web development and programming.",
      type: "Bootcamp",
      status: "Early Bird",
    },
    {
      title: "Community Learning Fair",
      date: "May 20, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "City Square",
      attendees: "Open to all",
      description: "Free community event showcasing our programs, with interactive demonstrations and enrollment opportunities.",
      type: "Fair",
      status: "Free Event",
    },
  ];

  const pastEvents = [
    {
      title: "Digital Literacy Training",
      date: "March 2024",
      attendees: "200 participants",
      description: "Successfully trained 200 teachers in essential digital literacy skills.",
    },
    {
      title: "Youth Tech Summit",
      date: "February 2024",
      attendees: "350 students",
      description: "Inspiring summit that introduced students to career opportunities in technology.",
    },
    {
      title: "Online Teaching Workshop",
      date: "January 2024",
      attendees: "180 educators",
      description: "Comprehensive workshop on effective online teaching strategies and tools.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for workshops, seminars, and community events that bring education and technology together
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              >
                <div className="h-2 bg-gradient-hero"></div>
                <CardContent className="p-6">
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
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-8">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
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

        {/* CTA Section */}
        <section className="mt-20 animate-fade-in">
          <div className="bg-gradient-warm text-secondary-foreground rounded-2xl p-12 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Don't miss out on our upcoming events. Subscribe to our newsletter or follow us on social media for the latest updates.
            </p>
            <Link to="/enrollment">
              <Button size="lg" variant="outline" className="bg-secondary-foreground/10 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
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
