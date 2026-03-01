'use client'

import { useState, useEffect } from 'react'

// simple type for mock market items
interface MarketItem {
  name: string
  trend: 'up' | 'down'
  value: number
  signal: string
  accuracy: number
}

export default function HomePage() {
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [selectedStrategy, setSelectedStrategy] = useState('matches')
  const [marketData, setMarketData] = useState<MarketItem[]>(generateMockData())
  const [timeLeft, setTimeLeft] = useState(5)

  // Update market data every 5 seconds
  useEffect(() => {
    if (!showAnalysis) return
    
    const timer = setInterval(() => {
      setMarketData(generateMockData())
      setTimeLeft(5)
    }, 5000)

    const countdown = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 5))
    }, 1000)

    return () => {
      clearInterval(timer)
      clearInterval(countdown)
    }
  }, [showAnalysis])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* ========== HEADER - NO LOGIN BUTTONS ========== */}
      <header className="border-b border-purple-800/30 bg-slate-900/95 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Pro Master
                </span>
                <span className="text-white hidden xs:inline"> Analysis</span>
              </h1>
            </div>
            
            {/* FREE Access Badge - Highly Visible */}
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="hidden sm:flex px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500 text-white rounded-full text-xs sm:text-sm font-bold shadow-lg items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                100% FREE - NO PAYMENT
              </span>
              <span className="flex sm:hidden px-3 py-1.5 bg-green-500 text-white rounded-full text-xs font-bold">
                FREE
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ========== HERO SECTION - EMPHASIZE FREE ========== */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          {/* Free Banner */}
          <div className="inline-block mb-6 sm:mb-8 animate-float">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs sm:text-sm font-bold shadow-lg inline-flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 12H4M12 4v16" />
              </svg>
              COMPLETELY FREE - NO CREDIT CARD NEEDED
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6">
            Master Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block mt-2 sm:mt-0">
              Trading Game
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Advanced AI-powered analysis tool for traders. 
            <span className="block text-green-400 font-bold text-xl sm:text-2xl mt-3 sm:mt-4">
              🔓 FREE FOREVER • NO PAYMENT • NO REGISTRATION
            </span>
          </p>
          
          {/* Free Access Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button 
              onClick={() => setShowAnalysis(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold shadow-lg glow-effect"
            >
              🚀 Launch Free Analysis Tool
            </button>
            <button className="border-2 border-green-500 text-green-400 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-500/10 transition-all duration-300 font-semibold bg-transparent">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
              </svg>
              Free WhatsApp Support
            </button>
          </div>

          {/* Trust Indicators - NO PAYMENT MENTIONED */}
          <div className="grid grid-cols-2 sm:flex flex-wrap gap-3 sm:gap-8 justify-center text-gray-400 bg-white/5 p-4 sm:p-6 rounded-2xl backdrop-blur-sm max-w-4xl mx-auto">
            <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
              <span className="text-green-400">✓</span> No Credit Card
            </span>
            <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
              <span className="text-green-400">✓</span> No Signup
            </span>
            <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
              <span className="text-green-400">✓</span> Real-time Data
            </span>
            <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
              <span className="text-green-400">✓</span> Free Forever
            </span>
            <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
              <span className="text-green-400">✓</span> No Hidden Costs
            </span>
          </div>
        </div>
      </section>

      {/* ========== LIVE ANALYSIS TOOL - FREE ACCESS ========== */}
      {showAnalysis && (
        <section className="py-8 sm:py-12 px-4 sm:px-6 bg-slate-800/50">
          <div className="container mx-auto">
            <div className="bg-slate-800 rounded-xl sm:rounded-2xl border border-purple-500/30 p-4 sm:p-6 shadow-2xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Live Market Analysis</h2>
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm text-gray-400">Next update: {timeLeft}s</span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm border border-green-500/30">
                    ⚡ FREE ACCESS • REAL-TIME
                  </span>
                </div>
              </div>

              {/* Strategy Selector */}
              <div className="flex gap-2 mb-4 sm:mb-6 overflow-x-auto pb-2 scrollbar-thin">
                {['matches', 'even/odd', 'over/under', 'rise/fall'].map((strategy) => (
                  <button
                    key={strategy}
                    onClick={() => setSelectedStrategy(strategy)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                      selectedStrategy === strategy
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {strategy.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>

              {/* Analysis Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {marketData.map((item, index) => (
                  <div key={index} className="bg-slate-700/50 p-3 sm:p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition">
                    <div className="text-xs sm:text-sm text-gray-400">{item.name}</div>
                    <div className={`text-xl sm:text-2xl font-bold mt-1 ${item.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                      {item.trend === 'up' ? '↑' : '↓'} {item.value}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">Signal: {item.signal}</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                        {item.accuracy}% acc
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-400 bg-slate-700/30 p-3 rounded-lg">
                🎯 Free real-time updates every 5 seconds • No usage limits • Completely free for everyone
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== FEATURES SECTION - ALL FREE ========== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 text-purple-400 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 border border-purple-500/30">
              🎁 100% FREE FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Everything is <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Completely Free</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              No premium tiers. No hidden costs. All features available to everyone forever.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

// simple generator for mock market data
function generateMockData(): MarketItem[] {
  const symbols = ['BTC', 'ETH', 'XRP', 'LTC', 'ADA', 'SOL', 'DOGE', 'DOT']
  return symbols.map((name) => ({
    name,
    trend: Math.random() > 0.5 ? 'up' : 'down',
    value: Math.floor(Math.random() * 10000),
    signal: Math.random() > 0.5 ? 'BUY' : 'SELL',
    accuracy: Math.floor(Math.random() * 100),
  }))
}
