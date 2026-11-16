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

Every Save is kept in GitHub as a saved version. Nothing is ever lost, and a developer can bring back an old version.

---

## What is in the menu

| Menu | What you change | Where visitors see it |
| --- | --- | --- |
| **Writing > Blog posts** | Articles | Blog page, home page, search engines |
| **People > Coaches and team** | Coach photos and details | Community page |
| **People > Students** | Student spotlights and recent promotions | Community page |
| **People > Achievements and medals** | Headline numbers, medals and awards | Achievements page, home page |
| **Website > Class schedule** | The weekly timetable | Academy page |
| **Website > Pricing and membership plans** | Plans, prices, comparison table, questions | Pricing page |

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

Click a post to change it, or **Create** for a new one.

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
| **Feature this post** | Shows it as the big lead story on the Blog page. |
| **Draft** | A draft is saved but **not shown** on the live website. Untick it to publish. |
| **Post** | The text. Use the bar above it: headings, bold, lists, links, quotes, tables and pictures. |

Tips for the text: use **Heading 2** for the main parts and **Heading 3** inside them. Pictures inside the text
must be uploaded (links work for the cover picture, the coaches, the students and the awards).

### Coaches and team

Each coach has a name, role, rank, team, years of experience, a **photo**, a short **About** text, lists of
**specialties** and **certifications**, a **philosophy** quote and optional social media addresses.
The **ID** is made from the name: do not change it after the coach is published.

### Students

Two lists: **Student spotlights** (the big cards) and **Recent promotions**.

**Permission to publish.** Every student shown on the website needs this tick, and the editor will not save an
entry without it. Tick it only when you have **written permission** to show that person's name and picture: from a
**parent or guardian** if the student is under 18, or from the student. The tick itself is not shown on the website.
If it is missing, the list says so next to the name.

For children, it is best to use a first name or initials only.

### Achievements and medals

- **Headline numbers**: the four big numbers (for example *200+ Total Competitions*).
- **Medals and awards**: one item per result. **The first ones are shown on the home page**, so keep the best at the
  top. Inside each award, **Students who won** lists the athletes (each needs **Permission to publish**).

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
valid, that pictures and links make sense, and that no student is missing the permission tick.

**If something is wrong, the new version is not published and the old website stays online.** Vercel (the company
that hosts the site) sends a message saying the update failed. The message says which file and which field to fix.
Fix it in the editor and Save again.

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
