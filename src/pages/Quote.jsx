import React, { useState } from 'react'

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: [],
    budget: '',
    timeline: '',
    description: '',
    priority: 'medium'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  // Services matching ServicesPreview component + Consulting & DevOps
  const services = [
    'Web Development',
    'UI / UX & Design',
    'Automation & AI',
    'Digital Marketing',
    'Digital Maintenance',
    'Photography',
    'Video Production',
    'Consulting',
    'DevOps'
  ]

  // Budget ranges in INR
  const budgetRanges = [
    '₹10K - ₹25K',
    '₹25K - ₹50K',
    '₹50K - ₹75K',
    '₹75K - ₹1L',
    '₹1L+'
  ]

  const timelines = [
    '1-2 weeks',
    '3-4 weeks',
    '1-2 months',
    '3-4 months',
    '5-6 months',
    'Flexible'
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox' && name === 'services') {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Prepare data for Google Sheet
      const sheetData = {
        Timestamp: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
        Name: formData.name,
        Email: formData.email,
        Company: formData.company || 'N/A',
        Services: formData.services.join(', ') || 'None selected',
        Budget: formData.budget || 'Not specified',
        Timeline: formData.timeline || 'Not specified',
        Priority: formData.priority === 'low' ? 'Standard' : 
                 formData.priority === 'medium' ? 'Priority' : 'Express',
        Description: formData.description,
        Status: 'New',
        Notes: ''
      }

      // Send data to Google Sheet via SheetDB
      const response = await fetch('https://sheetdb.io/api/v1/wxhkcc0bvqvn9', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [sheetData]
        })
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Quote request submitted successfully:', result)
        setSubmitStatus('success')
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          services: [],
          budget: '',
          timeline: '',
          description: '',
          priority: 'medium'
        })
      } else {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      console.error('Error submitting quote request:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#171717] text-white min-h-screen pt-24 w-full overflow-hidden">
      {/* Skip to main content */}
      <a href="#main" className="skip-link absolute left-[-9999px] top-2 z-50 bg-purple-600 text-white px-4 py-2 focus:left-4 transition-all">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-5">Get Quote</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
            Transform Your Vision
            <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Into Reality
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            Ready to bring your ideas to life? Share your project details and get a personalized quote tailored to your needs within 24 hours.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>24hr response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>No commitment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main" className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/40 rounded-2xl p-8 sm:p-10 border border-neutral-700/30 backdrop-blur-sm">
            
            {/* Personal Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">
                  1
                </div>
                <h2 className="text-2xl font-bold text-white">Contact Information</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your company name (optional)"
                />
              </div>
            </div>

            {/* Services Selection */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">
                  2
                </div>
                <h2 className="text-2xl font-bold text-white">Services Needed</h2>
              </div>
              <p className="text-neutral-400 mb-6">Select all services that apply to your project</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <label key={service} className="group flex items-center p-4 bg-neutral-800/30 rounded-xl border border-neutral-600/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-200 cursor-pointer">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="mr-3 w-4 h-4 text-purple-600 bg-transparent border-neutral-400 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget and Timeline */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">
                  3
                </div>
                <h2 className="text-2xl font-bold text-white">Project Scope</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-neutral-300 mb-2">
                    Estimated Budget (INR)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-neutral-300 mb-2">
                    Desired Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Project Priority */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">
                  4
                </div>
                <h2 className="text-2xl font-bold text-white">Project Priority</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { value: 'low', label: 'Standard', desc: 'Flexible timeline, budget-friendly', icon: '📅' },
                  { value: 'medium', label: 'Priority', desc: 'Balanced timeline and quality', icon: '⚡' },
                  { value: 'high', label: 'Express', desc: 'Rush delivery, premium pricing', icon: '🚀' }
                ].map((priority) => (
                  <label key={priority.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="priority"
                      value={priority.value}
                      checked={formData.priority === priority.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`p-5 rounded-xl border-2 transition-all duration-200 ${
                      formData.priority === priority.value
                        ? 'border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/25'
                        : 'border-neutral-600/30 bg-neutral-800/30 hover:border-purple-500/50 hover:bg-purple-500/5'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{priority.icon}</span>
                        <div className="font-semibold text-white">{priority.label}</div>
                      </div>
                      <div className="text-sm text-neutral-400">{priority.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">
                  5
                </div>
                <h2 className="text-2xl font-bold text-white">Project Description</h2>
              </div>
              
              {/* Description Guidelines */}
              <div className="mb-6 p-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl border border-blue-500/10">
                <h3 className="font-semibold text-lg mb-3 text-blue-300">💡 Help us understand your vision</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-300">
                  <div>
                    <p className="font-medium mb-2">✅ What to include:</p>
                    <ul className="space-y-1 text-neutral-400">
                      <li>• Project goals & objectives</li>
                      <li>• Target audience or users</li>
                      <li>• Key features needed</li>
                      <li>• Success metrics</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">🎯 Be specific about:</p>
                    <ul className="space-y-1 text-neutral-400">
                      <li>• Platform requirements</li>
                      <li>• Integration needs</li>
                      <li>• Design preferences</li>
                      <li>• Technical constraints</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Templates (moved above textarea) */}
              <div className="mt-6">
                <p className="text-sm font-medium text-neutral-300 mb-3">🚀 Quick start templates:</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    {
                      title: "Website",
                      template: "I need a professional website for my [business type]. Key features needed:\n• [List main pages/features]\n• Target audience: [describe users]\n• Design style: [modern/classic/minimal]\n• Must integrate with: [existing tools]\n• Success goal: [specific metric]"
                    },
                    {
                      title: "E-commerce",
                      template: "I want to build an online store for [product type]. Requirements:\n• [Number] of products across [categories]\n• Payment methods: [Razorpay/Stripe/etc]\n• Shipping integration needed\n• Admin panel for inventory\n• Mobile-first design\n• Expected traffic: [visitors/month]"
                    },
                    {
                      title: "App/Software",
                      template: "I need a [web app/mobile app] for [purpose]. Core functionality:\n• User authentication and profiles\n• [Main feature 1]\n• [Main feature 2]\n• [Main feature 3]\n• Platform: [web/iOS/Android/all]\n• Users: [expected number]\n• Monetization: [subscription/ads/free]"
                    },
                    {
                      title: "Automation",
                      template: "I want to automate [process/workflow]. Current process:\n• [Step 1 - manual task]\n• [Step 2 - manual task]\n• Time spent: [hours per week]\n• Tools used: [current software]\n• Integration needed: [systems to connect]\n• Expected savings: [time/cost]"
                    },
                    {
                      title: "Design/Branding",
                      template: "I need design work for [company/product]. Requirements:\n• Brand style: [describe preferred look]\n• Deliverables: [logo/website/marketing materials]\n• Target market: [describe audience]\n• Competitors: [examples for reference]\n• Usage: [where designs will be used]\n• Timeline: [when needed]"
                    },
                    {
                      title: "Marketing",
                      template: "I need digital marketing help for [business/product]. Goals:\n• Increase [leads/sales/awareness] by [target %]\n• Target audience: [demographics/location]\n• Current marketing: [what you're doing now]\n• Budget: [monthly marketing spend]\n• Platforms: [Google/Facebook/Instagram/LinkedIn]\n• Timeline: [campaign duration]"
                    }
                  ].map((template, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, description: template.template }))}
                      className="text-left p-3 bg-neutral-800/30 hover:bg-purple-500/10 border border-neutral-600/20 hover:border-purple-500/30 rounded-lg transition-all duration-200 group"
                    >
                      <div className="font-medium text-sm text-white group-hover:text-purple-300 transition-colors">
                        📝 {template.title}
                      </div>
                      <div className="text-xs text-neutral-500 mt-1">Click to use template</div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-neutral-500 mt-3">
                  💡 Tip: Choose a template and customize it with your specific details
                </p>
              </div>

              <label htmlFor="description" className="block text-sm font-medium text-neutral-300 mb-3 mt-6">
                Tell us about your project *
                <span className="text-xs text-neutral-500 ml-2">(The more details, the better quote we can provide)</span>
              </label>
              
              <div className="relative">
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-4 py-4 bg-neutral-800/50 border border-neutral-600/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-vertical leading-relaxed"
                  placeholder="Example: We need a modern e-commerce website for our organic food business. The site should have:

• Product catalog with 200+ items and categories
• Shopping cart and secure payment processing (Razorpay/Stripe)
• User accounts with order history
• Admin panel for inventory management
• Mobile-responsive design with fast loading
• SEO optimization for local search

Target audience: Health-conscious consumers aged 25-45 in Mumbai and Delhi. We want a clean, trustworthy design similar to BigBasket but with a more premium feel. Must integrate with our existing inventory system (API available).

Current website gets 50k monthly visitors. Goal is to achieve 20% conversion rate and handle 1000+ orders/month."
                />
                
                {/* Character Counter */}
                <div className="absolute bottom-3 right-3 text-xs text-neutral-500">
                  {formData.description.length}/2000
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Quote request submitted successfully!</span>
                  </div>
                  <p className="text-sm text-green-300 mt-1">We'll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-red-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span className="font-medium">Something went wrong</span>
                  </div>
                  <p className="text-sm text-red-300 mt-1">Please try again or contact us directly.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-800 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <span className="flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get My Custom Quote
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
              <p className="text-sm text-neutral-400 mt-4">
                🕒 We'll send you a detailed quote within 24 hours • 📞 No pushy sales calls
              </p>
            </div>
          </form>

          {/* What Happens Next */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">What happens next?</h3>
              <p className="text-neutral-400 max-w-2xl mx-auto">Our streamlined process ensures you get exactly what you need, when you need it.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-3xl">�</span>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-white">1. Review & Analysis</h4>
                <p className="text-neutral-400 text-sm">
                  We carefully analyze your requirements and research your industry to understand your needs.
                </p>
              </div>
              
              <div className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-white">2. Strategy & Planning</h4>
                <p className="text-neutral-400 text-sm">
                  We develop a customized strategy and detailed project plan tailored to your goals.
                </p>
              </div>
              
              <div className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-3xl">💰</span>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-white">3. Custom Quote</h4>
                <p className="text-neutral-400 text-sm">
                  Receive a detailed quote with timeline, deliverables, and transparent pricing.
                </p>
              </div>
              
              <div className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-3xl">🚀</span>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-white">4. Project Kickoff</h4>
                <p className="text-neutral-400 text-sm">
                  Once approved, we begin development with regular updates and milestone reviews.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-2xl border border-purple-500/20">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-300 mb-1">24hrs</div>
                <div className="text-sm text-neutral-400">Average response time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-300 mb-1">100+</div>
                <div className="text-sm text-neutral-400">Projects delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-300 mb-1">98%</div>
                <div className="text-sm text-neutral-400">Client satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Quote
