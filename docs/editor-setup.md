# One-time setup of the content editor (for the website owner)

This page is for the **owner** of the website. You do this **once**, about 20 to 30 minutes.
After it is done, the team uses the editor as described in [`editing-guide.md`](editing-guide.md).

**What you are setting up.** The editor lives on the website at `https://infinitytaekwondo.com/keystatic`.
When someone saves, the editor sends the change to the website's GitHub project. Vercel (the company that hosts the
website) then rebuilds the site by itself. To do this safely, GitHub needs to know that the editor is allowed to
save changes, and the editor needs four secret values. You will make those values in GitHub and give them to Vercel.

**Until you finish, nothing is broken.** The website works as normal. The editor page only says
"The content editor is not set up yet".

**You need:**

- A GitHub account that is an **owner or admin** of the `infinity-tkd` GitHub organisation (or of the website project).
- Access to the website's project on **Vercel** as an **owner or admin**.

**Never send these secret values by email or chat, and never put them in the code.** They go only into GitHub
and into Vercel's settings page.

---

## Step 1. Decide who may edit

Only people with **Write** access to the website's GitHub project can log in to the editor.

1. Open the project: `https://github.com/infinity-tkd/infinity-tkd-official-web`
2. Click **Settings**, then **Collaborators and teams**, then **Add people**.
3. Add each person by their GitHub name or email and give them the role **Write**.

Each person needs their own free GitHub account. To remove someone later, remove them here.

---

## Step 2. Create the GitHub App

A *GitHub App* is the permission slip that lets the editor save changes to the project.

1. On GitHub, open the **organisation's** settings page (click your picture, then the organisation, then **Settings**).
2. In the left menu, scroll down to **Developer settings**, then **GitHub Apps**, then click **New GitHub App**.
3. Fill in the form like this. Leave everything else as it is.

| Field | What to write or choose |
| --- | --- |
| **GitHub App name** | `Infinity TKD Editor` (if the name is taken, add a number) |
| **Homepage URL** | `https://infinitytaekwondo.com` |
| **Callback URL** | `https://infinitytaekwondo.com/api/keystatic/github/oauth/callback` (copy it exactly) |
| **Request user authorization (OAuth) during installation** | **Tick it** |
| **Webhook > Active** | **Untick it** |
| **Repository permissions > Contents** | **Read & write** (the option that lets the App save changes) |
| **Repository permissions > Metadata** | Read-only (it is chosen for you) |
| **Repository permissions > Pull requests** | **Read-only** |
| **Where can this GitHub App be installed?** | **Any account** (this is what Keystatic's own setup uses; it only means the app *can* be installed. You will install it on your project only, in Step 4.) |

4. Click **Create GitHub App**.

If your website is also opened as `https://www.infinitytaekwondo.com`, click **Add callback URL** and add the same
address with `www.` in front. The address you type in your browser must be in the list.

Leave **Expire user authorization tokens** ticked (it is the default). Logins then expire after a few hours and the editor
renews them by itself while people work. If it ever says you are logged out, click **Log in with GitHub** again.

---

## Step 3. Copy three values from the App

You are now on the App's settings page.

1. **Client ID**: near the top. Copy it. This is value 1: `KEYSTATIC_GITHUB_CLIENT_ID`.
2. **Client secrets**: click **Generate a new client secret**. **Copy it straight away: GitHub shows it only once.**
   This is value 2: `KEYSTATIC_GITHUB_CLIENT_SECRET`.
3. **The App's short name (the "slug")**: click **Public page** (or look at the address of this page). The address is
   `https://github.com/apps/the-short-name`. The last part, `the-short-name`, is value 3:
   `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`.

---

## Step 4. Install the App on the website project only

1. On the App's settings page, click **Install App** in the left menu.
2. Next to the `infinity-tkd` organisation, click **Install**.
3. Choose **Only select repositories**, pick `infinity-tkd-official-web`, and click **Install**.

Now the editor can change this one project, and nothing else.

---

## Step 5. Make a secret phrase

Value 4 is `KEYSTATIC_SECRET`. It is any random text of **32 or more characters**. It protects the login cookies.
The easiest way is to use your password manager's generator (choose 40 characters). A developer can instead run
`node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`.

---

## Step 6. Give the four values to Vercel

1. Open the website's project on Vercel, then **Settings**, then **Environment Variables**.
2. Add the four values, one at a time. For each: write the **Key** (the name), paste the **Value**, choose the
   environment **Production**, and click **Save**. For the secret ones (value 2 and value 4), choose the **Secret**
   type, or switch on **Sensitive**: Vercel's screen has used both names. A secret value cannot be read again after it
   is saved, so keep your own copy in your password manager.

| Key | Value |
| --- | --- |
| `KEYSTATIC_GITHUB_CLIENT_ID` | value 1 |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | value 2 |
| `KEYSTATIC_SECRET` | value 4 |
| `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | value 3 |

3. Go to **Deployments**, open the latest deployment, click the **...** menu and choose **Redeploy**. In the box that
   opens, **untick "Use existing Build Cache"** and confirm.
   (You must redeploy once, because Vercel only reads new settings when it builds, and one of the values is built into
   the website's pages.)

---

## Step 7. Try it

1. Open `https://infinitytaekwondo.com/keystatic`.
2. Click **Log in with GitHub** and allow the App.
3. You should see the dashboard with the menu on the left. If GitHub says the App is not installed, do Step 4 again.
4. Open **Class schedule**, change one word, click **Save**, and watch the **Deployments** page on Vercel build the
   change. Change the word back and Save again.

---

## Straight to the website, or check first?

The editor can save in two ways. **Please decide which one the team will use.**

### Option A: straight to the website (simplest)

Each **Save** goes to the main version of the website, and the site updates by itself in 2 to 5 minutes.

- Good: nothing else to learn.
- Safe enough: every edit is **checked before it is published**. If the check fails, the old website stays online
  and Vercel sends a failure message that names the problem.

### Option B: check first, then publish

The editor saves into a **branch**, which is a separate copy. Vercel builds a **private preview website** from it,
the team looks at the preview, and only then the change is published.

How it works:

1. In the editor, use the **branch menu** at the top to make a new branch (its name starts with `content/`).
2. Edit and **Save** as usual. The changes go to the branch, not to the live website.
3. Click **Create pull request** (it appears at the top when you are on a branch). GitHub opens.
4. Vercel usually adds a comment with a **Preview link** (if it does not, open the **Deployments** page on Vercel and
   find the deployment for the branch). Open it and check the change.
5. When it looks right, click **Merge pull request** on GitHub. The live website updates in a few minutes.

You cannot log in to the editor *from* the preview link (only from the live address), but you can look at it.

To **force** everyone to use Option B, turn on a rule on GitHub: project **Settings > Rules > Rulesets**
(or **Branches > Branch protection rules**) for the main branch, with **Require a pull request before merging**.
The editor then tells people to make a new branch when they save.

Our suggestion: start with **Option A**. Switch to B later if the team grows or if changes become more risky.
You can change your mind at any time. No code change is needed.

---

## Check your Vercel plan

Vercel's free **Hobby** plan is, in its Terms of Service (section 4), only for "personal or non-commercial use".
The Terms do not say exactly what "commercial" means, and Vercel may disable Hobby projects without warning.
A website that advertises a business's classes and prices may well count as commercial. Please check
the current terms at <https://vercel.com/legal/terms> (or ask Vercel's support), and think about the paid **Pro** plan
(at the time of writing, $20 per month for each person who can deploy; people who only look are free).

---

## If something goes wrong

| What you see | What to do |
| --- | --- |
| "The content editor is not set up yet" | One of the four values is missing in Vercel (the page lists which). Add it (Step 6) and redeploy. |
| GitHub says **redirect_uri is not associated with this application** | The callback address in the GitHub App must match the address in your browser exactly. Add it under **Callback URL** (Step 2), including the `www.` version if you use it. |
| You can log in, but Save says you have no access or the resource is not accessible | The App is not installed on the project (Step 4), or the person does not have **Write** access (Step 1). |
| Save works, but the website does not change | Look at **Deployments** on Vercel. A red failed deployment shows which file and field to fix. The old site stays online meanwhile. |
| You changed a value in Vercel and nothing happened | Redeploy once, with **"Use existing Build Cache"** unticked. Vercel reads settings only when it builds. |
| You think a secret leaked | On GitHub, open the App, generate a new client secret, delete the old one, update it in Vercel, and redeploy. Change `KEYSTATIC_SECRET` too. |

## For developers

- The editor is [Keystatic](https://keystatic.com) in **GitHub mode** on the live site and in **local mode** under
  `npm run dev`. The switch is in `keystatic.config.tsx` (`NODE_ENV`). Local mode has **no login** and must never be
  used on a server: that is why the live site never uses it.
- Without the four settings Keystatic itself stops the build, so `app/api/keystatic/[...params]/route.ts` and
  `app/keystatic/layout.tsx` only start it when `lib/editorSetup.ts` says all four are present.
- `engines.node` in `package.json` is `22.x`, so Vercel builds with Node 22 whatever the project setting says
  (`npm run check:data` needs Node 22.6 or newer).
- Branches made in the editor are limited to the `content/` prefix (`branchPrefix` in the config).
