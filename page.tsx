"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sprout,
  TrendingUp,
  MapPin,
  Bell,
  Star,
  Phone,
  MessageCircle,
  BarChart3,
  Leaf,
  Heart,
  Zap,
  Globe,
  Shield,
  MessageSquare,
  Settings,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [currentPrice, setCurrentPrice] = useState(45)
  const [isAnimating, setIsAnimating] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Welcome to AgriConnect AI! How can I help you today?", sender: "ai" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const chatContainerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setCurrentPrice((prev) => prev + (Math.random() - 0.5) * 4)
      setTimeout(() => setIsAnimating(false), 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Scroll to the bottom of the chat container when new messages are added
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const marketData = [
    { crop: "Tomatoes", price: 45, trend: "+12%", location: "Downtown Market", distance: "2.3 km" },
    { crop: "Onions", price: 32, trend: "+8%", location: "Farmers Hub", distance: "1.8 km" },
    { crop: "Carrots", price: 28, trend: "-3%", location: "Green Valley", distance: "4.1 km" },
    { crop: "Potatoes", price: 22, trend: "+15%", location: "City Center", distance: "3.2 km" },
  ]

  const buyers = [
    { name: "Fresh Foods Co.", rating: 4.8, orders: 156, specialty: "Organic Vegetables" },
    { name: "Green Market Ltd.", rating: 4.6, orders: 89, specialty: "Local Produce" },
    { name: "Farm to Table", rating: 4.9, orders: 203, specialty: "Premium Quality" },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }])
      // Simulate AI response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Thanks for your question! We're processing your request...", sender: "ai" },
        ])
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Based on current market trends, we recommend focusing on Tomatoes and Potatoes this season.",
              sender: "ai",
            },
          ])
        }, 1500)
      }, 1000)
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              AgriConnect
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Alerts
            </Button>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <Tabs defaultValue="dashboard" className="container mx-auto px-4 py-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="dashboard">
            <BarChart3 className="w-4 h-4 mr-2" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="ai">
            <Zap className="w-4 h-4 mr-2" />
            AI Insights
          </TabsTrigger>
          <TabsTrigger value="market">
            <Leaf className="w-4 h-4 mr-2" />
            Market Data
          </TabsTrigger>
          <TabsTrigger value="account">
            <Settings className="w-4 h-4 mr-2" />
            Account
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>AI-Powered Market Intelligence</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Connect. Sell. Thrive.
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Empowering small-scale farmers with real-time market insights, direct buyer connections, and AI-driven
                recommendations to maximize profits and reduce waste.
              </p>
            </div>
          </section>

          {/* Live Market Preview */}
          <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border-green-200 mb-8">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Live Market Price
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">${currentPrice.toFixed(2)}</div>
                <div className="text-sm text-gray-500 mb-3">per kg - Tomatoes</div>
                <div
                  className={`inline-flex items-center space-x-1 transition-all duration-500 ${isAnimating ? "scale-110" : ""}`}
                >
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-green-500 font-medium">+12% today</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Section */}
          <section className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">2,500+</div>
                <div className="text-green-100">Active Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$2.3M</div>
                <div className="text-green-100">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">850+</div>
                <div className="text-green-100">Verified Buyers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-green-100">Satisfaction Rate</div>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="ai" className="mt-8">
          {/* AI Insights Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">AI-Powered Insights</h2>
            <p className="text-gray-600">
              Get personalized recommendations to optimize your farming practices and maximize profits.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Crop Planning</CardTitle>
                  <CardDescription>Optimal planting schedules based on weather and market trends.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Recommended crops for the next season: Tomatoes, Potatoes</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Pricing Strategy</CardTitle>
                  <CardDescription>AI-driven pricing recommendations for your produce.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Suggested price for Tomatoes: $48/kg</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* AI Chat Component */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Ask AI</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-4">
              <div ref={chatContainerRef} className="h-64 overflow-y-auto mb-4 p-2 rounded-md bg-gray-100/50">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded-md ${
                      message.sender === "user"
                        ? "bg-blue-100 ml-auto w-fit max-w-[70%]"
                        : "bg-green-100 mr-auto w-fit max-w-[70%]"
                    }`}
                  >
                    <span className="text-sm">{message.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  className="flex-grow border rounded-l-md py-2 px-3 text-sm"
                  placeholder="Type your question..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage()
                    }
                  }}
                />
                <Button
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-l-none"
                  onClick={handleSendMessage}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="market" className="mt-8">
          {/* Market Data Preview */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Today's Market Opportunities</h2>
            <p className="text-gray-600">Live data from local markets and buyers in your area</p>
          </section>

          <Tabs defaultValue="markets" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="markets">Market Prices</TabsTrigger>
              <TabsTrigger value="buyers">Active Buyers</TabsTrigger>
            </TabsList>

            <TabsContent value="markets" className="space-y-4">
              {marketData.map((item, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                          <Leaf className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{item.crop}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <MapPin className="w-4 h-4" />
                            <span>
                              {item.location} • {item.distance}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">${item.price}</div>
                        <Badge variant={item.trend.startsWith("+") ? "default" : "secondary"} className="mt-1">
                          {item.trend}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="buyers" className="space-y-4">
              {buyers.map((buyer, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                          <AvatarFallback>
                            {buyer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">{buyer.name}</h3>
                          <p className="text-sm text-gray-500">{buyer.specialty}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{buyer.rating}</span>
                            <span className="text-sm text-gray-500">• {buyer.orders} orders</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Chat
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-500">
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="account" className="mt-8">
          {/* Account Settings */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Profile Information</h3>
                    <p className="text-sm text-gray-500">Update your profile details.</p>
                  </div>
                  <div>
                    <Button variant="outline">Edit Profile</Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Notifications</h3>
                    <p className="text-sm text-gray-500">Manage your notification preferences.</p>
                  </div>
                  <div>
                    <Button variant="outline">Manage Notifications</Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Help & Support</h3>
                    <p className="text-sm text-gray-500">Get help with AgriConnect.</p>
                  </div>
                  <div>
                    <Button variant="outline">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Help Center
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>
      </Tabs>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-gray-600 mb-8">
            Join thousands of farmers who've increased their profits by 40% on average using AgriConnect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              >
                <Heart className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              <Globe className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AgriConnect</span>
              </div>
              <p className="text-gray-400">
                Empowering farmers with AI-driven market intelligence and direct buyer connections.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Market Prices</li>
                <li>Buyer Network</li>
                <li>AI Insights</li>
                <li>Mobile App</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Training</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Security</h3>
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Enterprise-grade security</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AgriConnect. Built with ❤️ for farmers worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


