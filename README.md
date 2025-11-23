# FutureAdmissions

Expert admission consultancy for Maharashtra's premier MBA and BBA colleges.

## 🚀 Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **React Router v7** - Routing
- **Supabase** - Backend & Database
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.tsx
│   ├── Colleges.tsx
│   ├── ContactForm.tsx
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Statistics.tsx
│   └── layout/         # Layout components
│       ├── Footer.tsx
│       ├── Layout.tsx
│       ├── Navigation.tsx
│       ├── ScrollToTop.tsx
│       └── WhatsAppButton.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── CollegesPage.tsx
│   ├── GalleryPage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
├── lib/                # Utilities & configs
│   └── supabase.ts
├── App.tsx             # Root component with routing
└── main.tsx            # Entry point
```

## 🛣️ Routes

- `/` - Home page
- `/about` - About us
- `/services` - Our services
- `/colleges` - Partner colleges
- `/gallery` - Success gallery
- `/contact` - Contact form
- `*` - 404 Not Found

## 🔧 Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Add your Supabase credentials to `.env`

5. Run development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173)

## 📦 Build

```bash
npm run build
npm run preview
```

## 🎨 Features

- ✅ Multi-page routing with React Router
- ✅ Responsive design (mobile-first)
- ✅ Modern UI with Tailwind CSS
- ✅ Custom color palette & typography
- ✅ Smooth animations & transitions
- ✅ Contact form with Supabase integration
- ✅ WhatsApp floating button
- ✅ 404 error page
- ✅ SEO-friendly meta tags

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🔐 Environment Variables

See `.env.example` for required environment variables.

## 📄 License

All rights reserved © 2025 FutureAdmissions
