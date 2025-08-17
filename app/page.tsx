import CitySelector from '@/components/CitySelector'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import DonationSection from '@/components/DonationSection'
import VolunteerSection from '@/components/VolunteerSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <CitySelector />
      <Features />
      <DonationSection />
      <VolunteerSection />
    </main>
  )
}
