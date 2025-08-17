'use client'

import { useState } from 'react'
import { MapPin, Search } from 'lucide-react'

const cities = [
  { id: 1, name: 'New York', state: 'NY', services: ['Security Training', 'Disaster Response', 'Community Watch'] },
  { id: 2, name: 'Los Angeles', state: 'CA', services: ['Private Security', 'Emergency Response', 'Volunteer Coordination'] },
  { id: 3, name: 'Chicago', state: 'IL', services: ['Security Certification', 'Community Safety', 'Training Programs'] },
  { id: 4, name: 'Houston', state: 'TX', services: ['Disaster Response', 'Security Services', 'Volunteer Network'] },
  { id: 5, name: 'Phoenix', state: 'AZ', services: ['Community Protection', 'Security Training', 'Emergency Services'] },
]

export default function CitySelector() {
  const [selectedCity, setSelectedCity] = useState<typeof cities[0] | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.state.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Local Protective Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Locate BEAM Security nodes in your area for training, certification, and community safety programs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for your city or state..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCities.map((city) => (
              <div
                key={city.id}
                className={`card cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedCity?.id === city.id ? 'ring-2 ring-primary-500 bg-primary-50' : ''
                }`}
                onClick={() => setSelectedCity(city)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {city.name}, {city.state}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {city.services.map((service, index) => (
                    <li key={index} className="text-gray-600 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary w-full mt-4">
                  View Services
                </button>
              </div>
            ))}
          </div>

          {selectedCity && (
            <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Services Available in {selectedCity.name}, {selectedCity.state}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedCity.services.map((service, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-primary-200">
                    <h4 className="font-medium text-primary-900 mb-2">{service}</h4>
                    <p className="text-sm text-gray-600">
                      Professional training and certification programs available
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
