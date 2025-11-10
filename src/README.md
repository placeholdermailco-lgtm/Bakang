# UI/UX Portfolio - Sarah Chen

A professional UI/UX designer portfolio showcasing design thinking process, case studies, and contact information.

## 🚀 Features

- **Landing Page** with designer bio, skills, and project showcase
- **Detailed Case Study** featuring the BudgetWise app with complete design process
- **Contact Section** with form and social media links
- **Responsive Design** optimized for all devices
- **Interactive Elements** with smooth transitions and hover effects

## 📦 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4.0** - Styling
- **Vite** - Build tool
- **Shadcn/ui** - Component library
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 💻 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Vite and configure the build settings
6. Click "Deploy"

### Build Settings (Auto-detected by Vercel)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📁 Project Structure

```
/
├── components/
│   ├── ui/                    # Shadcn UI components
│   ├── landing/               # Landing page components
│   ├── CaseStudyPage.tsx      # Case study page
│   ├── LandingPage.tsx        # Landing page layout
│   └── ...
├── styles/
│   └── globals.css            # Global styles
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
├── index.html                 # HTML template
├── vite.config.ts             # Vite configuration
├── vercel.json                # Vercel configuration
└── package.json               # Dependencies
```

## 🎨 Customization

To customize this portfolio for your own use:

1. **Update Designer Info**: Edit personal information in `/components/landing/LandingHero.tsx` and `/components/landing/About.tsx`
2. **Replace Projects**: Update project data in `/components/landing/ProjectGrid.tsx`
3. **Modify Case Study**: Edit the BudgetWise case study or create new ones in the components folder
4. **Change Colors**: Update color tokens in `/styles/globals.css`
5. **Update Contact**: Modify contact details in `/components/landing/Contact.tsx`

## 📝 License

This project is open source and available under the MIT License.

## 👤 Contact

Sarah Chen - hello@sarahchen.design

Portfolio: [Your Portfolio URL]
