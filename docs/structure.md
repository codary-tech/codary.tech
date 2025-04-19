# Project Structure

```plaintext
├───.devcontainer/
│   ├───Dockerfile
│   ├───devcontainer.json
│   └───welcome-message.txt
├───.github/
│   ├───ISSUE_TEMPLATE/
│   │   ├───bug_report.md
│   │   └───feature_request.md
│   ├───actions/
│   │   └───install/
│   │       └───node/
│   │           └───action.yml
│   ├───workflows/
│   │   ├───.DS_Store
│   │   ├───build-and-test.yml
│   │   ├───cleanup.yml
│   │   ├───codeql.yml
│   │   ├───first-interaction.yml
│   │   ├───image-actions.yml
│   │   └───links.yml
│   ├───.DS_Store
│   ├───FUNDING.yml
│   ├───PULL_REQUEST_TEMPLATE.md
│   ├───copilot-instructions.md
│   └───dependabot.yml
├───.vscode/
│   ├───extensions.json
│   ├───launch.json
│   └───settings.sample.json
├───apps/
│   └───website/
│       ├───.astro/
│       │   ├───collections/
│       │   │   ├───apps.schema.json
│       │   │   ├───articles.schema.json
│       │   │   ├───authors.schema.json
│       │   │   ├───categories.schema.json
│       │   │   ├───newsletter.schema.json
│       │   │   ├───repositories.schema.json
│       │   │   └───tags.schema.json
│       │   ├───integrations/
│       │   │   └───_astrojs_cloudflare/
│       │   ├───content-assets.mjs
│       │   ├───content-modules.mjs
│       │   ├───content.d.ts
│       │   ├───data-store.json
│       │   ├───env.d.ts
│       │   ├───settings.json
│       │   └───types.d.ts
│       ├───.wrangler/
│       │   ├───state/
│       │   │   └───v3/
│       │   │       └───...
│       │   ├───tmp/
│       │   └───.DS_Store
│       ├───dist/
│       │   ├───_astro/
│       │   │   ├───0b716be6-2c45-49eb-8080-4161ceaac542.DU11Ocdk.avif
│       │   │   ├───0b716be6-2c45-49eb-8080-4161ceaac542.DU11Ocdk_1hzdID.webp
│       │   │   ├───0b716be6-2c45-49eb-8080-4161ceaac542.DU11Ocdk_Z2oKXdN.avif
│       │   │   ├───7762799e-0693-4292-a309-f6a4eec57dc9.UsJNU5xO.avif
│       │   │   ├───7762799e-0693-4292-a309-f6a4eec57dc9.UsJNU5xO_1CD16a.webp
│       │   │   ├───7762799e-0693-4292-a309-f6a4eec57dc9.UsJNU5xO_Z23HaQh.avif
│       │   │   ├───AuthButton.astro_astro_type_script_index_0_lang.Cdlp0Xu4.js
│       │   │   ├───Docker.Dm4Tl1hP.png
│       │   │   ├───Excalidraw.Dgkre1O1.png
│       │   │   ├───Grafana.BGoaC8aw.png
│       │   │   ├───Header.astro_astro_type_script_index_0_lang.DdwlMVEo.js
│       │   │   ├───Hero.astro_astro_type_script_index_0_lang.CO_pgPF5.js
│       │   │   ├───HomeAssistant.BZPywLFY.png
│       │   │   ├───Humane-AI.DDCUawI7.avif
│       │   │   ├───Humane-AI.DDCUawI7_Z12kpkR.avif
│       │   │   ├───Humane-AI.DDCUawI7_mmbxB.webp
│       │   │   ├───N8n.DLUwoOIW.png
│       │   │   ├───NodeRED.BqutSHc6.png
│       │   │   ├───Pihole.DvfUFYVx.png
│       │   │   ├───Prometheus.DzHRzETm.png
│       │   │   ├───Search.astro_astro_type_script_index_0_lang.mBpmxV9R.js
│       │   │   ├───Supabase.Xe1Gzhob.png
│       │   │   ├───TailwindCSS.D43_eTwl.png
│       │   │   ├───VSCode.B3hz57G5.png
│       │   │   ├───_id_.C998qweq.css
│       │   │   ├───apple-tv-netflix.fp5SXD8M.avif
│       │   │   ├───apple-tv-netflix.fp5SXD8M_Z1MrbvP.webp
│       │   │   ├───apple-tv-netflix.fp5SXD8M_a0ATg.avif
│       │   │   ├───b2e160fc-70d4-47ba-8078-60889c495ad2.DJqYc4Q_.avif
│       │   │   ├───b2e160fc-70d4-47ba-8078-60889c495ad2.DJqYc4Q__A8nD3.avif
│       │   │   ├───b2e160fc-70d4-47ba-8078-60889c495ad2.DJqYc4Q__ZMHydr.webp
│       │   │   ├───bybit.DDHkpZMN.avif
│       │   │   ├───bybit.DDHkpZMN_Z1KvC5t.avif
│       │   │   ├───bybit.DDHkpZMN_Z2cVAYh.webp
│       │   │   ├───cloudflare-vs-laliga-2.Bfvv6cgV.webp
│       │   │   ├───cloudflare-vs-laliga-2.Bfvv6cgV_Z3vcc1.webp
│       │   │   ├───cloudflare-vs-laliga-2.Bfvv6cgV_jGf4L.avif
│       │   │   ├───cloudflare-vs-laliga.D4KgojTp.avif
│       │   │   ├───cloudflare-vs-laliga.D4KgojTp_2mhant.webp
│       │   │   ├───cloudflare-vs-laliga.D4KgojTp_Z2kHw9F.avif
│       │   │   ├───dfcf9bb1-fbf6-4f74-bb38-0b53dd8db595.CtaNsZvs.avif
│       │   │   ├───dfcf9bb1-fbf6-4f74-bb38-0b53dd8db595.CtaNsZvs_SY6h9.avif
│       │   │   ├───dfcf9bb1-fbf6-4f74-bb38-0b53dd8db595.CtaNsZvs_ZtQPzl.webp
│       │   │   ├───grok-3-elonwebp.B2uOaqAn.avif
│       │   │   ├───grok-3-elonwebp.B2uOaqAn_YCAT6.avif
│       │   │   ├───grok-3-elonwebp.B2uOaqAn_Z1z7CCA.webp
│       │   │   ├───inter-cyrillic-ext-wght-normal.B2xhLi22.woff2
│       │   │   ├───inter-cyrillic-wght-normal.CMZtQduZ.woff2
│       │   │   ├───inter-greek-ext-wght-normal.CGAr0uHJ.woff2
│       │   │   ├───inter-greek-wght-normal.CaVNZxsx.woff2
│       │   │   ├───inter-latin-ext-wght-normal.CFHvXkgd.woff2
│       │   │   ├───inter-latin-wght-normal.C2S99t-D.woff2
│       │   │   ├───inter-vietnamese-wght-normal.CBcvBZtf.woff2
│       │   │   ├───iphone-16e-finish-unselect-gallery.BScdJee0.avif
│       │   │   ├───iphone-16e-finish-unselect-gallery.BScdJee0_2am7HT.avif
│       │   │   ├───iphone-16e-finish-unselect-gallery.BScdJee0_LvaQp.webp
│       │   │   ├───la-democratizacion-de-la-ia.DXxHLJ2k.avif
│       │   │   ├───la-democratizacion-de-la-ia.DXxHLJ2k_1pLDf7.avif
│       │   │   ├───la-democratizacion-de-la-ia.DXxHLJ2k_Zqs4gm.webp
│       │   │   ├───microsoft-cancela-servidores.BCLsoflq.avif
│       │   │   ├───microsoft-cancela-servidores.BCLsoflq_2jQx6n.avif
│       │   │   ├───microsoft-cancela-servidores.BCLsoflq_Z29WQI2.webp
│       │   │   ├───rust-programming-language.BTgxkMKQ.avif
│       │   │   ├───rust-programming-language.BTgxkMKQ_Jea7O.webp
│       │   │   ├───rust-programming-language.BTgxkMKQ_ZzYwWb.avif
│       │   │   ├───search.CXOjeUv_.css
│       │   │   ├───user.service.B6hO99z-.js
│       │   │   ├───whoAMI-cover.C9Hc_YOJ.avif
│       │   │   ├───whoAMI-cover.C9Hc_YOJ_1FnY3J.webp
│       │   │   ├───whoAMI-cover.C9Hc_YOJ_Z1bEB4w.avif
│       │   │   ├───xAI.21f2Gr9k.avif
│       │   │   ├───xAI.21f2Gr9k_2hvzw5.avif
│       │   │   └───xAI.21f2Gr9k_Z1z8SSE.webp
│       │   ├───_worker.js/
│       │   │   ├───chunks/
│       │   │   │   └───...
│       │   │   ├───pages/
│       │   │   │   └───...
│       │   │   ├───_@astrojs-ssr-adapter.mjs
│       │   │   ├───_astro-internal_middleware.mjs
│       │   │   ├───_noop-actions.mjs
│       │   │   ├───index.js
│       │   │   ├───manifest_DwFc9Xi2.mjs
│       │   │   └───renderers.mjs
│       │   ├───admin/
│       │   │   └───config.yml
│       │   ├───en/
│       │   │   ├───404/
│       │   │   │   └───...
│       │   │   ├───author/
│       │   │   │   └───...
│       │   │   ├───news/
│       │   │   │   └───...
│       │   │   ├───newsletter/
│       │   │   │   └───...
│       │   │   ├───search/
│       │   │   │   └───...
│       │   │   ├───tag/
│       │   │   │   └───...
│       │   │   ├───index.html
│       │   │   └───rss.xml
│       │   ├───es/
│       │   │   ├───404/
│       │   │   │   └───...
│       │   │   ├───author/
│       │   │   │   └───...
│       │   │   ├───news/
│       │   │   │   └───...
│       │   │   ├───newsletter/
│       │   │   │   └───...
│       │   │   ├───search/
│       │   │   │   └───...
│       │   │   ├───tag/
│       │   │   │   └───...
│       │   │   ├───index.html
│       │   │   └───rss.xml
│       │   ├───og/
│       │   │   ├───en/
│       │   │   │   └───...
│       │   │   └───es/
│       │   │       └───...
│       │   ├───pagefind/
│       │   │   ├───fragment/
│       │   │   │   └───...
│       │   │   ├───index/
│       │   │   │   └───...
│       │   │   ├───pagefind-entry.json
│       │   │   ├───pagefind-highlight.js
│       │   │   ├───pagefind-modular-ui.css
│       │   │   ├───pagefind-modular-ui.js
│       │   │   ├───pagefind-ui.css
│       │   │   ├───pagefind-ui.js
│       │   │   ├───pagefind.en-us_c587e1e0dc72e.pf_meta
│       │   │   ├───pagefind.en_49ca315537.pf_meta
│       │   │   ├───pagefind.es_4ef1d4d8db.pf_meta
│       │   │   ├───pagefind.js
│       │   │   ├───wasm.en-us.pagefind
│       │   │   ├───wasm.en.pagefind
│       │   │   ├───wasm.es.pagefind
│       │   │   └───wasm.unknown.pagefind
│       │   ├───rss/
│       │   │   └───styles.xsl
│       │   ├───~partytown/
│       │   │   ├───partytown-atomics.js
│       │   │   ├───partytown-media.js
│       │   │   ├───partytown-sw.js
│       │   │   └───partytown.js
│       │   ├───.DS_Store
│       │   ├───.assetsignore
│       │   ├───404.html
│       │   ├───_routes.json
│       │   ├───android-chrome-192x192.png
│       │   ├───android-chrome-512x512.png
│       │   ├───apple-touch-icon.png
│       │   ├───favicon-16x16.png
│       │   ├───favicon-32x32.png
│       │   ├───favicon.ico
│       │   ├───favicon.svg
│       │   ├───index.html
│       │   ├───ogp.png
│       │   ├───site.webmanifest
│       │   ├───sitemap-0.xml
│       │   └───sitemap-index.xml
│       ├───node_modules/
│       │   ├───.astro/
│       │   │   ├───assets/
│       │   │   │   └───...
│       │   │   └───data-store.json
│       │   ├───.bin/
│       │   │   ├───acorn
│       │   │   ├───astro
│       │   │   ├───astro-check
│       │   │   ├───biome
│       │   │   ├───browserslist
│       │   │   ├───jiti
│       │   │   ├───rollup
│       │   │   ├───tsc
│       │   │   ├───tsserver
│       │   │   ├───vite
│       │   │   ├───vitest
│       │   │   ├───workerd
│       │   │   ├───wrangler
│       │   │   ├───wrangler2
│       │   │   └───yaml
│       │   ├───.vite/
│       │   │   ├───deps/
│       │   │   │   └───...
│       │   │   └───results.json
│       │   ├───.vite-temp/
│       │   ├───@astrojs/
│       │   ├───@biomejs/
│       │   ├───@cloudflare/
│       │   ├───@codary/
│       │   ├───@faker-js/
│       │   ├───@fontsource-variable/
│       │   ├───@iconify-json/
│       │   ├───@supabase/
│       │   ├───@tailwindcss/
│       │   └───@types/
│       ├───public/
│       │   ├───admin/
│       │   │   └───config.yml
│       │   ├───rss/
│       │   │   └───styles.xsl
│       │   ├───.DS_Store
│       │   ├───.assetsignore
│       │   ├───android-chrome-192x192.png
│       │   ├───android-chrome-512x512.png
│       │   ├───apple-touch-icon.png
│       │   ├───favicon-16x16.png
│       │   ├───favicon-32x32.png
│       │   ├───favicon.ico
│       │   ├───favicon.svg
│       │   ├───ogp.png
│       │   └───site.webmanifest
│       ├───scripts/
│       │   └───organize-articles.js
│       ├───src/
│       │   ├───assets/
│       │   │   ├───font/
│       │   │   │   └───...
│       │   │   ├───images/
│       │   │   │   └───...
│       │   │   └───.DS_Store
│       │   ├───components/
│       │   │   ├───apps/
│       │   │   │   └───...
│       │   │   ├───i18n/
│       │   │   │   └───...
│       │   │   ├───.DS_Store
│       │   │   ├───Analytics.astro
│       │   │   ├───ArticleCard.astro
│       │   │   ├───AuthButton.astro
│       │   │   ├───AuthorCard.astro
│       │   │   ├───AuthorSocials.astro
│       │   │   ├───AuthorWrapper.astro
│       │   │   ├───BackToTop.astro
│       │   │   ├───Button.astro
│       │   │   ├───ByAuthor.astro
│       │   │   ├───ContactBox.astro
│       │   │   ├───CtaNewsletterSubscription.astro
│       │   │   ├───DotMenuIcon.astro
│       │   │   ├───Footer.astro
│       │   │   ├───FormattedDate.astro
│       │   │   ├───GridContainer.astro
│       │   │   ├───Header.astro
│       │   │   ├───HeaderProgressBar.astro
│       │   │   ├───Hero.astro
│       │   │   ├───IconButton.astro
│       │   │   ├───Input.astro
│       │   │   ├───LatestNewsletter.astro
│       │   │   ├───LatestPosts.astro
│       │   │   ├───Link.astro
│       │   │   ├───LiteYouTube.astro
│       │   │   ├───Logo.astro
│       │   │   ├───NavLink.astro
│       │   │   ├───Navigation.astro
│       │   │   ├───ObfuscateEmail.astro
│       │   │   ├───OptimizedPicture.astro
│       │   │   ├───PageHeadline.astro
│       │   │   ├───Pagination.astro
│       │   │   ├───PostCard.astro
│       │   │   ├───PostCategory.astro
│       │   │   ├───PostFooter.astro
│       │   │   ├───PostHeader.astro
│       │   │   ├───PostTag.astro
│       │   │   ├───PostTags.astro
│       │   │   ├───PostsList.astro
│       │   │   ├───ReadingTime.astro
│       │   │   ├───SearchButton.astro
│       │   │   ├───SignupForm.astro
│       │   │   ├───SocialLinks.astro
│       │   │   ├───SocialMediaShare.astro
│       │   │   ├───SubscriptionForm.astro
│       │   │   └───ThemeToggle.astro
│       │   ├───data/
│       │   │   ├───apps/
│       │   │   │   └───...
│       │   │   ├───articles/
│       │   │   │   └───...
│       │   │   ├───authors/
│       │   │   │   └───...
│       │   │   ├───categories/
│       │   │   │   └───...
│       │   │   ├───tags/
│       │   │   │   └───...
│       │   │   └───.DS_Store
│       │   ├───i18n/
│       │   │   ├───__tests__/
│       │   │   │   └───...
│       │   │   ├───translations/
│       │   │   │   └───...
│       │   │   ├───.DS_Store
│       │   │   ├───i18n.ts
│       │   │   ├───index.ts
│       │   │   ├───locales.ts
│       │   │   ├───types.ts
│       │   │   └───ui.ts
│       │   ├───layouts/
│       │   │   ├───Article.astro
│       │   │   ├───Base.astro
│       │   │   ├───General.astro
│       │   │   └───Page.astro
│       │   ├───lib/
│       │   │   ├───loaders/
│       │   │   │   └───...
│       │   │   ├───supabase.helper.ts
│       │   │   ├───supabase.ts
│       │   │   └───utils.ts
│       │   ├───middleware/
│       │   │   └───index.ts
│       │   ├───models/
│       │   │   ├───apps/
│       │   │   │   └───...
│       │   │   ├───article/
│       │   │   │   └───...
│       │   │   ├───auth/
│       │   │   │   └───...
│       │   │   ├───author/
│       │   │   │   └───...
│       │   │   ├───category/
│       │   │   │   └───...
│       │   │   ├───menu/
│       │   │   │   └───...
│       │   │   ├───newsletter/
│       │   │   │   └───...
│       │   │   ├───post/
│       │   │   │   └───...
│       │   │   ├───repo/
│       │   │   │   └───...
│       │   │   ├───tag/
│       │   │   │   └───...
│       │   │   └───.DS_Store
│       │   ├───pages/
│       │   │   ├───[lang]/
│       │   │   │   └───...
│       │   │   ├───api/
│       │   │   │   └───...
│       │   │   ├───en/
│       │   │   │   └───...
│       │   │   ├───es/
│       │   │   │   └───...
│       │   │   ├───og/
│       │   │   │   └───...
│       │   │   ├───.DS_Store
│       │   │   ├───404.astro
│       │   │   ├───admin.astro
│       │   │   ├───index.astro
│       │   │   └───robots.txt.ts
│       │   ├───styles/
│       │   │   └───global.css
│       │   ├───utils/
│       │   │   ├───__tests__/
│       │   │   │   └───...
│       │   │   ├───open-graph/
│       │   │   │   └───...
│       │   │   ├───test/
│       │   │   │   └───...
│       │   │   ├───.DS_Store
│       │   │   ├───collection.entity.ts
│       │   │   ├───date.ts
│       │   │   ├───gravatar.service.ts
│       │   │   ├───image.utils.ts
│       │   │   └───remark-reading-time.mjs
│       │   ├───.DS_Store
│       │   ├───consts.ts
│       │   ├───content.config.ts
│       │   └───env.d.ts
│       ├───.env
│       ├───.env.example
│       ├───astro.config.mjs
│       ├───package.json
│       ├───pnpm-lock.yaml
│       ├───tsconfig.json
│       ├───vitest.config.ts
│       ├───worker-configuration.d.ts
│       └───wrangler.jsonc
├───config/
│   ├───node_modules/
│   │   ├───.bin/
│   │   │   ├───stylelint
│   │   │   └───vitest
│   │   ├───@codary/
│   │   ├───@codecov/
│   │   └───@tailwindcss/
│   ├───styles/
│   │   ├───global.css
│   │   ├───index.css
│   │   └───scroll-behavior.css
│   ├───.DS_Store
│   ├───package.json
│   ├───stylelint.config.cjs
│   ├───tsconfig.json
│   ├───vite.config.shared.d.ts
│   ├───vite.config.shared.mjs
│   ├───vitest.config.shared.d.ts
│   └───vitest.config.shared.mjs
├───docs/
│   ├───hero.svg
│   ├───lighthouse.png
│   └───structure.md
├───packages/
│   ├───tsconfig/
│   │   ├───package.json
│   │   ├───tsconfig.base.json
│   │   ├───tsconfig.node.json
│   │   ├───tsconfig.strict.json
│   │   ├───tsconfig.strictest.json
│   │   └───tsconfig.vue.json
│   ├───utilities/
│   │   ├───node_modules/
│   │   │   ├───.bin/
│   │   │   │   ├───jiti
│   │   │   │   ├───rollup
│   │   │   │   ├───tsc
│   │   │   │   ├───tsserver
│   │   │   │   ├───vite
│   │   │   │   ├───vitest
│   │   │   │   └───yaml
│   │   │   ├───.cache/
│   │   │   │   └───jiti/
│   │   │   ├───.vite/
│   │   │   │   ├───vitest/
│   │   │   │   │   └───...
│   │   │   │   └───results.json
│   │   │   ├───.vite-temp/
│   │   │   ├───@codary/
│   │   │   └───@internationalized/
│   │   ├───src/
│   │   │   ├───avatar/
│   │   │   │   ├───avatar.spec.ts
│   │   │   │   └───avatar.ts
│   │   │   ├───chunk/
│   │   │   │   ├───chunk.spec.ts
│   │   │   │   └───chunk.ts
│   │   │   ├───debounce/
│   │   │   │   ├───debounce.spec.ts
│   │   │   │   └───debounce.ts
│   │   │   ├───format-date/
│   │   │   │   ├───format-date.spec.ts
│   │   │   │   └───format-date.ts
│   │   │   ├───group-by/
│   │   │   │   ├───group-by.spec.ts
│   │   │   │   └───group-by.ts
│   │   │   ├───initials/
│   │   │   │   ├───initials.spec.ts
│   │   │   │   └───initials.ts
│   │   │   ├───is-equal/
│   │   │   │   ├───is-equal.spec.ts
│   │   │   │   └───is-equal.ts
│   │   │   ├───offset-date/
│   │   │   │   ├───offset-date.spec.ts
│   │   │   │   └───offset-date.ts
│   │   │   ├───order-by/
│   │   │   │   ├───order-by.spec.ts
│   │   │   │   └───order-by.ts
│   │   │   ├───random-element/
│   │   │   │   ├───random-element.spec.ts
│   │   │   │   └───random-element.ts
│   │   │   ├───random-number/
│   │   │   │   ├───random-number.spec.ts
│   │   │   │   └───random-number.ts
│   │   │   ├───random-word/
│   │   │   │   ├───random-word.spec.ts
│   │   │   │   └───random-word.ts
│   │   │   ├───range/
│   │   │   │   ├───range.spec.ts
│   │   │   │   └───range.ts
│   │   │   ├───remove/
│   │   │   │   ├───remove.spec.ts
│   │   │   │   └───remove.ts
│   │   │   ├───sort-by/
│   │   │   │   ├───sort-by.spec.ts
│   │   │   │   └───sort-by.ts
│   │   │   ├───theme/
│   │   │   │   ├───color-theme.spec.ts
│   │   │   │   └───color-theme.ts
│   │   │   ├───.DS_Store
│   │   │   └───index.ts
│   │   ├───.DS_Store
│   │   ├───package.json
│   │   ├───tsconfig.json
│   │   ├───vite.config.ts
│   │   └───vitest.config.ts
│   └───.DS_Store
├───supabase/
│   ├───.branches/
│   │   └───_current_branch
│   ├───.temp/
│   │   ├───cli-latest
│   │   ├───gotrue-version
│   │   ├───pooler-url
│   │   ├───postgres-version
│   │   ├───project-ref
│   │   └───rest-version
│   ├───images/
│   ├───migrations/
│   │   ├───20250227195823_user_management_starter.sql
│   │   ├───20250227200050_newsletter_subscriptions.sql
│   │   └───20250228000000_storage_policy_updates.sql
│   ├───templates/
│   │   ├───change_email.html
│   │   ├───confirm_signup.html
│   │   ├───invite_user.html
│   │   ├───magic_link.html
│   │   └───reset_password.html
│   ├───.DS_Store
│   ├───.gitignore
│   └───config.toml
├───.dev.vars
├───.editorconfig
├───.gitignore
├───.npmrc
├───.pre-commit-config.yaml
├───.stylelintignore
├───CODE_OF_CONDUCT.md
├───CONTRIBUTING.md
├───LICENSE
├───README.md
├───SECURITY.md
├───biome.json
├───lychee.toml
├───package.json
├───pnpm-lock.yaml
├───pnpm-workspace.yaml
├───renovate.json
├───vitest.config.ts
└───vitest.workspace.ts

```
