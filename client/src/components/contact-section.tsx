import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Send, Loader2 } from "lucide-react";

export function ContactSection() {
  const ref = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      form.reset();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref as any}
          className="text-center mb-16 animate-on-scroll"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Marketing?
          </h2>
          <p className="text-xl text-gray-300">
            Start your free trial today and see the difference AI can make
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Business team collaborating in modern office with digital marketing tools"
              className="rounded-2xl shadow-2xl"
              data-testid="img-contact-team"
            />
          </div>

          <GlassmorphismCard className="p-8 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field}
                          className="bg-slate-700/50 border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="Enter your email address" 
                          {...field}
                          className="bg-slate-700/50 border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your company name" 
                          {...field}
                          className="bg-slate-700/50 border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                          data-testid="input-company"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your marketing goals..." 
                          {...field}
                          rows={4}
                          className="bg-slate-700/50 border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={contactMutation.isPending || isSubmitted}
                  className={`w-full text-lg font-semibold transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-600 hover:bg-green-600"
                      : "bg-gradient-to-r from-primary to-violet-500 hover:shadow-xl hover:scale-105"
                  }`}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Thank you! We'll be in touch soon.
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Start Free Trial
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </Form>
          </GlassmorphismCard>
        </div>
      </div>
    </section>
  );
}
