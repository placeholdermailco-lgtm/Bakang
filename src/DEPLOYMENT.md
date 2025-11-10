# Deployment Guide for Vercel

This guide will help you deploy your UI/UX portfolio to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free)
- Your code in a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin <your-github-repo-url>
     git push -u origin main
     ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your repository

3. **Configure Project**
   - Vercel will auto-detect Vite
   - Confirm these settings:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose a project name
   - Confirm the settings

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables (Optional)

If you need to add environment variables:

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables (e.g., API keys)

## Custom Domain (Optional)

To add a custom domain:

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Click "Add Domain"
4. Enter your domain name
5. Follow the DNS configuration instructions

## Automatic Deployments

Once connected to Git:

- **Production**: Pushes to `main` branch automatically deploy to production
- **Preview**: Pushes to other branches create preview deployments
- **Pull Requests**: Each PR gets its own preview URL

## Build Optimization

The project is already optimized for production with:

- ✅ Vite build optimization
- ✅ Code splitting
- ✅ Asset optimization
- ✅ CSS minification
- ✅ Tree shaking

## Troubleshooting

### Build Fails

1. Check that all dependencies are listed in `package.json`
2. Ensure Node.js version is compatible (14.x or higher)
3. Check build logs in Vercel dashboard for specific errors

### 404 Errors on Page Refresh

- Already handled by `vercel.json` rewrites configuration

### Slow Loading

- Check Network tab in browser DevTools
- Consider lazy loading images
- Optimize image sizes

## Monitoring

After deployment, you can:

- View analytics in Vercel dashboard
- Check deployment logs
- Monitor performance metrics
- Set up custom alerts

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

Your portfolio is now live! Share your URL: `https://your-project-name.vercel.app`
