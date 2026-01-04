# Admin Access Guide: Getting Your Password

To log in to the new **Direct Admin Dashboard**, you need a **GitHub Personal Access Token (PAT)**. This acts as your secure "password" that authorizes the dashboard to update your website.

**This is a one-time setup.** Once you have the token, you can reuse it or save it in your browser password manager.

## How to Get Your Token

1.  **Log in to GitHub.**
2.  Go to **Settings** (Click your profile picture top-right > Settings).
3.  Scroll down to the bottom left sidebar and click **"Developer settings"**.
4.  Click **"Personal access tokens"** > **"Tokens (classic)"**.
5.  Click the **"Generate new token"** button > **"Generate new token (classic)"**.
6.  **Note:** Give it a name like "Portfolio Admin".
7.  **Expiration:** Set to "No expiration" (e.g., if you want it to last forever) or 90 days.
8.  **Select Scopes:** Check the box next to **`public_repo`** (or `repo` if your valid is private).
    - This is the **ONLY** permission needed. It allows the token to write to your repository.
9.  Scroll down and click **"Generate token"**.
10. **COPY THE TOKEN IMMEDIATELY.** It starts with `ghp_...`.
    - You won't be able to see it again!

## How to Log In

1.  Go to your admin panel: `https://islayah5.github.io/jovon-portfolio/admin/`
2.  Paste the token (starts with `ghp_...`) into the "Password" field.
3.  Click Login.

That's it! You can now edit your portfolio.
