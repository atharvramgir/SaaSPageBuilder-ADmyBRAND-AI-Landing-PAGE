import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Rocket, Play, CheckCircle, Users } from "lucide-react";

export function HeroSection() {
  const ref = useScrollAnimation();

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={ref as any}
            className="animate-on-scroll"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revolutionize Your{" "}
              <span className="gradient-text">Marketing with AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              ADmyBRAND AI Suite empowers businesses to create, optimize, and scale their 
              marketing campaigns with cutting-edge artificial intelligence. Boost ROI by 300% 
              and save 80% of your time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-violet-500 hover:shadow-xl transition-all duration-300 hover:scale-105"
                data-testid="button-start-trial"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="glass-morphism border-white/20 hover:bg-white/20 transition-all duration-300"
                data-testid="button-watch-demo"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-blue-400 mr-2" />
                10,000+ happy customers
              </div>
            </div>
          </div>

          <div className="animate-float">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
              alt="AI marketing dashboard interface showing analytics and automation tools"
              className="rounded-2xl shadow-2xl glass-morphism p-4"
              data-testid="img-hero-dashboard"
            />
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </section>
  );
}
