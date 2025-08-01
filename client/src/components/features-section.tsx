import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { 
  Wand2, 
  TrendingUp, 
  FlaskConical, 
  Radio, 
  UserCog, 
  Target 
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI Content Generation",
    description: "Generate high-converting copy, blog posts, and social media content in seconds with our advanced GPT-powered engine.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Smart Analytics",
    description: "Get real-time insights and predictive analytics to optimize your campaigns and maximize ROI with data-driven decisions.",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: FlaskConical,
    title: "Automated A/B Testing",
    description: "Continuously optimize your campaigns with intelligent A/B testing that automatically adjusts for maximum performance.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Radio,
    title: "Multi-Channel Automation",
    description: "Seamlessly manage campaigns across email, social media, PPC, and content marketing from one unified platform.",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: UserCog,
    title: "Personalization Engine",
    description: "Deliver personalized experiences at scale with AI-driven customer segmentation and dynamic content optimization.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Predictive Lead Scoring",
    description: "Identify your hottest prospects with AI-powered lead scoring that predicts conversion probability with 95% accuracy.",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

export function FeaturesSection() {
  const ref = useScrollAnimation();

  return (
    <section id="features" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref as any}
          className="text-center mb-16 animate-on-scroll"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">AI Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of marketing with our comprehensive AI-powered suite designed to transform your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <GlassmorphismCard 
                key={feature.title}
                className="p-8 hover:bg-white/15 transition-all duration-300 animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" data-testid={`feature-title-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed" data-testid={`feature-description-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {feature.description}
                </p>
              </GlassmorphismCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
