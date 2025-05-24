"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Sprout,
  Brain,
  TrendingUp,
  MapPin,
  Zap,
  Target,
  BarChart3,
  Lightbulb,
  MessageSquare,
  Send,
  Sparkles,
  Clock,
  DollarSign,
  Leaf,
  Home,
  Settings,
  Bell,
} from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AIInsightsPage() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "ai",
      message:
        "Hello! I'm your AI farming assistant. I can help you with market analysis, crop recommendations, pricing strategies, and more. What would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const insights = [
    {
      title: "Optimal Harvest Timing",
      description:
        "Based on weather patterns and market demand, harvest your tomatoes in the next 48 hours for maximum profit.",
      confidence: 94,
      impact: "High",
      category: "Timing",
      action: "Schedule harvest for tomorrow morning",
    },
    {
      title: "Price Prediction",
      description: "Onion prices are expected to rise 18% next week due to supply shortage in neighboring regions.",
      confidence: 87,
      impact: "High",
      category: "Pricing",
      action: "Hold inventory for 5-7 days",
    },
    {
      title: "New Market Opportunity",
      description:
        "Organic certification could increase your crop value by 35%. Consider transitioning 30% of your land.",
      confidence: 82,
      impact: "Medium",
      category: "Strategy",
      action: "Research organic certification process",
    },
    {
      title: "Crop Diversification",
      description: "Bell peppers show strong demand growth. Consider allocating 20% of next season to this crop.",
      confidence: 78,
      impact: "Medium",
      category: "Planning",
      action: "Plan for next planting season",
    },
  ]

  const marketPredictions = [
    { crop: "Tomatoes", currentPrice: 45, predictedPrice: 52, change: "+15.6%", timeframe: "7 days" },
    { crop: "Onions", currentPrice: 32, predictedPrice: 38, change: "+18.8%", timeframe: "10 days" },
    { crop: "Carrots", currentPrice: 28, predictedPrice: 26, change: "-7.1%", timeframe: "5 days" },
    { crop: "Potatoes", currentPrice: 22, predictedPrice: 25, change: "+13.6%", timeframe: "14 days" },
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      id: chatMessages.length + 1,
      type: "user",
      message: inputMessage,
      timestamp: new Date(),
    }

    setChatMessages([...chatMessages, newMessage])
    setInputMessage("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatMessages.length + 2,
        type: "ai",
        message: generateAIResponse(inputMessage),
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  const generateAIResponse = (userMessage: string) => {
    const responses = [
      "Based on current market data, I recommend focusing on tomatoes this week. Prices are trending upward and demand is high.",
      "Your crop rotation strategy looks good! Consider adding legumes to improve soil nitrogen for next season.",
      "Weather patterns suggest optimal planting conditions in 3-5 days. I'll send you a reminder.",
      "Market analysis shows strong demand for organic produce in your area. Would you like me to analyze certification costs?",
      "Your current pricing is competitive. However, I've identified 3 buyers willing to pay 12% above market rate.",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                AgriConnect
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="bg-green-100 text-green-700">
                <Brain className="w-4 h-4 mr-2" />
                AI Insights
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <Brain className="w-8 h-8 mr-3 text-purple-500" />
            AI-Powered Insights
          </h1>
          <p className="text-gray-600">
            Get personalized recommendations and market intelligence powered by advanced AI
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Insights */}
          <div className="lg:col-span-2 space-y-8">
            {/* Smart Recommendations */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
                  Smart Recommendations
                </CardTitle>
                <CardDescription>AI-generated insights tailored to your farm and market conditions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {insights.map((insight, index) => (
                  <div
                    key={index}
                    className="p-6 border rounded-lg hover:shadow-md transition-all duration-300 hover:border-green-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{insight.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {insight.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{insight.description}</p>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Target className="w-4 h-4 text-blue-500" />
                            <span className="text-sm text-gray-500">Confidence: {insight.confidence}%</span>
                          </div>
                          <Badge variant={insight.impact === "High" ? "default" : "secondary"}>
                            {insight.impact} Impact
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-green-600 font-medium">
                          <Lightbulb className="w-4 h-4 mr-1" />
                          {insight.action}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-500">
                        Apply Recommendation
                      </Button>
                      <Button size="sm" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Market Predictions */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                  Price Predictions
                </CardTitle>
                <CardDescription>AI-powered price forecasts based on market trends and historical data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketPredictions.map((prediction, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                          <Leaf className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{prediction.crop}</h3>
                          <p className="text-sm text-gray-500">Current: ${prediction.currentPrice}/kg</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-lg font-bold">${prediction.predictedPrice}</span>
                          <Badge variant={prediction.change.startsWith("+") ? "default" : "destructive"}>
                            {prediction.change}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {prediction.timeframe}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - AI Chat */}
          <div className="space-y-8">
            {/* AI Assistant Chat */}
            <Card className="bg-white/80 backdrop-blur-sm h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-green-500" />
                  AI Assistant
                </CardTitle>
                <CardDescription>
                  Ask questions about your farm, market trends, or get personalized advice
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {chatMessages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === "user"
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${message.type === "user" ? "text-green-100" : "text-gray-500"}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask your AI assistant..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="sm">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Quick AI Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="secondary" className="w-full justify-start text-gray-800">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analyze Market Trends
                </Button>
                <Button variant="secondary" className="w-full justify-start text-gray-800">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Optimize Pricing Strategy
                </Button>
                <Button variant="secondary" className="w-full justify-start text-gray-800">
                  <Leaf className="w-4 h-4 mr-2" />
                  Plan Next Season
                </Button>
                <Button variant="secondary" className="w-full justify-start text-gray-800">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find New Markets
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

