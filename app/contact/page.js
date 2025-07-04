"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MessageCircle, Github, Twitter, Globe } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black py-16 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about NFT Scavenger Hunt? We&#39;re here to help!
            Choose your preferred way to reach us below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="backdrop-blur-lg bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Your Name</label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Subject</label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="technical">
                        Technical Support
                      </SelectItem>
                      <SelectItem value="puzzle">Puzzle Help</SelectItem>
                      <SelectItem value="nft">NFT Issues</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Message</label>
                  <Textarea
                    placeholder="Type your message here..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Contact Info */}
          <div className="space-y-8">
            {/* Quick Connect */}
            <Card className="backdrop-blur-lg bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Quick Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="mailto:support@nftscavenger.com"
                  className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <h3 className="text-white font-medium">Email Support</h3>
                    <p className="text-gray-300 text-sm">
                      support@nftscavenger.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <h3 className="text-white font-medium">
                      Discord Community
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Join our active community
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="backdrop-blur-lg bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-white">Twitter</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-white">GitHub</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="backdrop-blur-lg bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 space-y-2">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM UTC</p>
                  <p>Weekend: 10:00 AM - 4:00 PM UTC</p>
                  <p className="text-sm mt-4">
                    We strive to respond to all inquiries within 24 hours during
                    business hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
         
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
