'use client'

import { Shield, GraduationCap, Users, Heart, Clock, DollarSign } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Professional Security Training',
    description: 'Comprehensive certification programs for private security, emergency response, and community safety.',
    color: 'text-security-600'
  },
  {
    icon: GraduationCap,
    title: 'Certification Programs',
    description: 'Industry-recognized credentials in security operations, disaster response, and protective services.',
    color: 'text-primary-600'
  },
  {
    icon: Users,
    title: 'Community Safety Networks',
    description: 'Local protective service nodes that coordinate neighborhood watch and emergency response.',
    color: 'text-green-600'
  },
  {
    icon: Heart,
    title: 'Volunteer Opportunities',
    description: 'Contribute your time to community safety through guard shifts and emergency response.',
    color: 'text-red-600'
  },
  {
    icon: Clock,
    title: 'Time Donations',
    description: 'Volunteer for community watch shifts, training sessions, and emergency preparedness.',
    color: 'text-purple-600'
  },
  {
    icon: DollarSign,
    title: 'Financial Support',
    description: 'Donate to fund training programs, equipment, and community safety initiatives.',
    color: 'text-yellow-600'
  }
]

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BEAM Security provides comprehensive protective services through professional training, 
            community networks, and volunteer coordination to ensure community safety and disaster preparedness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're looking to enhance your security skills, contribute to community safety, 
              or support our mission financially, there's a place for you in the BEAM Security Guild.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Certified
              </button>
              <button className="btn-secondary">
                Volunteer Now
              </button>
              <button className="btn-primary">
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
