# Deployment Guide - BEAM Security Guild

## 🚀 Quick Deploy to Vercel

### 1. Push to GitHub
```bash
# Add your GitHub remote
git remote add origin https://github.com/yourusername/beam-security-guild.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Add environment variables (see below)
6. Click "Deploy"

## 🔧 Environment Variables Setup

### In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

### Local Development:
1. Copy `env.example` to `.env.local`
2. Fill in your actual values
3. Restart the dev server

## 🗄️ Supabase Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Note your project URL and anon key

### 2. Database Schema
Run these SQL commands in Supabase SQL editor:

```sql
-- Volunteers table
CREATE TABLE volunteers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  skills TEXT[] DEFAULT '{}',
  availability TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Donations table
CREATE TABLE donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  amount INTEGER NOT NULL,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  purpose TEXT NOT NULL,
  anonymous BOOLEAN DEFAULT FALSE,
  stripe_payment_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Training classes table
CREATE TABLE training_classes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  instructor TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  max_participants INTEGER DEFAULT 20,
  current_participants INTEGER DEFAULT 0,
  price INTEGER DEFAULT 0,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Service activations table
CREATE TABLE service_activations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL,
  description TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'completed')),
  volunteers_needed INTEGER DEFAULT 1,
  volunteers_committed INTEGER DEFAULT 0,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Cities table
CREATE TABLE cities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  state TEXT NOT NULL,
  services TEXT[] DEFAULT '{}',
  coordinator_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_activations ENABLE ROW LEVEL SECURITY;
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
```

## 💳 Stripe Setup

### 1. Create Stripe Account
1. Go to [stripe.com](https://stripe.com)
2. Sign up and complete account setup
3. Get your API keys from the dashboard

### 2. Webhook Configuration
1. In Stripe dashboard, go to "Developers" > "Webhooks"
2. Add endpoint: `https://your-domain.vercel.app/api/stripe-webhook`
3. Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Copy webhook secret to environment variables

## 🔄 Auto-Deploy Setup

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

## 🧪 Testing Deployment

### 1. Build Test
```bash
npm run build
```

### 2. Start Production Server
```bash
npm start
```

### 3. Check for Errors
- Review Vercel build logs
- Check environment variables are set
- Verify API endpoints work
- Test Stripe integration

## 📱 Domain & SSL

### Custom Domain
1. In Vercel dashboard, go to "Settings" > "Domains"
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate will be auto-generated

## 🚨 Troubleshooting

### Common Issues:
- **Build fails**: Check environment variables
- **API errors**: Verify Supabase connection
- **Stripe issues**: Check API keys and webhooks
- **Database errors**: Verify table schema and RLS policies

### Support:
- Check Vercel build logs
- Review Supabase logs
- Test Stripe webhook delivery
- Verify environment variable names

## 🎯 Next Steps After Deployment

1. **Test all features** on live site
2. **Set up monitoring** and error tracking
3. **Configure analytics** (Google Analytics, etc.)
4. **Set up backup** and recovery procedures
5. **Document** any custom configurations
