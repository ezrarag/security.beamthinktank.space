'use client'

import { useState } from 'react'
import { Heart, DollarSign, Target, Users, Shield } from 'lucide-react'

const donationTiers = [
  {
    amount: 25,
    title: 'Community Supporter',
    description: 'Help fund basic training materials and equipment',
    benefits: ['Training materials', 'Equipment support', 'Newsletter access']
  },
  {
    amount: 100,
    title: 'Safety Partner',
    description: 'Support certification programs and community outreach',
    benefits: ['Certification funding', 'Community programs', 'Volunteer coordination']
  },
  {
    amount: 250,
    title: 'Protection Guardian',
    description: 'Major contribution to disaster response and advanced training',
    benefits: ['Disaster response', 'Advanced training', 'Priority access']
  },
  {
    amount: 500,
    title: 'Security Champion',
    description: 'Leadership level support for comprehensive programs',
    benefits: ['All benefits', 'Leadership recognition', 'Advisory role']
  }
]

const fundraisingGoals = [
  { category: 'Training Programs', target: 50000, raised: 32000, icon: Shield },
  { category: 'Equipment & Gear', target: 30000, raised: 18500, icon: Target },
  { category: 'Community Outreach', target: 20000, raised: 12000, icon: Users },
  { category: 'Disaster Response', target: 40000, raised: 28000, icon: Heart }
]

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number>(100)
  const [customAmount, setCustomAmount] = useState<string>('')

  const handleDonation = () => {
    // TODO: Integrate with Stripe
    console.log('Processing donation:', selectedAmount || customAmount)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Support Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your donations directly fund training programs, equipment, and community safety initiatives. 
            Every contribution helps build stronger, safer communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Donation Form */}
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Make a Donation
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Amount
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {donationTiers.map((tier) => (
                    <button
                      key={tier.amount}
                      onClick={() => setSelectedAmount(tier.amount)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedAmount === tier.amount
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="text-2xl font-bold">${tier.amount}</div>
                      <div className="text-sm text-gray-600">{tier.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
              </div>

              <button
                onClick={handleDonation}
                className="btn-primary w-full text-lg py-3"
              >
                <DollarSign className="w-5 h-5 inline mr-2" />
                Donate Now
              </button>
            </div>
          </div>

          {/* Fundraising Progress */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Fundraising Progress
            </h3>
            
            {fundraisingGoals.map((goal, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <goal.icon className="w-5 h-5 text-primary-600" />
                    <span className="font-medium text-gray-900">{goal.category}</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    ${goal.raised.toLocaleString()} / ${goal.target.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(goal.raised / goal.target) * 100}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {Math.round((goal.raised / goal.target) * 100)}% Complete
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <Heart className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Your Impact
          </h3>
          <p className="text-lg text-primary-800 max-w-3xl mx-auto">
            Every donation helps us train more security professionals, equip community responders, 
            and build safer neighborhoods. Together, we're creating a network of protection that spans communities nationwide.
          </p>
        </div>
      </div>
    </section>
  )
}
