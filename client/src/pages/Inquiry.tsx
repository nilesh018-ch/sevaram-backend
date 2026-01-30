import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useStore } from "@/context/StoreContext"; // Import useStore

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send, CheckCircle2, Copy, ShieldCheck, ClipboardCheck, Scale, Hash, CreditCard } from "lucide-react";

const inquirySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  mobileNo: z.string().min(10, "Valid mobile number is required"),
  whatsappNo: z.string().min(10, "Valid WhatsApp number is required"),
  email: z.string().email("Invalid email address"),
  productName: z.string().min(2, "Please specify the product"),
  quantity: z.string().min(1, "Quantity is required"),
  country: z.string().min(2, "Country is required"),
  brand: z.string().optional(),
  labTest: z.string().min(1, "Specify if lab test is required"),
  certificate: z.string().min(1, "Specify certificate requirement"),
  targetPrice: z.string().min(1, "Target price is required"),
  hsnCode: z.string().optional(),
  paymentTerms: z.string().min(1, "Specify payment terms"),
  additionalRequirements: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export default function Inquiry() {
  const [, setLocation] = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { addInquiry } = useStore(); // Get addInquiry from store

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      mobileNo: "",
      whatsappNo: "",
      email: "",
      productName: "",
      quantity: "",
      country: "",
      brand: "",
      labTest: "",
      certificate: "",
      targetPrice: "",
      hsnCode: "",
      paymentTerms: "",
      additionalRequirements: "",
    },
  });

  function onSubmit(data: InquiryFormValues) {
    // Construct the message string from various fields
    const fullMessage = `
Product: ${data.productName}
Quantity: ${data.quantity}
Target Price: ${data.targetPrice}
Payment Terms: ${data.paymentTerms}
Destination: ${data.country}
Lab Test: ${data.labTest}
Certificates: ${data.certificate}
Additional: ${data.additionalRequirements || "None"}
    `.trim();

    // Add inquiry to the centralized store
    addInquiry({
      name: data.fullName,
      email: data.email,
      phone: data.mobileNo,
      company: data.brand || "Not specified",
      message: fullMessage
    });

    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#f8faff] flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 max-w-md"
          >
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
            <h1 className="text-4xl font-bold text-[#1a2b4b]">Thank You!</h1>
            <p className="text-muted-foreground text-lg">
              Your inquiry has been received. Our export team will contact you shortly with the best quotes.
            </p>
            <div className="flex flex-col gap-3 pt-4">
              <Button 
                onClick={() => setLocation("/")}
                className="bg-[#2a56ff] hover:bg-blue-700 h-12 px-8 rounded-full font-bold"
              >
                Back to Home
              </Button>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faff]">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Button 
            variant="ghost" 
            className="group flex items-center gap-2 text-[#1a2b4b] hover:text-primary font-bold pl-0 mb-8"
            onClick={() => setLocation("/")}
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="rounded-[2.5rem] shadow-2xl border-none overflow-hidden">
              <CardHeader className="bg-[#1a2b4b] text-white p-10 text-center">
                <CardTitle className="text-3xl lg:text-4xl font-bold text-white">Professional Export Inquiry</CardTitle>
                <p className="text-white/70 mt-2">Submit detailed requirements to Sevaram Eximco and Services</p>
              </CardHeader>
              <CardContent className="p-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-[#2a56ff] border-b border-blue-100 pb-2">Contact Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-[#1a2b4b]">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
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
                              <FormLabel className="font-bold text-[#1a2b4b]">Email Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="mobileNo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-[#1a2b4b]">Mobile Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 98765 43210" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="whatsappNo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-[#1a2b4b]">WhatsApp Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 98765 43210" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-[#2a56ff] border-b border-blue-100 pb-2">Product & Export Requirements</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FormField
                          control={form.control}
                          name="productName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-[#1a2b4b]">Product Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Basmati Rice" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="quantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-[#1a2b4b]">Quantity *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. 10 Tons" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-[#1a2b4b]">Destination Country *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. USA" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="targetPrice"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-[#1a2b4b] flex items-center gap-2">
                                <Scale className="w-4 h-4 text-[#2a56ff]" /> Target Price (USD) *
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. $500/Ton" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="hsnCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-[#1a2b4b] flex items-center gap-2">
                                <Hash className="w-4 h-4 text-[#2a56ff]" /> HSN Code
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. 1006.30" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="paymentTerms"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-[#1a2b4b] flex items-center gap-2">
                                <CreditCard className="w-4 h-4 text-[#2a56ff]" /> Payment Terms *
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. LC, TT, Advance" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-[#2a56ff] border-b border-blue-100 pb-2">Compliance & Testing</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="labTest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-[#1a2b4b] flex items-center gap-2">
                                <ClipboardCheck className="w-4 h-4 text-[#2a56ff]" /> Lab Test Required? *
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. SGS, ISO or None" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="certificate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-[#1a2b4b]">Certificates Required *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Phytosanitary, CO" {...field} className="h-12 rounded-xl border-blue-100 focus:ring-[#2a56ff]" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="additionalRequirements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a2b4b]">Special Packaging or Other Instructions</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any specific requirements for packaging or shipping..." 
                                className="min-h-[120px] rounded-2xl border-blue-100 focus:ring-[#2a56ff]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        className="w-full h-16 bg-[#2a56ff] hover:bg-blue-700 text-white font-black text-xl rounded-2xl shadow-xl shadow-blue-200 flex items-center justify-center gap-3 transition-transform hover:scale-[1.01]"
                      >
                        Submit Professional Inquiry <Send className="w-6 h-6" />
                      </Button>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                         <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full font-medium">
                           <ShieldCheck className="w-4 h-4" /> Secure Inquiry
                         </div>
                         <span>* Verified Export Partner - Sevaram Eximco and Services</span>
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
