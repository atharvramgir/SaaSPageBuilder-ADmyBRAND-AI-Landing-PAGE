import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Lock, CreditCard } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses",
    price: 29,
    period: "month",
    features: [
      "5,000 AI-generated words/month",
      "Basic analytics dashboard",
      "Email marketing automation",
      "Social media scheduling",
      "2 team members",
      "Email support"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: 79,
    period: "month",
    features: [
      "50,000 AI-generated words/month",
      "Advanced analytics & reporting",
      "Multi-channel automation",
      "A/B testing suite",
      "10 team members",
      "Priority support",
      "Custom integrations"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: 199,
    period: "month",
    features: [
      "Unlimited AI-generated content",
      "Enterprise analytics suite",
      "White-label solutions",
      "Advanced personalization",
      "Unlimited team members",
      "24/7 dedicated support",
      "Custom development"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
];

export function PricingSection() {
  const ref = useScrollAnimation();

  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref as any}
          className="text-center mb-16 animate-on-scroll"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <GlassmorphismCard
              key={plan.name}
              className={`p-8 relative transition-all duration-300 hover:-translate-y-2 animate-on-scroll ${
                plan.popular ? "border-2 border-primary scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-violet-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" data-testid={`plan-name-${plan.name.toLowerCase()}`}>
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold" data-testid={`plan-price-${plan.name.toLowerCase()}`}>
                    ${plan.price}
                  </span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.buttonVariant === "default"
                      ? "bg-gradient-to-r from-primary to-violet-500 hover:shadow-xl hover:scale-105"
                      : "border-primary text-primary hover:bg-primary hover:text-white"
                  } transition-all duration-300`}
                  data-testid={`button-plan-${plan.name.toLowerCase()}`}
                >
                  {plan.buttonText}
                </Button>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm" data-testid={`feature-${plan.name.toLowerCase()}-${featureIndex}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </GlassmorphismCard>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-400 mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-green-400 mr-2" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center">
              <Lock className="w-4 h-4 text-blue-400 mr-2" />
              256-bit SSL Encryption
            </div>
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 text-purple-400 mr-2" />
              Secure Payments
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
