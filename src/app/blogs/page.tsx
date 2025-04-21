import BlogPost from "@/components/shared/BlogPost";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Hotel Management Software",
      description:
        "As we step into 2025, artificial intelligence is revolutionizing the hospitality industry. From automated check-ins to personalized guest experiences, discover how AI is transforming hotel operations and enhancing guest satisfaction.",
      date: "2025-04-15",
      author: "Sarah Johnson",
      category: "Technology",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      slug: "future-of-hotel-management-software",
    },
    {
      title: "Maximizing Guest Satisfaction with Digital Solutions",
      description:
        "Learn how leading hotels are leveraging digital concierge services to provide seamless, personalized experiences. We explore real-world case studies and implementation strategies that have proven successful.",
      date: "2025-04-10",
      author: "Michael Chen",
      category: "Best Practices",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
      slug: "maximizing-guest-satisfaction",
    },
    {
      title: "Revenue Management Strategies for 2025",
      description:
        "Explore cutting-edge approaches to hotel revenue management. From dynamic pricing algorithms to predictive analytics, discover how data-driven decisions are helping hotels maximize their revenue potential.",
      date: "2025-04-05",
      author: "David Smith",
      category: "Revenue",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      slug: "revenue-management-strategies-2025",
    },
    {
      title: "Sustainable Hospitality: Green Technologies in Hotels",
      description:
        "Discover how hotels are implementing eco-friendly technologies to reduce their carbon footprint while enhancing guest experience. From smart energy management to waste reduction systems.",
      date: "2025-04-01",
      author: "Emma Watson",
      category: "Sustainability",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80",
      slug: "sustainable-hospitality-green-tech",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="md:text-5xl text-4xl font-bold mb-6">
                Insights for Modern
                <span className="text-hotel-500 ml-2">Hoteliers</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expert perspectives, industry trends, and practical guides to
                help you transform your hospitality business with technology.
              </p>
            </div>

            {/* Featured Categories */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {[
                "All",
                "Technology",
                "Best Practices",
                "Revenue",
                "Sustainability",
              ].map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-hotel-50 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-16 bg-gradient-to-r from-hotel-400 to-hotel-500 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-6 text-white/90">
                Get the latest insights and updates delivered straight to your
                inbox.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder:text-gray-500 bg-white"
                />
                <Button variant="secondary" className="bg-white text-teal-500">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
