'use client'

import { useState } from 'react'
import { Clock, Users, MapPin, Calendar, Shield, Heart } from 'lucide-react'

const volunteerOpportunities = [
  {
    id: 1,
    title: 'Community Watch Shift',
    location: 'Downtown District',
    duration: '4 hours',
    date: '2024-01-15',
    type: 'Security',
    description: 'Patrol designated areas and report suspicious activity',
    requirements: ['Basic training', 'Background check', 'Reliable transportation']
  },
  {
    id: 2,
    title: 'Training Session Assistant',
    location: 'Community Center',
    duration: '3 hours',
    date: '2024-01-20',
    type: 'Education',
    description: 'Help facilitate security training sessions for new volunteers',
    requirements: ['Previous training', 'Good communication skills', 'Patience']
  },
  {
    id: 3,
    title: 'Emergency Response Team',
    location: 'City-wide',
    duration: 'On-call',
    date: 'Ongoing',
    type: 'Emergency',
    description: 'Respond to emergency situations and provide assistance',
    requirements: ['Advanced certification', 'Physical fitness', '24/7 availability']
  },
  {
    id: 4,
    title: 'Fundraising Coordinator',
    location: 'Remote',
    duration: 'Flexible',
    date: 'Ongoing',
    type: 'Administrative',
    description: 'Organize fundraising events and donor outreach',
    requirements: ['Organizational skills', 'Communication', 'Event planning']
  }
]

const timeCommitments = [
  { hours: 2, label: '2 hours/week', description: 'Perfect for busy schedules' },
  { hours: 5, label: '5 hours/week', description: 'Regular community involvement' },
  { hours: 10, label: '10 hours/week', description: 'Dedicated volunteer commitment' },
  { hours: 20, label: '20+ hours/week', description: 'Leadership and training roles' }
]

export default function VolunteerSection() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<typeof volunteerOpportunities[0] | null>(null)
  const [selectedCommitment, setSelectedCommitment] = useState<number>(5)

  const handleVolunteerSignup = () => {
    // TODO: Integrate with Supabase for volunteer management
    console.log('Volunteer signup:', selectedOpportunity, selectedCommitment)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Volunteer Your Time
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our network of dedicated volunteers who contribute their time and skills 
            to build safer communities. Every hour counts towards our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Volunteer Opportunities */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Available Opportunities
            </h3>
            
            <div className="space-y-4">
              {volunteerOpportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className={`card cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedOpportunity?.id === opportunity.id ? 'ring-2 ring-primary-500 bg-primary-50' : ''
                  }`}
                  onClick={() => setSelectedOpportunity(opportunity)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {opportunity.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {opportunity.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {opportunity.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {opportunity.date}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{opportunity.description}</p>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary-600" />
                        <span className="text-sm text-primary-600 font-medium">
                          {opportunity.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Commitment & Details */}
          <div className="space-y-8">
            {/* Time Commitment */}
            <div className="card">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Time Commitment
              </h4>
              <div className="space-y-3">
                {timeCommitments.map((commitment) => (
                  <button
                    key={commitment.hours}
                    onClick={() => setSelectedCommitment(commitment.hours)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedCommitment === commitment.hours
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="font-semibold">{commitment.label}</div>
                    <div className="text-sm text-gray-600">{commitment.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Opportunity Details */}
            {selectedOpportunity && (
              <div className="card">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Opportunity Details
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Requirements:</h5>
                    <ul className="space-y-1">
                      {selectedOpportunity.requirements.map((req, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={handleVolunteerSignup}
                    className="btn-primary w-full"
                  >
                    <Heart className="w-4 h-4 inline mr-2" />
                    Sign Up to Volunteer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Volunteer Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">2,500+</div>
              <div className="text-gray-600">Volunteer Hours</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">25</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
