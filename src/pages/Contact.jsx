import React from 'react'
import useSEO from '../hooks/useSEO'

const Contact = () => {
  useSEO({
    title: 'Contact NextGen Labz | Start Your Project or Get a Consultation',
    description: 'Contact NextGen Labz to discuss web development, UI/UX design, automation, marketing or product strategy. Fast response within 24 hours via call, email or WhatsApp.',
    keywords: 'contact NextGen Labz, hire web developer, freelance product studio contact, WhatsApp web agency, consultation web design',
    canonical: 'https://www.nextgenlabz.studio/contact',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contact NextGen Labz',
        'url': 'https://www.nextgenlabz.studio/contact'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What services do you offer?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We provide web development, UI/UX design, automation & AI workflows, digital marketing, maintenance, photography, video production, consulting and DevOps.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How long does a typical project take?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Most standard websites take 2–6 weeks depending on scope. Complex apps can run longer with iterative releases.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do you work with international clients?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, we collaborate remotely with clients globally using async updates and scheduled calls.'
            }
          }
        ]
      }
    ]
  })
  return (
    <div className="bg-[#171717] text-white min-h-screen pt-24">
      {/* Skip to main content */}
      <a href="#main" className="skip-link absolute left-[-9999px] top-2 z-50 bg-purple-600 text-white px-4 py-2 focus:left-4 transition-all">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
            Ready to Connect?
            <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Let's Talk Business
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            Have a project in mind? Need expert consultation? We're here to help you transform your ideas into digital reality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main id="main" className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Information */}
            <div className="order-1">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
                  Get in Touch
                </h2>
                
                {/* Contact Methods */}
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                      <p className="text-neutral-400 mb-2">Ready to discuss your project?</p>
                      <div className="space-y-1">
                        <a href="tel:+917454916178" className="block text-purple-400 hover:text-purple-300 transition-colors">
                          +91 7454916178
                        </a>
                        <a href="tel:+917037500363" className="block text-purple-400 hover:text-purple-300 transition-colors">
                          +91 7037500363
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <p className="text-neutral-400 mb-2">For detailed discussions and proposals</p>
                      <a href="mailto:hello@nextgenlabz.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                        hello@nextgenlabz.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                      <p className="text-neutral-400 mb-3">Quick chat and instant responses</p>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href="https://wa.me/917454916178"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
                          aria-label="Chat on WhatsApp +91 7454916178"
                        >
                          💬 WhatsApp +91 7454916178
                        </a>
                        <a
                          href="https://wa.me/917037500363"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
                          aria-label="Chat on WhatsApp +91 7037500363"
                        >
                          💬 WhatsApp +91 7037500363
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Follow Us</h3>
                      <p className="text-neutral-400 mb-2">Stay updated with our latest work</p>
                      <a href="https://www.instagram.com/nextgen.labz/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                        @nextgen.labz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Schedule a Call</h3>
                      <p className="text-neutral-400 mb-2">Let's discuss your project requirements</p>
                      <p className="text-purple-400">
                        Available Monday - Saturday, 9 AM - 7 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="mt-12 p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-2">⚡ Quick Response</h3>
                  <p className="text-neutral-300 text-sm">
                    We typically respond within 2-4 hours during business hours. For urgent matters, give us a call directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Services & Next Steps */}
            <div className="order-2">
              <div className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/40 rounded-2xl p-8 border border-neutral-700/30">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                  What's Next?
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Initial Consultation</h3>
                      <p className="text-neutral-400 text-sm">We'll discuss your project goals, requirements, and timeline to understand your vision.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Proposal & Planning</h3>
                      <p className="text-neutral-400 text-sm">We'll create a detailed proposal with project scope, timeline, and investment breakdown.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Design & Development</h3>
                      <p className="text-neutral-400 text-sm">We'll start working on your project with regular updates and milestone reviews.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-400">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Launch & Support</h3>
                      <p className="text-neutral-400 text-sm">We'll deploy your project and provide ongoing support to ensure everything runs smoothly.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/10 to-purple-500/10 rounded-xl border border-purple-500/20">
                  <h3 className="font-semibold mb-2 text-purple-300">Ready to get started?</h3>
                  <p className="text-neutral-300 text-sm mb-4">
                    Choose the best way to reach us and let's bring your ideas to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+917454916178"
                      className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-medium transition-colors"
                    >
                      📞 Call +91 7454916178
                    </a>
                    <a
                      href="tel:+917037500363"
                      className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-medium transition-colors"
                    >
                      📞 Call +91 7037500363
                    </a>
                    <a 
                      href="https://wa.me/917454916178" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-sm font-medium transition-colors"
                    >
                      💬 WhatsApp
                    </a>
                    <a 
                      href="https://www.instagram.com/nextgen.labz/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-purple-500/50 hover:border-purple-400 rounded-lg text-sm font-medium transition-colors"
                    >
                      📱 Instagram DM
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-8 bg-gradient-to-br from-neutral-800/40 to-neutral-900/40 rounded-2xl p-8 border border-neutral-700/30">
                <h3 className="font-semibold text-lg mb-4">Common Questions</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-neutral-200 mb-1">What services do you offer?</p>
                    <p className="text-neutral-400">We specialize in web development, UI/UX design, automation, digital marketing, and more.</p>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-200 mb-1">How long does a typical project take?</p>
                    <p className="text-neutral-400">Project timelines vary based on scope, but most websites take 2-6 weeks to complete.</p>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-200 mb-1">Do you work with international clients?</p>
                    <p className="text-neutral-400">Yes, we work with clients globally and are experienced in remote collaboration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
