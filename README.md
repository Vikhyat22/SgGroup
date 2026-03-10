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

## 🖼️ Adding Your Logo

The site uses your brand logo in the **Navbar**, **Hero section**, and **Footer**.

### Steps to add your logo:

1. Take your logo PNG file (the gold triangle SG Group logo from your visiting card)
2. **Rename it to `logo.png`** (exactly this name, lowercase)
3. **Place it inside the `public/` folder** at the root of the project:

```
SgGroup/
├── public/
│   └── logo.png   ← place your logo file here  ✅
├── src/
├── package.json
└── ...
```

4. Run `npm run dev` and your logo will appear in the Navbar, Hero, and Footer automatically.

> A placeholder `logo.png` is already in the `public/` folder so the site builds without errors. Simply **replace it** with your actual logo PNG.

---

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
SgGroup/
├── public/
│   └── logo.png               # ← YOUR LOGO GOES HERE (replace with actual PNG)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (fonts, metadata)
│   │   ├── page.tsx           # Home page (all sections)
│   │   └── globals.css        # Tailwind + custom styles
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky nav with services dropdown
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About with animated counters
│   │   ├── SGInfrastructure.tsx  # Infrastructure services
│   │   ├── SGEnterprises.tsx     # Enterprises services
│   │   ├── WhyChooseUs.tsx    # Features grid
│   │   ├── Contact.tsx        # Form + info + map
│   │   └── Footer.tsx         # 3-column footer
│   └── lib/
│       └── constants.ts       # Brand colors, contact info, services data
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
