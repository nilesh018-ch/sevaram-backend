import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send, CheckCircle2 } from "lucide-react";

const inquirySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  mobileNo: z.string().min(10, "Valid mobile number is required"),
  whatsappNo: z.string().min(10, "Valid WhatsApp number is required"),
  email: z.string().email("Invalid email address"),
  productName: z.string().min(2, "Please specify the product"),
  quantity: z.string().min(1, "Quantity is required"),
  country: z.string().min(2, "Country is required"),
  brand: z.string().optional(),
  additionalRequirements: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export default function Inquiry() {
  const [, setLocation] = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      additionalRequirements: "",
    },
  });

  function onSubmit(data: InquiryFormValues) {
    console.log("Inquiry Data:", data);
    // In Mockup Mode, we simulate a successful submission
    setIsSubmitted(true);
    // Note: To save this to a real Excel/Database, graduation to Fullstack is required.
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
            <Button 
              onClick={() => setLocation("/")}
              className="bg-[#2a56ff] hover:bg-blue-700 h-12 px-8 rounded-full font-bold"
            >
              Back to Home
            </Button>
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
        <div className="container mx-auto px-4 max-w-4xl">
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
                <CardTitle className="text-3xl lg:text-4xl font-bold">Inquiry for Export</CardTitle>
                <p className="text-white/70 mt-2">Get the best quotes from Sevaram Exim Serve</p>
              </CardHeader>
              <CardContent className="p-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Full Name */}
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a2b4b]">Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="h-12 rounded-xl border-blue-50 focus:ring-[#2a56ff]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a2b4b]">Email Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="h-12 rounded-xl border-blue-50 focus:ring-[#2a56ff]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Mobile No */}
                      <FormField
                        control={form.control}
                        name="mobileNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a2b4b]">Mobile Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" {...field} className="h-12 rounded-xl border-blue-50 focus:ring-[#2a56ff]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* WhatsApp No */}
                      <FormField
                        control={form.control}
                        name="whatsappNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a2b4b]">WhatsApp Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" {...field} className="h-12 rounded-xl border-blue-50 focus:ring-[#2a56ff]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Product Name */}
                      <FormField
                        control={form.control}
                        name="productName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a2b4b]">Product Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Basmati Rice, Bamboo Vase" {...field} className="h-12 rounded-xl border-blue-50 focus:ring-[#2a56ff]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Quantity */}
                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a2b4b]">Quantity Required *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. 10 Tons, 500 Units" {...field} className="h-12 rounded-xl border-blue-50 focus:ring-[#2a56ff]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Country */}
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a2b4b]">Country of Destination *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. USA, Dubai, UK" {...field} className="h-12 rounded-xl border-blue-50 focus:ring-[#2a56ff]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Brand */}
                      <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a2b4b]">Brand Preference (If any)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Sevaram Choice" {...field} className="h-12 rounded-xl border-blue-50 focus:ring-[#2a56ff]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Additional Requirements */}
                    <FormField
                      control={form.control}
                      name="additionalRequirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-[#1a2b4b]">Additional Requirements / Other Features</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe any special packaging, quality standards, or other details..." 
                              className="min-h-[120px] rounded-2xl border-blue-50 focus:ring-[#2a56ff]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        className="w-full h-16 bg-[#2a56ff] hover:bg-blue-700 text-white font-black text-xl rounded-2xl shadow-xl shadow-blue-200 flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]"
                      >
                        Submit Inquiry <Send className="w-6 h-6" />
                      </Button>
                      <p className="text-center text-muted-foreground mt-4 text-sm">
                        * All fields marked with asterisk are required.
                      </p>
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
