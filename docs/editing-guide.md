# Editing the website: a guide for the team

You can change the text and pictures of the website yourself. You do not need to know how to code.
Everything is done in the **content editor**, a web page for the team.

- **Live site:** `https://infinitytaekwondo.com/keystatic`
- **On a computer** (for people who work on the code): run `npm run dev`, then open `http://localhost:3000/keystatic`

The first time, someone has to finish a one-time setup so that you can log in. The steps are in
[`editor-setup.md`](editor-setup.md). After that, this guide is all you need.

---

## The short version

1. Open the editor and **Log in with GitHub**.
2. Pick what you want to change in the menu on the left.
3. Change it, then click **Save** (top right).
4. Wait. The website updates **by itself in about 2 to 5 minutes**. You do not have to do anything else.

**There is no "publish" step and no preview.** Save goes straight to the live website (read "How a change goes live"
below). Every Save is kept in GitHub as a saved version. Nothing is ever lost, and a developer can bring back an old
version.

> **Still to do by the owner: students' permission.** The 25 students who were already on the website
> (6 spotlights, 4 promotions and 15 medal winners) are still shown, now as short entries with a first name only. Nobody
> has confirmed their permission to publish yet. See **Students** below for what to do.

---

## How a change goes live

You save **straight to the main version of the website**. There is no second copy to approve first.

1. You click **Save**. The editor saves your change in the website's GitHub project.
2. Vercel (the company that hosts the website) notices the change and **builds the website again**.
3. Before anything goes live, the build **checks** your change: a content check (required fields, valid choices,
   pictures, links, blocks, student permission) and a type check. This takes part of the build, so it is automatic.
4. **If the checks pass**, the new website replaces the old one. This takes **a few minutes** (usually 2 to 5). Refresh
   the page to see it.
5. **If a check fails**, nothing goes live: **the old website stays online**, exactly as it was. Vercel sends a failure
   message that names the file and the field to fix. Fix it in the editor and Save again.

So a wrong edit can delay a change, but it cannot break the live website. To see what is happening, open the project
on Vercel and look at **Deployments**: a green dot is live, a red one is a failed check with the reason.

---

## What is in the menu

| Menu | What you change | Where visitors see it |
| --- | --- | --- |
| **Writing > Blog posts** | Articles | Blog page, home page, search engines |
| **Writing > News** | Short announcements: a grading date, a closure, an event | News page, home page |
| **People > Coaches and team** | Coach photos and details | Community page |
| **People > Students** | Student spotlights and recent promotions (short entries) | Community page |
| **People > Achievements and medals** | Headline numbers, medals and awards | Achievements page, home page |
| **Memberships and classes > Pricing and membership plans** | Plans, prices, comparison table, questions | Memberships page (`/pricing`) |
| **Memberships and classes > Age groups and class types** | The age groups (Little Tigers, Cadets...) and class types | Memberships page and Academy page |
| **Memberships and classes > Class schedule** | The weekly timetable | Academy page |

Some pages show a **list** (for example the coaches). To change the list:

- **Add** a new item with the **Add** button.
- **Change** an item by clicking it. A window opens. Click **Done** when you finish.
- **Move** an item by dragging its handle (the dots on the left). The order in the editor is the order on the website.
- **Delete** an item with the bin icon on the right.

Nothing changes on the website until you click **Save** on the page.

---

## Pictures: upload a file or paste a link

Wherever you see a picture, there are two ways to add it. Use whichever is easier.

### Upload a picture

Click **Upload a picture** and choose the file. The editor shrinks big pictures for you (to at most
1600 pixels wide, and under 1 MB). It also removes hidden data that phones add to photos, such as the place a
photo was taken. This matters for photos of children.

Every uploaded picture is stored in the website's project **for ever**, so please do not upload huge files.
If a picture is too big even after shrinking, the editor will tell you to use a link instead.

### Paste a link

Paste the link in the box. It can be a link from **Google Drive**, **Dropbox**, **OneDrive** or **Imgur**, or the
address of any picture on the internet. You do not need to change it: the website turns share links into the
picture itself.

The editor shows a **preview** of the picture, built the same way the website will build it.
Read the message under the preview:

- **"Picture found"**: all good.
- **A red message**: the link cannot work. The message says why and what to do instead.
- **An orange message** ("The picture could not be loaded"): the link is not public, or it is not a picture.

**Google Drive.** Open the picture in Drive, click **Share**, and under *General access* choose **Anyone with
the link** (role: Viewer). Then copy the link and paste it here. If the file is private, visitors will not see it.
The website keeps a copy of the picture after the first visit, so Google's limit on repeated downloads
rarely matters.

**Links that can never work:**

- **Facebook and Instagram**: they do not let other websites show their pictures, and their links stop working
  after a few days. Save the picture on your computer and upload it, or put it on Google Drive.
- **A folder or album** (a Drive folder, an Imgur album, a Dropbox folder): choose one picture, not the folder.
- **Google Photos share pages**: open the photo, right-click it, choose **Copy image address**, and paste that.
- **A file on your computer** (like `C:\Users\...`): visitors cannot see your computer. Use **Upload**.

---

## Other languages

The website has English, Khmer, Chinese and Korean. English is always filled in.
Many items have a **Translations (optional)** list at the bottom:

1. Click **Add**, then choose the language.
2. Fill in **only the fields you want to translate**.

Anything you leave empty is shown in English. You can add one language now and the others later.

---

## Each screen, field by field

### Blog posts

Click a post to change it, or **Create** for a new one. The details of the post are on the right and the text is on
the left (on a phone: the details first, then the text).

**The basics**

| Field | What it means |
| --- | --- |
| **Title** | The headline. |
| **Web address of the post** | Made from the title. **Do not change it after the post is published**, or the old link stops working. |
| **Short summary** | One or two sentences for the list of posts and Google. Aim for under 160 characters. |
| **Publish date** | The date shown on the post. |
| **Last updated** | Fill in when you change a post that is already published. |
| **Author** | Leave empty to show "Infinity Taekwondo Coaching Team". |
| **Category** | For example *Getting Started*. Posts with the same category are listed together. |
| **Tags** | Short words about the topic (optional). |
| **Cover picture** | The big picture at the top and on the post's card. |
| **Cover picture description** | Says what is in the picture, for people who cannot see it. |
| **Cover picture caption** | A short line under the cover picture, such as who took the photo (optional). |
| **Feature this post** | Shows it as the big lead story on the Blog page. |
| **Draft** | A draft is saved but **not shown** on the live website. Untick it to publish. |

**How it looks and where it is shown (all optional)**

| Field | What it means |
| --- | --- |
| **Hide from the blog list** | Leaves the post out of the blog list, the categories, the feed and the sitemap, and asks search engines to skip it. **It is not private**: anyone who has the link can open it. Never use it for private information. |
| **Table of contents** | The "On this page" list. *Automatic* shows it when the post has 3 headings or more; or choose *Always show* or *Hide*. |
| **Read next** | Pick up to 3 posts to suggest at the bottom of this one. Leave empty and the website picks similar posts. |
| **Title for Google** | Replaces the title in Google and in link previews. About 50 to 60 characters is shown in full. |
| **Description for Google** | Replaces the short summary in Google and in link previews. About 150 to 160 characters is shown in full. |
| **Picture for sharing** | The picture shown when the post is shared on Facebook, Telegram or WhatsApp. Leave empty to use the cover picture. |

**The text**

Use the bar above the text for headings, bold, lists, links, quotes, tables and pictures. To add one of the **blocks**
below, press the **+** button in that bar, or type **/** on an empty line and choose from the list.

| Block | What it is for |
| --- | --- |
| **Callout** | A highlighted box: *Note*, *Tip*, *Warning* or *Safety first*. Warning and safety boxes are red. Type your text in the box. Click **Edit** on the block to change its style or give it a heading. |
| **YouTube video** | Paste a YouTube link. The page shows the video's picture with a play button, and YouTube's player is loaded only when someone presses play. |
| **Button** | A button for the next step, such as *Book a free trial*. The link is a page of this website (start with `/`, like `/contact`), a full address (`https://...`), `mailto:` or `tel:`. |
| **Pull quote** | A large quotation that stands out, with who said it (optional). |
| **Question and answer** | A question that opens to show its answer. Questions that follow each other become one list: handy for a "Frequently asked questions" part. |

Click **Edit** on a block to fill in its options. A block that cannot work (a video with no link, a button with no
text, a question with no question) **stops the website update**, and the message names the post and the block, so
nothing half-finished goes live. Blocks can sit inside other blocks (a callout inside an answer), up to three levels.

**Pictures in the text.** Click **Image** in the bar and choose a file. Fill in **Picture description**, and a
**Caption** if you like: it is shown in small text under the picture. The editor gives the file a safe name, so two
photos called `photo.jpg` never replace each other. These pictures are **not shrunk automatically**: shrink big photos
first (the website update warns above 1 MB and stops above 3 MB), or use a link for the cover picture instead.

Tips for the text: use **Heading 2** for the main parts and **Heading 3** inside them. Only pictures can be uploaded
inside the text; links work for the cover picture, the picture for sharing, and the pictures of coaches, students,
awards and age groups.

### Coaches and team

Each coach has a name, role, rank, team, years of experience, a **photo**, a short **About** text, lists of
**specialties** and **certifications**, a **philosophy** quote and optional social media addresses.
The **ID** is made from the name: do not change it after the coach is published.

### News

Short announcements: a grading date, a holiday closure, a tournament, a new class. Not articles (for those, write a
blog post). The newest **three** are shown on the home page and **all** of them on the **News** page. If there are none,
the home page shows no news section and the News page says there is nothing right now.

Click **Add** for a new announcement.

| Field | What it means |
| --- | --- |
| **Headline** | A few words, up to 100 characters. |
| **Date** | The date of the announcement. The newest date is shown first, whatever order the list is in. |
| **Short text** | One to three sentences, up to 400 characters. Line breaks are kept. |
| **Picture (optional)** | Upload one, or paste a link. A **Google Drive share link works**: see "Pictures" above. |
| **Link (optional)** | Where "Read more" goes: a page of this website like `/contact` or `/blog/my-post`, a full address (`https://...`), `mailto:` or `tel:`. |
| **Link words (optional)** | The words on the link. Empty shows "Read more". |
| **Translations (optional)** | Khmer, Chinese and Korean versions of the headline, text and link words. Anything left empty is shown in English. |

**Remove an announcement when it is out of date** (the bin icon): nothing removes it by itself.

### Students

Two lists: **Student spotlights** (cards) and **Recent promotions**. Entries are **short on purpose**:

- **Name to show**: a **first name or initials only** (*Sophea*, or *Sophea P.* if two students share a first name).
  **Never a full name for anyone under 18.** For an adult, a full name only if they agree.
- **A photo**, the **belt** and, for a spotlight, a **short note** (one or two sentences, under 200 characters).
- No surname, no age, no school and no story are shown. The website no longer has a "Read story" window.

The same goes for **Students who won** under *Achievements and medals*: a first name or initials, with the belt and
the result.

**Permission to publish.** Every student shown on the website needs this tick, and the editor will not save a **new**
entry without it. Tick it only when you have **written permission** to show that person's name and picture: from a
**parent or guardian** if the student is under 18, or from the student. The tick is not shown on the website.

**Still to do by the owner: confirm the permission of the 25 students who were already on the website**
(6 spotlights, 4 promotions and 15 medal winners). They are shown, as short entries, because they were live before the
tick existed, but **nobody has confirmed their permission yet**, and nothing in the project says they were confirmed.
In the editor their names carry the mark *(!) permission still to confirm*. For each one: ask the parent or guardian
(or the student, if an adult), and when you have a yes, open the entry and **tick Permission to publish**. If you do
not get a yes, **remove the entry**. Every website update also lists how many are still waiting, so it is not forgotten.

### Achievements and medals

- **Headline numbers**: the four big numbers (for example *200+ Total Competitions*).
- **Medals and awards**: one item per result. **The first ones are shown on the home page**, so keep the best at the
  top. Inside each award, **Students who won** lists the athletes by a first name or initials (each needs
  **Permission to publish**; see **Students** above for the 25 that still need confirming).

### Age groups and class types

Two lists. **Age groups** are the cards from *Little Tigers* to *Golden Masters*: name, ages, a **picture**, what the group
develops, key lessons, class length and safety. **Class types** are the cards *General Group Classes*, *Kids & Cadets*
and *Private 1-on-1*: subtitle, icon, colour, a small badge, who it is for and the benefits. The order is the order on
the website. The **ID** is made from the name: do not change it after it is published.

### Class schedule

One item per class: **Day**, **Time** (write it like `4:30 PM - 5:30 PM`), **Class name**, **Programme**, **Level**,
**Belts**, **Instructor** and **Room**. The order in the editor does not matter: the website sorts by day and time.

### Pricing and membership plans

- **Plans**: name, programme, the badge text, four prices (per month, per month when paid for the year, and the family
  versions), what is included and what is not, and the button text. **Leave all four prices empty** for a plan with no
  fixed price, and write the words to show (for example `$Custom`) in *Price text instead of numbers*.
- **Comparison table**: groups of rows. For each plan a row shows a **tick**, a **cross** or a few **words**.
- **Frequently asked questions**: question and answer.

---

## Your edits are checked

Before the website is updated, a computer checks every edit: that required fields are filled in, that choices are
valid, that pictures and links make sense, that blocks in a post are finished, and that no **new** student entry is
missing the permission tick. (A student whose name looks like a full name only gets a warning, not a stop, because an
adult may agree to be named.)

**If something is wrong, the new version is not published and the old website stays online.** Vercel (the company
that hosts the site) sends a message saying the update failed. The message says which file and which field to fix.
Fix it in the editor and Save again. (See "How a change goes live" above.)

---

## Questions

**How long until my change is live?** Usually 2 to 5 minutes after you click Save.

**I clicked Save but nothing changed on the website.** Wait 5 minutes and refresh the page. If it is still the same,
the update may have failed the check above: look for the message from Vercel, or ask a developer.

**Can two people edit at the same time?** Yes, but not the same page at the same moment. If you see a message about
newer changes, reload the editor page and make your change again.

**I made a mistake and Saved.** Edit it again and Save. If it is a big mistake, a developer can restore the earlier
version from GitHub in one click.

**Can I try changes first, without publishing?** Yes. See "Straight to the website, or check first?" in
[`editor-setup.md`](editor-setup.md). In short: make a new branch in the editor (the branch menu at the top), save
your changes there, and use **Create pull request**. Vercel builds a private preview that you can look at before you
publish.

**Who can edit?** Only people with a GitHub account that the owner has added to the website's GitHub project with
**Write** access.
