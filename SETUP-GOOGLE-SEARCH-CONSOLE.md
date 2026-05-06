# Google Search Console — Setup Guide

## What it gives you
Free visibility into how Google (and by extension AI-powered search) sees your site. Shows: which queries surface your site, click-through rates, average position, crawl errors, and index coverage. No tracking script needed on the site — verification is done once.

---

## Step 1 — Create a Search Console property

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with a Google account
3. Click **Add property**
4. Choose **URL prefix** and enter `https://senastrategy.ai`
5. Click **Continue**

---

## Step 2 — Verify ownership (already done)

The file `googled376cdede880d100.html` is already present in `/public`, which means it deploys to `https://senastrategy.ai/googled376cdede880d100.html`. This is the HTML file verification method.

On the verification screen, select **HTML file** as the verification method. Google will check for that file and confirm ownership automatically.

If it doesn't appear as an option, choose **HTML tag** instead and add the `<meta name="google-site-verification" ...>` tag to `index.html`.

---

## Step 3 — Submit your sitemap

Once verified:

1. In the left sidebar, click **Sitemaps**
2. In the "Add a new sitemap" field, enter: `sitemap.xml`
3. Click **Submit**

Google will crawl `https://senastrategy.ai/sitemap.xml` and begin indexing all listed pages.

---

## Step 4 — Check indexing

After a few days:

- Go to **URL Inspection** and paste `https://senastrategy.ai/` to see if the homepage is indexed
- Go to **Coverage** to check for any crawl or indexing errors
- Go to **Performance** (after ~2 weeks of data) to see which queries are bringing people to the site

---

## What to check monthly

| Report | What to look for |
|---|---|
| Performance → Queries | Which search terms surface your site |
| Performance → Pages | Which pages get the most impressions |
| Coverage | Any pages Google can't index |
| Enhancements | Structured data errors (your JSON-LD will appear here) |

---

## Notes

- Search Console does not use cookies or require user consent — it is purely server-side data from Google's crawls.
- It takes 1–4 weeks after setup before meaningful data appears in Performance reports.
- The JSON-LD structured data added to `index.html` will appear in the **Rich Results** section once Google processes it.
