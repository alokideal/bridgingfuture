import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, Users, BookOpen, Laptop, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Donate = () => {
  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmounts = ["25", "50", "100", "250", "500"];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = amount === "custom" ? customAmount : amount;
    toast.success(`Thank you for your ${finalAmount} donation! Redirecting to payment...`);
  };

  const impactAreas = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Teacher Training",
      description: "Your donation helps train educators with modern teaching skills and digital literacy.",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Student Scholarships",
      description: "Enable students from underprivileged backgrounds to access quality education.",
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Technology Access",
      description: "Provide computers and internet access to communities in need.",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
  ];

  const impactExamples = [
    { amount: "$25", impact: "Provides course materials for 1 student" },
    { amount: "$50", impact: "Covers software licenses for a training session" },
    { amount: "$100", impact: "Supports a full scholarship for one course" },
    { amount: "$250", impact: "Funds teacher training for 5 educators" },
    { amount: "$500", impact: "Equips a classroom with essential technology" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Heart className="w-16 h-16 mx-auto text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Support Our Mission</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your donation helps us provide quality education and training to thousands of teachers and students worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Donation Form */}
          <div className="animate-fade-in">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Make a Donation</h2>
                <form onSubmit={handleDonate} className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <Label className="text-base mb-3 block">Donation Type</Label>
                    <RadioGroup value={donationType} onValueChange={setDonationType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="cursor-pointer font-normal">
                          One-time donation
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="cursor-pointer font-normal">
                          Monthly donation
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <Label className="text-base mb-3 block">Select Amount</Label>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {predefinedAmounts.map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setAmount(value)}
                          className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                            amount === value
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          ${value}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setAmount("custom")}
                        className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                          amount === "custom"
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        Custom
                      </button>
                    </div>
                    {amount === "custom" && (
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        min="1"
                        required
                      />
                    )}
                  </div>

                  {/* Personal Information */}
                  <div>
                    <Label htmlFor="donor-name">Full Name *</Label>
                    <Input id="donor-name" placeholder="Enter your full name" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="donor-email">Email Address *</Label>
                    <Input
                      id="donor-email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="accent" size="lg">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate ${amount === "custom" ? customAmount || "0" : amount}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Your donation is tax-deductible. You'll receive a receipt via email.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Impact Information */}
          <div className="space-y-8 animate-fade-in">
            {/* Your Impact */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Your Impact</h3>
                <div className="space-y-4">
                  {impactExamples.map((example, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-foreground">{example.amount}</span>
                        <span className="text-muted-foreground"> - {example.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Where Your Money Goes */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Where Your Money Goes</h3>
                <div className="space-y-6">
                  {impactAreas.map((area, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-14 h-14 rounded-lg ${area.color} flex items-center justify-center flex-shrink-0`}>
                        {area.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{area.title}</h4>
                        <p className="text-muted-foreground text-sm">{area.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="bg-gradient-hero text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Impact This Year</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold mb-1">10,000+</div>
                    <div className="opacity-90">Students Helped</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">500+</div>
                    <div className="opacity-90">Teachers Trained</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">50+</div>
                    <div className="opacity-90">Active Programs</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">$2M+</div>
                    <div className="opacity-90">In Scholarships</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Ways to Help */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Other Ways to Help</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Volunteer as an instructor or mentor</p>
                  <p>• Donate computers or educational materials</p>
                  <p>• Corporate sponsorship opportunities</p>
                  <p>• Partner with us for community programs</p>
                </div>
                <Button variant="outline" className="w-full mt-6">
                  Contact Us to Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
