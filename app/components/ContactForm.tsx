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
import { useState } from "react";
import { Send, Mail, Phone, User, MessageSquare } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  message: z.string().min(5),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
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
    <div className="relative w-full mt-20 min-h-screen py-12 px-4 overflow-hidden bg-black">
      {showPopup && (
        <div className="fixed top-6 right-6 z-50 animate-slide-in">
          <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
            <span className="font-medium">Message sent successfully!</span>
          </div>
        </div>
      )}

      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/5 to-black"></div>
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-gray-300">
            Let's build something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-900/20">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-400" />
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-purple-300">Email</p>
                    <p className="text-white">support@aadhniktech.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-purple-300">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-900/30">
              <div className="flex items-center gap-3 mb-8">
                <Send className="w-6 h-6 text-purple-400" />
                <div>
                  <h2 className="text-xl font-bold text-white">Send a Message</h2>
                  <p className="text-sm text-purple-300">Fill in the details below</p>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-white">
                            <User className="w-4 h-4 text-purple-400" />
                            Your Name
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                className="bg-black/30 border-purple-900/30 text-white pl-10"
                                placeholder="John Doe"
                                {...field}
                              />
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-500/60" />
                            </div>
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
                          <FormLabel className="flex items-center gap-2 text-white">
                            <Mail className="w-4 h-4 text-purple-400" />
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                className="bg-black/30 border-purple-900/30 text-white pl-10"
                                placeholder="you@example.com"
                                type="email"
                                {...field}
                              />
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-500/60" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-white">
                          <Phone className="w-4 h-4 text-purple-400" />
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="bg-black/30 border-purple-900/30 text-white pl-10"
                              placeholder="+1 (555) 123-4567"
                              {...field}
                            />
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-500/60" />
                          </div>
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
                        <FormLabel className="flex items-center gap-2 text-white">
                          <MessageSquare className="w-4 h-4 text-purple-400" />
                          Your Message
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Textarea
                              className="bg-black/30 border-purple-900/30 text-white min-h-[120px]"
                              placeholder="Tell us about your project or inquiry..."
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}