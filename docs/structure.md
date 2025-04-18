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
│       ├───node_modules/
│       │   ├───.astro/
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
│       │   ├───.mf/
│       │   │   └───cf.json
│       │   ├───.vite/
│       │   │   └───deps/
│       │   │       └───...
│       │   ├───@astrojs/
│       │   ├───@biomejs/
│       │   ├───@cloudflare/
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
│       │   │   ├───global.css
│       │   │   └───scroll-behavior.css
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
├───docs/
│   ├───hero.svg
│   ├───lighthouse.png
│   └───structure.md
├───packages/
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
└───vitest.workspace.ts

```
