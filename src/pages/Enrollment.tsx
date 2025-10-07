import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Enrollment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    toast.success("Enrollment request submitted successfully! We'll contact you soon.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      courseInterest: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const benefits = [
    "Industry-recognized certification",
    "Flexible learning schedules",
    "Experienced instructors",
    "Hands-on practical training",
    "Lifetime access to course materials",
    "Career guidance and support",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Enroll Now</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards transforming your future. Fill out the form below and we'll get in touch with you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enrollment Form */}
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Enrollment Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="courseInterest">Course of Interest *</Label>
                  <Select
                    value={formData.courseInterest}
                    onValueChange={(value) => handleChange("courseInterest", value)}
                    required
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-fundamentals">AI Fundamentals for Educators</SelectItem>
                      <SelectItem value="machine-learning">Machine Learning Basics</SelectItem>
                      <SelectItem value="digital-literacy">Digital Literacy Essentials</SelectItem>
                      <SelectItem value="web-development">Web Development Fundamentals</SelectItem>
                      <SelectItem value="data-analysis">Data Analysis with Excel</SelectItem>
                      <SelectItem value="teacher-training">Modern Teaching Methodologies</SelectItem>
                      <SelectItem value="digital-tools">Digital Tools for Educators</SelectItem>
                      <SelectItem value="python">Python Programming for Beginners</SelectItem>
                      <SelectItem value="other">Other / Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your learning goals or any questions you have..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full" variant="hero" size="lg">
                  Submit Enrollment Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits & Info */}
          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Enroll with EduNGO?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold mb-1">1. Confirmation</div>
                    <p className="opacity-90">You'll receive an email confirmation within 24 hours</p>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">2. Course Details</div>
                    <p className="opacity-90">Our team will contact you with detailed course information</p>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">3. Get Started</div>
                    <p className="opacity-90">Complete the enrollment process and begin your learning journey</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Have questions about our programs? Our team is here to help you find the right course for your goals.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>📧 Email: info@edungo.org</p>
                  <p>📞 Phone: +1 (555) 123-4567</p>
                  <p>🕐 Hours: Mon-Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
