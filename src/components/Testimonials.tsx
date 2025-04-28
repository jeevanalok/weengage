import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "WeEngage has transformed our hotel operations. We've seen a 30% increase in direct bookings and our guests love the personalized service. The AI handles everything from inquiries to check-ins seamlessly.",
    author: "Pradeep Lohiya",
    role: "Owner, Ritumbhara Hotel and Resort",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote:
      "WeEngage has transformed our property operations at The Olive. The platform is intuitive, saves valuable time, and integrates effortlessly with our existing systems. From smoother workflows to smarter guest engagement, it’s been a game-changer. Highly recommend!",
    author: "Salim Khan",
    role: "Receptionist, The Olive",
    image: "https://i.pravatar.cc/150?img=53",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by{" "}
            <span className="text-gradient">Hospitality Professionals</span>
          </h2>
          <p className="text-lg text-gray-600">
            See what property owners and managers are saying about our AI
            hospitality solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 h-full">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-hotel-200 mb-4" />
                <p className="text-gray-700 mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-gray-700">
            Trusted by properties committed to exceptional guest experiences.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="text-gray-400 font-display text-xl font-bold">
              Ritumbhara Hotel and Resort
            </div>
           
            <div className="text-gray-400 font-display text-xl font-bold">
              The Olive
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
