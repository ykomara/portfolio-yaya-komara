@echo off
echo 📦 Building the project...
npm run build

echo 🚀 Deploying to GitHub Pages...
npm run deploy

echo 🌍 Opening your site in the browser...
start https://ykomara.github.io/portfolio-yaya-komara/
