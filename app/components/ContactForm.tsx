"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/ui/buttons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Send, Mail, Phone, User, MessageSquare } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  message: z.string().min(5),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("Error! Try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative w-full mt-20 min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/10 to-black z-0"></div>
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full blur-3xl"></div>
      
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,40,200,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,40,200,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      {/* Main Container - Fixed Layout */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header Section - Centered */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-base md:text-lg text-purple-200/70 max-w-2xl mx-auto px-4">
            Let's build something extraordinary together. Share your vision and we'll help make it reality.
          </p>
        </div>
        
        {/* Content Grid - Properly Aligned */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* Contact Info Sidebar - Left Column */}
          <div className="lg:col-span-1">
            <div className="bg-black/40 backdrop-blur-xl border border-purple-900/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-purple-900/10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-purple-400" />
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-900/30 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-purple-300">Email</p>
                    <p className="text-white font-medium truncate">contact@procureflow.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-900/30 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-purple-300">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-purple-900/30">
                  <p className="text-sm text-purple-300">
                    We typically respond within 24 hours
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-2 h-2 bg-purple-600/40 rounded-full animate-pulse"
                        style={{animationDelay: `${i * 0.2}s`}}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile/Tablet Additional Info */}
            <div className="mt-6 lg:hidden">
              <div className="bg-black/30 backdrop-blur-sm border border-purple-900/20 rounded-xl p-5">
                <p className="text-sm text-purple-300/80 text-center">
                  Your information is secure. We never share your details with third parties.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Right Column (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-purple-800 to-purple-600 rounded-3xl blur-lg opacity-20"></div>
              
              {/* Main Form Card */}
              <div className="relative bg-gradient-to-br from-black via-purple-950/10 to-black rounded-3xl p-6 md:p-8 border border-purple-900/40 shadow-2xl shadow-purple-900/10">
                
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-purple-900 to-black rounded-xl border border-purple-800/50 flex-shrink-0">
                    <Send className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">Send a Message</h2>
                    <p className="text-sm text-purple-300">Fill in the details below</p>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    {/* Grid for Name and Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      
                      {/* Name Field */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }: any) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2 text-white text-sm font-medium">
                              <User className="w-4 h-4 text-purple-400" />
                              Your Name
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  className="bg-black/50 border-purple-900/50 text-white placeholder:text-purple-300/40 h-12 pl-10 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                  placeholder="John Doe"
                                  {...field}
                                />
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-500/60" />
                              </div>
                            </FormControl>
                            <FormMessage className="text-purple-300" />
                          </FormItem>
                        )}
                      />

                      {/* Email Field */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }: any) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2 text-white text-sm font-medium">
                              <Mail className="w-4 h-4 text-purple-400" />
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  className="bg-black/50 border-purple-900/50 text-white placeholder:text-purple-300/40 h-12 pl-10 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                  placeholder="you@example.com"
                                  type="email"
                                  {...field}
                                />
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-500/60" />
                              </div>
                            </FormControl>
                            <FormMessage className="text-purple-300" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {/* Phone Field - Full Width */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }: any) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-white text-sm font-medium">
                            <Phone className="w-4 h-4 text-purple-400" />
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                className="bg-black/50 border-purple-900/50 text-white placeholder:text-purple-300/40 h-12 pl-10 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                placeholder="+1 (555) 123-4567"
                                {...field}
                              />
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-500/60" />
                            </div>
                          </FormControl>
                          <FormMessage className="text-purple-300" />
                        </FormItem>
                      )}
                    />

                    {/* Message Field - Full Width */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }: any) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-white text-sm font-medium">
                            <MessageSquare className="w-4 h-4 text-purple-400" />
                            Your Message
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Textarea
                                className="bg-black/50 border-purple-900/50 text-white placeholder:text-purple-300/40 min-h-[140px] pl-10 pt-3 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                                placeholder="Tell us about your project or inquiry..."
                                {...field}
                              />
                              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-purple-500/60" />
                            </div>
                          </FormControl>
                          <FormMessage className="text-purple-300" />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 text-base font-semibold bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 
                          hover:from-purple-600 hover:via-purple-500 hover:to-purple-600 
                          text-white rounded-xl transition-all duration-300 
                          hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(147,51,234,0.4)]
                          border border-purple-500/30 
                          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-3">
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </div>

                    {/* Privacy Note - Desktop Only */}
                    <p className="text-center text-xs text-purple-300/60 pt-2 hidden lg:block">
                      Your information is secure. We never share your details with third parties.
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Particles - Minimal */}
        {isClient && (
          <div className="fixed inset-0 pointer-events-none z-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-purple-500/10"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-40px) translateX(20px) rotate(180deg); 
            opacity: 0.7;
          }
          75% { 
            transform: translateY(-20px) translateX(10px) rotate(270deg); 
            opacity: 0.5;
          }
          100% { 
            transform: translateY(0px) translateX(0px) rotate(360deg); 
            opacity: 0.3;
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}