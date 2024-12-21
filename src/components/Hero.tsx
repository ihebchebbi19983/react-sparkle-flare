import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-secondary-light opacity-10 animate-gradient" />
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary-light bg-clip-text text-transparent">
        Welcome to Your New App
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Build something amazing with modern tools and beautiful design. Start your journey today
        with our powerful platform.
      </p>
      <Button className="group">
        Get Started
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};