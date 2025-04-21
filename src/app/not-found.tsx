import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="relative mb-8">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-teal-400/30 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-hotel-400/30 rounded-full filter blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-9xl font-bold text-hotel-600">404</h1>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        Page Not Found
      </h2>

      <p className="text-gray-600 text-center max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
        you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          asChild
          className="bg-hotel-500 hover:bg-hotel-600 text-white shadow-sm transition-all hover:shadow-md"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
