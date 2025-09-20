# Deployment Instructions

## Frontend Deployment (Vercel)

### Option 1: Deploy from my-app folder (Recommended)
1. Go to [Vercel](https://vercel.com)
2. Connect your GitHub account
3. Import your repository: `coffee-cafe`
4. **Important**: Set the Root Directory to `my-app`
5. Framework Preset: `Vite`
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Install Command: `npm install`

### Environment Variables for Vercel:
Add these in Vercel Dashboard → Project Settings → Environment Variables:
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_key_here
```

### Option 2: Deploy entire project
Use the root-level `vercel.json` configuration.

## Backend Deployment (Railway/Render/Heroku)

### For Railway:
1. Connect your GitHub repository
2. Select the `backend` folder as root
3. Add environment variables:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   PORT=8000
   ```

### For Render:
1. Create new Web Service
2. Connect repository
3. Root Directory: `backend`
4. Build Command: `npm install`
5. Start Command: `node server.js`
6. Add environment variables

## Local Development
1. Frontend: `cd my-app && npm run dev`
2. Backend: `cd backend && node server.js`

## Environment Files Needed:
- `my-app/.env.local` - Clerk publishable key
- `backend/.env` - MongoDB connection string