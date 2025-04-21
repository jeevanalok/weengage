import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const BlogPost = ({
  title,
  description,
  date,
  author,
  category,
  readTime,
  image,
  slug,
}: BlogPostProps) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
          <Badge variant="outline" className="bg-hotel-50">
            {category}
          </Badge>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readTime}
          </div>
        </div>
        <CardTitle className="text-2xl group-hover:text-hotel-500 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="mt-2 text-base line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="h-4 w-4" />
            <span>{author}</span>
            <span className="text-gray-300">•</span>
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="group-hover:text-hotel-500 transition-colors"
            asChild
          >
            <Link href={`/blogs/${slug}`}>
              Read more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
