import { Badge } from "@/components/ui/badge";
import { CalendarDays, User, Clock } from "lucide-react";
import Image from "next/image";

const blogPosts = {
  "future-of-hotel-management-software": {
    title: "The Future of Hotel Management Software",
    content: `
      As we step into 2025, artificial intelligence is revolutionizing the hospitality industry. From automated check-ins to personalized guest experiences, the transformation is profound and far-reaching.

      Hotels are increasingly adopting AI-powered solutions to streamline operations and enhance guest satisfaction. These systems can predict guest preferences, automate routine tasks, and provide valuable insights for decision-making.

      ## Key Trends

      1. **Automated Check-in Systems**
         The traditional front desk is evolving into a more efficient, contactless experience powered by AI.

      2. **Predictive Analytics**
         Hotels can now anticipate guest needs and optimize their services based on data-driven insights.

      3. **Smart Room Technology**
         IoT devices and AI are creating personalized room environments that adapt to guest preferences.

      The future of hotel management lies in the seamless integration of these technologies, creating more efficient operations and enhanced guest experiences.
    `,
    date: "2025-04-15",
    author: "Sarah Johnson",
    category: "Technology",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
  },
  "maximizing-guest-satisfaction": {
    title: "Maximizing Guest Satisfaction with Digital Solutions",
    content: `
      Digital transformation in the hospitality industry has opened new avenues for enhancing guest satisfaction. Modern hotels are leveraging technology to provide personalized experiences that exceed guest expectations.

      ## Digital Concierge Services

      The implementation of digital concierge services has revolutionized how hotels interact with their guests. These systems provide:

      1. **24/7 Availability**
         Instant responses to guest queries at any time of day
      
      2. **Personalized Recommendations**
         AI-driven suggestions based on guest preferences and history

      3. **Seamless Communication**
         Multiple channels for guest interaction including mobile apps and messaging platforms

      ## Case Studies

      Several leading hotels have successfully implemented these solutions, resulting in:
      - 40% increase in guest satisfaction scores
      - 25% reduction in front desk queries
      - 30% improvement in service delivery time
    `,
    date: "2025-04-10",
    author: "Michael Chen",
    category: "Best Practices",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
  },
};

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  //   console.log("params", params);
  const { slug } = await params;
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-gray-50">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="mb-8">
            <Badge variant="outline" className="bg-hotel-50 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl font-bold mb-4 font-display">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-12">
            <Image
              width={100}
              height={100}
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
