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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send, CheckCircle2, Copy } from "lucide-react";
import axios from "axios";

// Form schema
const inquirySchema = z.object({
  fullName: z.string().min(2),
  mobileNo: z.string().min(10),
  whatsappNo: z.string().min(10),
  email: z.string().email(),
  productName: z.string().min(2),
  quantity: z.string().min(1),
  country: z.string().min(2),
  brand: z.string().optional(),
  labTest: z.string().min(2),
  certificate: z.string().min(2),
  targetPrice: z.string().min(1),
  hsnCode: z.string().optional(),
  paymentTerms: z.string().min(2),
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
      labTest: "Yes",
      certificate: "Yes",
      targetPrice: "",
      hsnCode: "",
      paymentTerms: "",
      additionalRequirements: "",
    },
  });

  async function onSubmit(data: InquiryFormValues) {
    try {
      await axios.post("http://localhost:5000/api/inquiry", data);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Error submitting inquiry.");
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f8faff]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6 max-w-md">
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
            <h1 className="text-4xl font-bold text-[#1a2b4b]">Thank You!</h1>
            <p className="text-muted-foreground text-lg">
              Your inquiry has been received. Our export team will contact you shortly.
            </p>
            <Button onClick={() => setLocation("/")} className="bg-[#2a56ff] hover:bg-blue-700 h-12 px-8 rounded-full font-bold">
              Back to Home
            </Button>
            <Button onClick={() => navigator.clipboard.writeText(window.location.href)} variant="outline" className="flex items-center gap-2 mx-auto mt-4">
              <Copy className="w-4 h-4" /> Copy Inquiry Page Link
            </Button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  const fields = [
    { name: "fullName", label: "Full Name *", placeholder: "John Doe" },
    { name: "email", label: "Email Address *", placeholder: "john@example.com" },
    { name: "mobileNo", label: "Mobile Number *", placeholder: "+91 98765 43210" },
    { name: "whatsappNo", label: "WhatsApp Number *", placeholder: "+91 98765 43210" },
    { name: "productName", label: "Product Name *", placeholder: "Basmati Rice" },
    { name: "quantity", label: "Quantity Required *", placeholder: "10 Tons" },
    { name: "country", label: "Country *", placeholder: "USA" },
    { name: "brand", label: "Brand Preference", placeholder: "Sevaram Choice" },
    { name: "labTest", label: "Lab Test Required *", placeholder: "Yes/No" },
    { name: "certificate", label: "Certificate Required *", placeholder: "Yes/No" },
    { name: "targetPrice", label: "Target Price *", placeholder: "Enter target price" },
    { name: "hsnCode", label: "HSN Code", placeholder: "HSN Code" },
    { name: "paymentTerms", label: "Payment Terms *", placeholder: "30% Advance, 70% on Delivery" },
  ];

  return (
    <div className="min-h-screen bg-[#f8faff]">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button variant="ghost" className="group flex items-center gap-2 text-[#1a2b4b] font-bold pl-0 mb-8" onClick={() => setLocation("/")}>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="rounded-[2.5rem] shadow-2xl border-none overflow-hidden">
              <CardHeader className="bg-[#1a2b4b] text-white p-10 text-center">
                <CardTitle className="text-3xl lg:text-4xl font-bold">Inquiry for Export</CardTitle>
                <p className="text-white/70 mt-2">Get the best quotes from Sevaram Exim Serve</p>
              </CardHeader>
              <CardContent className="p-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {fields.map((field) => (
                        <FormField key={field.name} control={form.control} name={field.name as any} render={({ field: f }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-[#1a2b4b]">{field.label}</FormLabel>
                            <FormControl>
                              <Input placeholder={field.placeholder} {...f} className="h-12 rounded-xl border-blue-50 focus:ring-[#2a56ff]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      ))}

                      <FormField control={form.control} name="additionalRequirements" render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="font-bold text-[#1a2b4b]">Additional Requirements / Other Features</FormLabel>
                          <FormControl>
                            <Textarea {...field} className="min-h-[120px] rounded-2xl border-blue-50 focus:ring-[#2a56ff]" placeholder="Special packaging, quality standards..." />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <div className="pt-6">
                      <Button type="submit" className="w-full h-16 bg-[#2a56ff] hover:bg-blue-700 text-white font-black text-xl rounded-2xl shadow-xl shadow-blue-200 flex items-center justify-center gap-3">
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
