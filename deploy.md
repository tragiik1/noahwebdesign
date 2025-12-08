# Deploying to GitHub Pages

## Step 1: Build the static site

Run this command to create the static export:

```bash
npm run build
```

This will create an `out` folder with all the static files.

## Step 2: Deploy to GitHub Pages

### Option A: Using gh-pages branch (Manual)

1. Create a new branch called `gh-pages`:
```bash
git checkout -b gh-pages
```

2. Copy the contents of the `out` folder to the root:
```bash
# On Windows PowerShell:
Copy-Item -Path "out\*" -Destination "." -Recurse -Force
```

3. Commit and push:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

4. In GitHub repo settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Click Save

### Option B: Using GitHub Actions (Automatic - Recommended)

I've created a GitHub Actions workflow that will automatically deploy when you push to main.

Just push your code and it will deploy automatically!

## Your site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

