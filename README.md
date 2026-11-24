# Kiroku

Showcase site for Kiroku, live at https://kiroku.gg

## What Kiroku is

Kiroku (記録, "record") is a reputation bot for Discord. Members type `+rep @user` or `-rep @user` in chat, and the bot answers with the new total. It also has a leaderboard (`/replist`), a daily roll for a cooldown-skipping item (`/daily`), profile cards (`/profile`) and achievements announced in chat.

The bot's own code is private. This repository holds only the public site.

## What the site is

A static site with no build step and no external requests: plain HTML, one stylesheet, one small optional script, and self-hosted fonts.

| Path | Page |
| --- | --- |
| `site/index.html` | The full tour: how rep works, commands, Rep Again and `/daily`, achievements, the profile card |
| `site/coming-soon/index.html` | Where "Log in" and "Ask about Kiroku" lead for now |
| `site/404.html` | Not found |
| `site/assets/` | Stylesheet, script, fonts, icons and the share image |
| `og/` | Sources for the share image and the touch icon (not deployed) |

Every member, server name and number shown on the site is a made-up example.

The pages use no inline styles or scripts and carry a strict Content-Security-Policy in a `<meta>` tag. They work with JavaScript turned off; the script only animates the achievement stamps.

## Preview locally

```sh
python3 -m http.server -d site
```

Then open http://localhost:8000. Asset paths are absolute (`/assets/...`), so serve the `site/` folder as the root rather than opening the files directly.

`site/assets/og-image.png` is a 1200×630 screenshot of `og/card.html`. Re-render it if the card changes.

## Hosting

The site is served by GitHub Pages from the `site/` folder. `.github/workflows/pages.yml` uploads that folder and deploys it on every push to `main`, and can also be run by hand.

One-time setup:

1. Repository **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
2. Under **Custom domain**, enter `kiroku.gg`, then tick **Enforce HTTPS** once the certificate is ready. `site/CNAME` holds the same domain.
3. DNS for `kiroku.gg`:

   | Name | Type | Value |
   | --- | --- | --- |
   | `@` | A | `185.199.108.153` |
   | `@` | A | `185.199.109.153` |
   | `@` | A | `185.199.110.153` |
   | `@` | A | `185.199.111.153` |
   | `@` | AAAA | `2606:50c0:8000::153` |
   | `@` | AAAA | `2606:50c0:8001::153` |
   | `@` | AAAA | `2606:50c0:8002::153` |
   | `@` | AAAA | `2606:50c0:8003::153` |
   | `www` | CNAME | `kaikeeps.github.io` |

`site/.nojekyll` tells Pages to serve the files as they are.

## Fonts

Both typefaces are self-hosted under the SIL Open Font License 1.1. The licence texts sit beside the font files in `site/assets/fonts/`.

- **Dela Gothic One**, © 2020 The Dela Gothic Project Authors. `dela-gothic-one-OFL.txt`
- **M PLUS Rounded 1c**, © 2016 The Rounded M+ Project Authors. `m-plus-rounded-1c-OFL.txt`

The files are subsets: Latin for both faces, plus the two kanji 記 and 録 from Dela Gothic One. The 記 in the icons is drawn from the same outline.

## Contact

support@kiroku.gg
