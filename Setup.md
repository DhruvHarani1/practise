HOW TO SETUP SUPERBASE 
1) # For JavaScript/TypeScript projects
npm install @supabase/supabase-js

# Initialize npm if needed
npm init -y
#intsall dotenv
npm install dotenv

2) Create Environment Variables
Create .env or .env.local file in your project root:
envVITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key

3) . Create .gitignore File
In VS Code, create .gitignore in your project root:
gitignore# Dependencies
node_modules/

# Environment variables
.env
.env.local
.env*.local

# Supabase local
.supabase/


