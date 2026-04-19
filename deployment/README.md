# Deployment Guide

This portal is deployed to GitHub Pages using the `gh-pages` package.

## Live URL
[https://rishikesh-mb.github.io/Engineering-SOC-2-Compliance/](https://rishikesh-mb.github.io/Engineering-SOC-2-Compliance/)

## How to Re-Deploy
Whenever you make changes to the code and want to update the live website:

1. **Build and Deploy:**
   Run the following command in your terminal:
   ```bash
   npm run deploy
   ```

2. **Authentication:**
   If you aren't logged in on your machine, it will prompt you for your GitHub username and Personal Access Token (PAT).

## Environment Notes
- **Node.js Version:** v16.18.0 (currently used)
- **Vite Version:** 4.5.0 (downgraded for Node 16 compatibility)
