# GitHub OAuth Setup Guide

Since we switched to the **GitHub Backend** to fix the login issues, there is one final step to ensure the "Login with GitHub" button works securely.

## Why this is needed
To allow the Admin Panel (running on your site) to save changes to your Repository, it needs permission. We grant this permission via a "GitHub OAuth App".

## Step 1: Create the App on GitHub
1. Log in to your GitHub account.
2. Go to **Settings** (top right profile icon).
3. Scroll down to **Developer settings** (bottom left).
4. Click **OAuth Apps**.
5. Click **New OAuth App**.

## Step 2: Configure the App
Fill in these exact details:
- **Application Name**: `Jovon Portfolio Admin`
- **Homepage URL**: `https://islayah5.github.io/jovon-portfolio/admin/`
- **Authorization callback URL**: `https://api.netlify.com/auth/done`
  *(We use Netlify's free secure handshake service to keep your credentials safe)*

Click **Register application**.

## Step 3: Connect to Netlify (Free Auth Service)
Since you already created a Netlify site in the previous setup (to handle the auth proxy):
1. Go to your **Netlify Dashboard**.
2. Select the site you created for this project.
3. Go to **Site Settings** > **Access & security** > **OAuth**.
4. Under **Authentication providers**, click **Install provider**.
5. Select **GitHub**.
6. Paste the **Client ID** and **Client Secret** from the GitHub App you just created (in Step 2).
7. Click **Install**.

## 🎉 You're Done!
Now, when you visit `https://islayah5.github.io/jovon-portfolio/admin`:
1. Click **Login with GitHub**.
2. A popup will ask you to authorize.
3. You'll be logged in and can edit everything!

---
> [!NOTE]
> This is a **one-time setup**. Your client will simply see the "Login" button and it will just work for them.
