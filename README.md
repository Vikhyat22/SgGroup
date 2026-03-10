# SG Group — Official Website

> **Legacy of Excellence, Empire of Vision**

Production-ready website for **SG Group**, a diversified conglomerate with two divisions:
- **SG Infrastructure** — Construction, Civil Works, Electric Works, Mechanical Works
- **SG Enterprises** — MRO Supplies, Packaging Material, Safety Gear & PPE, ESD Products

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Fonts | Poppins + Inter (Google Fonts) |
| Deployment | Vercel |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/Vikhyat22/SgGroup.git
cd SgGroup

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   ├── page.tsx           # Home page (all sections)
│   └── globals.css        # Tailwind + custom styles
├── components/
│   ├── Navbar.tsx         # Sticky nav with services dropdown
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About with animated counters
│   ├── SGInfrastructure.tsx  # Infrastructure services
│   ├── SGEnterprises.tsx     # Enterprises services
│   ├── WhyChooseUs.tsx    # Features grid
│   ├── Contact.tsx        # Form + info + map
│   └── Footer.tsx         # 3-column footer
└── lib/
    └── constants.ts       # Brand colors, contact info, services data
```

## 🌐 Deploying to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — click **Deploy**
4. Connect your custom domain `sggroup.info` in Vercel dashboard

## 🎨 Brand Colors

| Color | Hex |
|-------|-----|
| Gold | `#F2C811` |
| Charcoal | `#1A1A1A` |
| White | `#FFFFFF` |
| Light Gray | `#F5F5F5` |
| Medium Gray | `#666666` |

## 📞 Contact

- **Phone:** 9637261513
- **Email:** connect.sggroup@gmail.com
- **Website:** www.sggroup.info
- **Address:** 201, Gurukul Apartment, Aaple Ghar Society, Pune, Maharashtra 411014
