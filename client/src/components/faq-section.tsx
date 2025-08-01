import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does ADmyBRAND AI generate such high-quality content?",
    answer: "ADmyBRAND AI uses advanced GPT-4 and custom-trained models specifically optimized for marketing content. Our AI analyzes millions of high-performing campaigns, your brand voice, and industry trends to generate content that resonates with your audience and drives conversions."
  },
  {
    question: "Can I integrate ADmyBRAND AI with my existing marketing tools?",
    answer: "Absolutely! ADmyBRAND AI integrates seamlessly with 50+ popular marketing tools including HubSpot, Salesforce, Mailchimp, Google Analytics, Facebook Ads, and more. We also offer custom API integrations for enterprise clients."
  },
  {
    question: "What kind of ROI can I expect from using ADmyBRAND AI?",
    answer: "Our customers typically see a 300% increase in ROI within the first 3 months. This includes improved conversion rates, reduced content creation costs, and increased efficiency. We offer a ROI guarantee - if you don't see measurable improvements within 90 days, we'll refund your subscription."
  },
  {
    question: "Is my data secure with ADmyBRAND AI?",
    answer: "Security is our top priority. We're SOC 2 Type II compliant, use 256-bit SSL encryption, and store all data in secure, encrypted databases. We never share your data with third parties and you maintain full ownership of all content generated."
  },
  {
    question: "How quickly can I get started with ADmyBRAND AI?",
    answer: "You can start using ADmyBRAND AI immediately after signing up. Our onboarding process takes just 15 minutes, and our AI starts learning your brand voice within the first hour. Most customers see their first AI-generated campaigns live within 24 hours."
  },
  {
    question: "Do you offer support and training?",
    answer: "Yes! We provide comprehensive onboarding, video tutorials, live training sessions, and 24/7 support. Professional and Enterprise customers get dedicated account managers and priority support. We're committed to your success."
  }
];

export function FAQSection() {
  const ref = useScrollAnimation();

  return (
    <section id="faq" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref as any}
          className="text-center mb-16 animate-on-scroll"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-morphism-dark rounded-xl border-white/10 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger 
                className="px-8 py-6 text-left text-lg font-semibold hover:bg-white/10 transition-colors rounded-xl hover:no-underline"
                data-testid={`faq-question-${index}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent 
                className="px-8 pb-6 text-gray-300 leading-relaxed"
                data-testid={`faq-answer-${index}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
