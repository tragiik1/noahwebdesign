# Noah Web Design - Portfolio Website

A modern, professional portfolio website for Noah, a freelance web developer based on the Sunshine Coast, Australia.

## Features

- 🎨 **Modern Design**: Clean, minimalistic, and premium aesthetic
- 🌓 **Dark/Light Mode**: Default dark theme with smooth theme switching
- ✨ **Smooth Animations**: Powered by Framer Motion for beautiful transitions
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal speed
- 🎯 **SEO Optimized**: Proper metadata and semantic HTML

## Sections

1. **Hero Section**: Full-screen landing with animated background and CTAs
2. **About Me**: Personal introduction with skills showcase
3. **Portfolio**: Grid layout showcasing 6 project case studies
4. **Services**: 6 service cards with hover animations
5. **Socials**: Branded social media links with animations
6. **Testimonials**: Auto-rotating carousel with client reviews
7. **Contact**: Modern contact form with micro-interactions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # All page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Socials.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── Navigation.tsx      # Header navigation
│   ├── Footer.tsx          # Footer component
│   └── ThemeProvider.tsx   # Dark/light theme context
└── public/                 # Static assets
```

## Customization

### Update Content

- Edit section components in `components/sections/`
- Update portfolio projects in `components/sections/Portfolio.tsx`
- Modify services in `components/sections/Services.tsx`
- Change testimonials in `components/sections/Testimonials.tsx`

### Update Colors

Edit `tailwind.config.ts` to customize the color palette.

### Update Social Links

Edit the `socialLinks` array in:
- `components/sections/Socials.tsx`
- `components/Footer.tsx`
- `components/Navigation.tsx`

### Add Your Photo

Replace the placeholder in `components/sections/About.tsx` with your actual photo.

## Deployment

This project is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting**

For Vercel:
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

## License

This project is private and proprietary.

## Contact

For questions or support, reach out to Noah at hello@noahwebdesign.com