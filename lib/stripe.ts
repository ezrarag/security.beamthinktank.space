import { loadStripe } from '@stripe/stripe-js'

export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// Stripe configuration for donations
export const createDonationIntent = async (amount: number, purpose: string) => {
  try {
    const response = await fetch('/api/create-donation-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        purpose,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to create donation intent')
    }

    const data = await response.json()
    return data.clientSecret
  } catch (error) {
    console.error('Error creating donation intent:', error)
    throw error
  }
}

// Donation amounts in cents
export const DONATION_AMOUNTS = {
  SMALL: 2500,    // $25.00
  MEDIUM: 10000,  // $100.00
  LARGE: 25000,   // $250.00
  XLARGE: 50000,  // $500.00
}

// Donation purposes
export const DONATION_PURPOSES = [
  'Training Programs',
  'Equipment & Gear',
  'Community Outreach',
  'Disaster Response',
  'General Support'
]
