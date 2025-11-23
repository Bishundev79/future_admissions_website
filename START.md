# 🚀 FutureAdmissions - Quick Start Guide

## Prerequisites

- **Node.js** 18+ and npm installed
- **Git** installed (optional, for version control)

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React 18.3.1
- Vite 7.2.4
- React Router DOM 7.9.6
- Tailwind CSS 3.4.1
- Supabase 2.57.4
- Framer Motion (animations)
- React Hook Form + Zod (form validation)
- Sonner (toast notifications)
- Yet Another React Lightbox (gallery)

### 2. Environment Configuration

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Then edit `.env` and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **Note**: Get these from your Supabase project dashboard at https://supabase.com

### 3. Database Setup

Run the Supabase migrations to create the required tables:

```bash
# If using Supabase CLI
supabase db push

# Or manually run these SQL files in your Supabase SQL editor:
# - supabase/migrations/20251123043508_create_contact_inquiries_table.sql
# - supabase/migrations/20251124000000_add_phone_program_columns.sql
```

## Running the Project

### Development Server

```bash
npm run dev
```

The application will start at **http://localhost:5173/**

### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
project-2/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── layout/         # Navigation, Footer, Layout
│   │   └── ui/             # ImageSkeleton, etc.
│   ├── pages/              # Route page components
│   ├── lib/                # Supabase client configuration
│   └── App.tsx             # Main app with routing
├── supabase/
│   └── migrations/         # Database migration files
└── public/                 # Static assets
```

## Available Routes

- **/** - Home page with Hero, Statistics, and Services
- **/about** - About FutureAdmissions
- **/services** - Admission guidance services
- **/colleges** - Partner colleges showcase
- **/gallery** - Success stories gallery
- **/contact** - Contact form with validation

## Features

✅ Multi-page routing (React Router v7)  
✅ Responsive design (mobile-first, supports < 400px)  
✅ Accessible (ARIA labels, keyboard navigation)  
✅ Form validation (React Hook Form + Zod)  
✅ Toast notifications (Sonner)  
✅ Animated statistics counter (Framer Motion)  
✅ Image lightbox gallery  
✅ Lazy-loaded images with async decoding  
✅ Contact form with Supabase integration  

## Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Supabase connection issues
- Verify your `.env` file has correct credentials
- Check Supabase project status at https://supabase.com
- Ensure RLS policies are properly configured

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Development Tips

- Hot Module Replacement (HMR) is enabled - changes reflect instantly
- TypeScript errors show in terminal and browser
- Use browser DevTools to test responsive layouts
- Check Network tab to verify lazy loading is working

## Contact Form Testing

The contact form requires:
- **First Name** (2-50 characters)
- **Email** (valid format)
- **Phone** (10 digits)
- **Program** (MBA/BBA/Both/Other)
- **Message** (10-500 characters)

Submissions are stored in Supabase `contact_inquiries` table.

## Production Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Environment Variables
Remember to add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in your hosting platform's environment settings.

---

**Happy coding! 🎓**
