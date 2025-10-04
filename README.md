# Bellwether Capital Website

A modern, responsive React.js website replicating the Bellwether Capital investment firm's online presence.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern Tech Stack**: Built with React.js, Vite, Tailwind CSS, and Framer Motion
- **Interactive Charts**: Performance visualization using Recharts
- **Smooth Animations**: Counter animations, fade-in effects, and smooth scrolling
- **Fast Performance**: Optimized build with code splitting and lazy loading
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 📦 Tech Stack

- **Framework**: React.js 18.3.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/mandarwaghmare997/BWCWebsite.git
cd BWCWebsite
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Start the development server:
```bash
pnpm run dev
# or
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
bellwether-capital/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useCountUp.js
│   ├── pages/          # Page components
│   │   ├── HomePage.jsx
│   │   └── AboutPage.jsx
│   ├── lib/            # Utility functions
│   ├── App.jsx         # Main App component
│   ├── App.css         # Global styles
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Color Palette
- **Navy Blue**: `#2C3E5E` - Primary brand color
- **Light Beige**: `#F5F3EE` - Background color
- **Orange**: `#FF6B35` - Accent color
- **Light Blue**: `#A8C5DD` - Secondary color
- **Green**: `#7FD858` - Call-to-action color

### Typography
- **Headings**: Georgia, serif
- **Body**: System fonts (San Francisco, Segoe UI, Roboto)

## 🌐 Pages

1. **Home Page** (`/`)
   - Hero section with call-to-action
   - Company introduction
   - Core values showcase
   - Performance metrics with interactive charts
   - Portfolio features
   - Contact section

2. **About Page** (`/aboutus`)
   - Company mission and vision
   - Founding team profiles
   - Leadership team showcase
   - Complete team roster
   - Contact information

## 🚀 Build & Deploy

### Build for Production
```bash
pnpm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build
```bash
pnpm run preview
```

### Deploy
The application can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Optimizations

- Lazy loading of images
- Code splitting with React.lazy()
- Optimized asset delivery with WebP format
- Minified CSS and JavaScript
- Tree shaking for unused code removal

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds. Configuration can be found in `vite.config.js`.

### Tailwind Configuration
Custom Tailwind configuration is embedded in `App.css` using the `@theme` directive.

## 📄 License

This project is proprietary and confidential. All rights reserved by Bellwether Capital.

## 👥 Team

Developed for Bellwether Capital - Valuing Tomorrow Since 2004

## 📞 Support

For any questions or issues, please contact:
- Email: ranjit@bellwethercapital.in
- Email: srinath@bellwethercapital.in
- Phone: +91 22 6654 8178

---

**Note**: This website is a replica of the original Bellwether Capital website, built with modern web technologies for improved performance and maintainability.
