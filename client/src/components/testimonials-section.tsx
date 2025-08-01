import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Star } from "lucide-react";

const testimonials = [
  {
    content: "ADmyBRAND AI has completely transformed our content strategy. We're creating 10x more content in half the time, and our engagement rates have skyrocketed by 300%.",
    author: "Sarah Chen",
    role: "Marketing Director, TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  },
  {
    content: "The AI-powered personalization features have helped us achieve a 250% increase in conversion rates. It's like having a team of marketing experts working 24/7.",
    author: "Michael Rodriguez",
    role: "CEO, GrowthLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  },
  {
    content: "We've saved over 40 hours per week on campaign management. The automated A/B testing alone has improved our ROI by 180%. Absolutely game-changing!",
    author: "Emily Johnson",
    role: "Marketing Manager, InnovateCo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  },
  {
    content: "The predictive analytics have been incredibly accurate. We're now able to identify high-value leads with 95% precision, dramatically improving our sales pipeline.",
    author: "David Kim",
    role: "Founder, StartupX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  },
  {
    content: "ADmyBRAND AI's multi-channel automation has streamlined our entire marketing workflow. We're reaching customers more effectively across all platforms.",
    author: "Lisa Wang",
    role: "Digital Marketing Specialist, ScaleUp",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  },
  {
    content: "The content generation quality is outstanding. Our blog traffic has increased by 400% and the AI-generated copy converts better than our previous manual efforts.",
    author: "James Thompson",
    role: "Content Strategist, ContentPro",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  }
];

export function TestimonialsSection() {
  const ref = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref as any}
          className="text-center mb-16 animate-on-scroll"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've transformed their marketing with ADmyBRAND AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassmorphismCard
              key={index}
              className="p-8 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed" data-testid={`testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.author} - ${testimonial.role}`}
                  className="w-12 h-12 rounded-full mr-4"
                  data-testid={`testimonial-avatar-${index}`}
                />
                <div>
                  <h4 className="font-semibold" data-testid={`testimonial-author-${index}`}>
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-400 text-sm" data-testid={`testimonial-role-${index}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </GlassmorphismCard>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center">
              <span className="text-3xl font-bold gradient-text mr-2" data-testid="text-rating">
                4.9
              </span>
              <div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm">From 2,500+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
