# BEAM Security & Protective Services Guild

A Next.js website for the BEAM Security & Protective Services Guild, providing community safety, private security certification, and disaster response training through local protective service nodes.

## Features

- **City Selector**: Find local protective service nodes in your area
- **Donation Integration**: Stripe-powered fundraising for training programs and equipment
- **Volunteer Management**: Time donation system for community service opportunities
- **Training Programs**: Information about security certification and disaster response courses
- **Community Safety**: Local protective service coordination and neighborhood watch programs

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd beam-security-guild
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── CitySelector.tsx   # City selection interface
│   ├── DonationSection.tsx # Donation and fundraising
│   ├── Features.tsx       # Service features
│   ├── Hero.tsx           # Hero section
│   └── VolunteerSection.tsx # Volunteer opportunities
├── lib/                    # Utility libraries
│   ├── supabase.ts        # Supabase client
│   └── stripe.ts          # Stripe configuration
├── public/                 # Static assets
└── package.json            # Dependencies and scripts
```

## Key Components

### City Selector
- Interactive city search and selection
- Service availability display
- Local node information

### Donation System
- Tiered donation options
- Stripe payment processing
- Fundraising progress tracking
- Impact visualization

### Volunteer Management
- Opportunity browsing
- Time commitment selection
- Skill-based matching
- Registration system

## Database Schema

The application uses Supabase with the following main tables:

- **Volunteers**: User profiles, skills, availability
- **Donations**: Financial contributions and tracking
- **TrainingClasses**: Course offerings and schedules
- **ServiceActivations**: Emergency response and community service events

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the BEAM Security team or create an issue in this repository.
