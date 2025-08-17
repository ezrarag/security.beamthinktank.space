'use client'

import { Shield, Users, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            BEAM Security & Protective Services Guild
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Empowering communities through professional security training, disaster response, and local protective services
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary-200" />
              <span className="text-primary-100">Professional Training</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-primary-200" />
              <span className="text-primary-100">Community Safety</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary-200" />
              <span className="text-primary-100">Volunteer Network</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              Find Local Services
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
