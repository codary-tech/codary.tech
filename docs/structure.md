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
│   ├───workflows/
│   │   ├───.DS_Store
│   │   ├───cleanup.yml
│   │   ├───codeql.yml
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
├───docs/
│   ├───hero.svg
│   ├───lighthouse.png
│   └───structure.md
├───public/
│   ├───admin/
│   │   └───config.yml
│   ├───rss/
│   │   └───styles.xsl
│   ├───.assetsignore
│   ├───android-chrome-192x192.png
│   ├───android-chrome-512x512.png
│   ├───apple-touch-icon.png
│   ├───favicon-16x16.png
│   ├───favicon-32x32.png
│   ├───favicon.ico
│   ├───favicon.svg
│   ├───ogp.png
│   └───site.webmanifest
├───scripts/
│   └───organize-articles.js
├───src/
│   ├───assets/
│   │   └───images/
│   │       ├───0b716be6-2c45-49eb-8080-4161ceaac542.avif
│   │       ├───47455.avif
│   │       ├───7762799e-0693-4292-a309-f6a4eec57dc9.avif
│   │       ├───Humane-AI.avif
│   │       ├───apple-tv-netflix.avif
│   │       ├───b2e160fc-70d4-47ba-8078-60889c495ad2.avif
│   │       ├───blog-placeholder-1.avif
│   │       ├───blog-placeholder-2.avif
│   │       ├───blog-placeholder-3.avif
│   │       ├───blog-placeholder-4.avif
│   │       ├───bybit.avif
│   │       ├───cloudflare-vs-laliga-2.webp
│   │       ├───cloudflare-vs-laliga.avif
│   │       ├───dfcf9bb1-fbf6-4f74-bb38-0b53dd8db595.avif
│   │       ├───grok-3-elonwebp.avif
│   │       ├───iphone-16e-finish-unselect-gallery.avif
│   │       ├───la-democratizacion-de-la-ia.avif
│   │       ├───microsoft-cancela-servidores.avif
│   │       ├───rust-programming-language.avif
│   │       ├───whoAMI-cover.avif
│   │       ├───whoami.avif
│   │       └───xAI.avif
│   ├───components/
│   │   ├───i18n/
│   │   │   ├───LocaleHtmlHead.astro
│   │   │   ├───LocaleSelect.astro
│   │   │   ├───LocaleSelectSingle.astro
│   │   │   ├───LocaleSuggest.astro
│   │   │   ├───LocalesHomeList.astro
│   │   │   └───NotTranslateCaution.astro
│   │   ├───Analytics.astro
│   │   ├───ArticleCard.astro
│   │   ├───AuthButton.astro
│   │   ├───AuthorCard.astro
│   │   ├───AuthorSocials.astro
│   │   ├───AuthorWrapper.astro
│   │   ├───BackToTop.astro
│   │   ├───Button.astro
│   │   ├───ByAuthor.astro
│   │   ├───ContactBox.astro
│   │   ├───CtaNewsletterSubscription.astro
│   │   ├───DotMenuIcon.astro
│   │   ├───Footer.astro
│   │   ├───FormattedDate.astro
│   │   ├───GridContainer.astro
│   │   ├───Header.astro
│   │   ├───HeaderProgressBar.astro
│   │   ├───Hero.astro
│   │   ├───IconButton.astro
│   │   ├───Input.astro
│   │   ├───LatestNewsletter.astro
│   │   ├───LatestPosts.astro
│   │   ├───Link.astro
│   │   ├───Logo.astro
│   │   ├───NavLink.astro
│   │   ├───Navigation.astro
│   │   ├───ObfuscateEmail.astro
│   │   ├───OptimizedPicture.astro
│   │   ├───PageHeadline.astro
│   │   ├───Pagination.astro
│   │   ├───PostCard.astro
│   │   ├───PostCategory.astro
│   │   ├───PostFooter.astro
│   │   ├───PostHeader.astro
│   │   ├───PostTag.astro
│   │   ├───PostTags.astro
│   │   ├───PostsList.astro
│   │   ├───ReadingTime.astro
│   │   ├───SearchButton.astro
│   │   ├───SignupForm.astro
│   │   ├───SocialLinks.astro
│   │   ├───SocialMediaShare.astro
│   │   ├───SubscriptionForm.astro
│   │   └───ThemeToggle.astro
│   ├───data/
│   │   ├───articles/
│   │   │   ├───en/
│   │   │   │   └───2025/
│   │   │   │       └───...
│   │   │   └───es/
│   │   │       └───2025/
│   │   │           └───...
│   │   ├───authors/
│   │   │   ├───en/
│   │   │   │   └───yuniel-acosta.json
│   │   │   └───es/
│   │   │       └───yuniel-acosta.json
│   │   ├───categories/
│   │   │   ├───en/
│   │   │   │   ├───ai.md
│   │   │   │   ├───cybersecurity.md
│   │   │   │   ├───internet.md
│   │   │   │   ├───smartphones.md
│   │   │   │   ├───social-networks.md
│   │   │   │   ├───startups.md
│   │   │   │   ├───streaming.md
│   │   │   │   ├───technology.md
│   │   │   │   └───web-development.md
│   │   │   └───es/
│   │   │       ├───ai.md
│   │   │       ├───cybersecurity.md
│   │   │       ├───internet.md
│   │   │       ├───smartphones.md
│   │   │       ├───social-networks.md
│   │   │       ├───startups.md
│   │   │       ├───streaming.md
│   │   │       ├───technology.md
│   │   │       └───web-development.md
│   │   └───tags/
│   │       ├───en/
│   │       │   ├───ai.md
│   │       │   ├───apple.md
│   │       │   ├───automatizacion.md
│   │       │   ├───aws.md
│   │       │   ├───chatgpt.md
│   │       │   ├───china.md
│   │       │   ├───cloudflare.md
│   │       │   ├───data-centers.md
│   │       │   ├───dispositivos-wearable.md
│   │       │   ├───docker.md
│   │       │   ├───ee-uu.md
│   │       │   ├───git.md
│   │       │   ├───grok.md
│   │       │   ├───hacking.md
│   │       │   ├───industria-global.md
│   │       │   ├───internet.md
│   │       │   ├───inversores.md
│   │       │   ├───iphone.md
│   │       │   ├───isp.md
│   │       │   ├───javascript.md
│   │       │   ├───kubernetes.md
│   │       │   ├───microsoft.md
│   │       │   ├───netflix.md
│   │       │   ├───node-js.md
│   │       │   ├───openai.md
│   │       │   ├───politicas-de-seguridad.md
│   │       │   ├───programacion.md
│   │       │   ├───python.md
│   │       │   ├───react.md
│   │       │   ├───rust.md
│   │       │   ├───seguridad.md
│   │       │   ├───semiconductores.md
│   │       │   ├───smartphones.md
│   │       │   ├───tooling.md
│   │       │   ├───typescript.md
│   │       │   ├───vs-code.md
│   │       │   ├───vue.md
│   │       │   ├───web-assembly.md
│   │       │   ├───x.md
│   │       │   └───youtube.md
│   │       └───es/
│   │           ├───ai.md
│   │           ├───apple.md
│   │           ├───automatizacion.md
│   │           ├───aws.md
│   │           ├───chatgpt.md
│   │           ├───china.md
│   │           ├───cloudflare.md
│   │           ├───data-centers.md
│   │           ├───dispositivos-wearable.md
│   │           ├───docker.md
│   │           ├───ee-uu.md
│   │           ├───git.md
│   │           ├───grok.md
│   │           ├───hacking.md
│   │           ├───industria-global.md
│   │           ├───internet.md
│   │           ├───inversores.md
│   │           ├───iphone.md
│   │           ├───isp.md
│   │           ├───javascript.md
│   │           ├───kubernetes.md
│   │           ├───microsoft.md
│   │           ├───netflix.md
│   │           ├───node-js.md
│   │           ├───openai.md
│   │           ├───politicas-de-seguridad.md
│   │           ├───programacion.md
│   │           ├───python.md
│   │           ├───react.md
│   │           ├───rust.md
│   │           ├───seguridad.md
│   │           ├───semiconductores.md
│   │           ├───smartphones.md
│   │           ├───tooling.md
│   │           ├───typescript.md
│   │           ├───vs-code.md
│   │           ├───vue.md
│   │           ├───web-assembly.md
│   │           ├───x.md
│   │           └───youtube.md
│   ├───i18n/
│   │   ├───__tests__/
│   │   │   └───i18n.test.ts
│   │   ├───translations/
│   │   │   ├───account.ts
│   │   │   ├───auth.ts
│   │   │   ├───common.ts
│   │   │   ├───contact.ts
│   │   │   ├───email.ts
│   │   │   ├───footer.ts
│   │   │   ├───home.ts
│   │   │   ├───navigation.ts
│   │   │   ├───newsletter.ts
│   │   │   ├───posts.ts
│   │   │   └───theme.ts
│   │   ├───i18n.ts
│   │   ├───index.ts
│   │   ├───locales.ts
│   │   ├───types.ts
│   │   └───ui.ts
│   ├───layouts/
│   │   ├───Article.astro
│   │   ├───Base.astro
│   │   ├───General.astro
│   │   └───Page.astro
│   ├───lib/
│   │   ├───supabase.helper.ts
│   │   ├───supabase.ts
│   │   └───utils.ts
│   ├───middleware/
│   │   └───index.ts
│   ├───models/
│   │   ├───article/
│   │   │   ├───__tests__/
│   │   │   │   └───article-selection.strategy.test.ts
│   │   │   ├───article-selection.strategy.ts
│   │   │   ├───article.criteria.ts
│   │   │   ├───article.mapper.ts
│   │   │   ├───article.model.ts
│   │   │   ├───article.service.ts
│   │   │   └───index.ts
│   │   ├───auth/
│   │   │   ├───user.api.response.ts
│   │   │   └───user.service.ts
│   │   ├───author/
│   │   │   ├───author.criteria.ts
│   │   │   ├───author.mapper.ts
│   │   │   ├───author.model.ts
│   │   │   ├───author.service.ts
│   │   │   └───index.ts
│   │   ├───category/
│   │   │   ├───category.criteria.ts
│   │   │   ├───category.mapper.ts
│   │   │   ├───category.model.ts
│   │   │   ├───category.service.ts
│   │   │   └───index.ts
│   │   ├───menu/
│   │   │   ├───index.ts
│   │   │   ├───menu.constants.ts
│   │   │   ├───menu.service.ts
│   │   │   └───menu.type.ts
│   │   ├───newsletter/
│   │   │   ├───index.ts
│   │   │   ├───newsletter.criteria.ts
│   │   │   ├───newsletter.mapper.ts
│   │   │   ├───newsletter.model.ts
│   │   │   └───newsletter.service.ts
│   │   ├───post/
│   │   │   ├───post.model.ts
│   │   │   └───post.service.ts
│   │   └───tag/
│   │       ├───index.ts
│   │       ├───tag.criteria.ts
│   │       ├───tag.mapper.ts
│   │       ├───tag.model.ts
│   │       └───tag.service.ts
│   ├───pages/
│   │   ├───[lang]/
│   │   │   ├───author/
│   │   │   │   └───[...id].astro
│   │   │   ├───news/
│   │   │   │   ├───category/
│   │   │   │   │   └───...
│   │   │   │   ├───page/
│   │   │   │   │   └───...
│   │   │   │   ├───tag/
│   │   │   │   │   └───...
│   │   │   │   ├───[...id].astro
│   │   │   │   └───index.astro
│   │   │   ├───newsletter/
│   │   │   │   ├───tag/
│   │   │   │   │   └───...
│   │   │   │   ├───[...id].astro
│   │   │   │   └───index.astro
│   │   │   ├───tag/
│   │   │   │   └───[tag]/
│   │   │   │       └───...
│   │   │   ├───404.astro
│   │   │   ├───account.astro
│   │   │   ├───contact.astro
│   │   │   ├───index.astro
│   │   │   ├───rss.xml.js
│   │   │   ├───search.astro
│   │   │   ├───signin.astro
│   │   │   └───signup.astro
│   │   ├───api/
│   │   │   ├───auth/
│   │   │   │   ├───callback.ts
│   │   │   │   ├───signin.ts
│   │   │   │   ├───signout.ts
│   │   │   │   └───signup.ts
│   │   │   ├───newsletter/
│   │   │   │   └───subscribe.ts
│   │   │   ├───refresh-avatar.ts
│   │   │   └───user.ts
│   │   ├───en/
│   │   │   ├───about.mdx
│   │   │   ├───privacy-policy.mdx
│   │   │   └───support.mdx
│   │   ├───es/
│   │   │   ├───about.mdx
│   │   │   ├───privacy-policy.mdx
│   │   │   └───support.mdx
│   │   ├───404.astro
│   │   ├───admin.astro
│   │   ├───index.astro
│   │   └───robots.txt.ts
│   ├───styles/
│   │   ├───global.css
│   │   └───scroll-behavior.css
│   ├───utils/
│   │   ├───__tests__/
│   │   │   ├───collection.entity.test.ts
│   │   │   ├───date.test.ts
│   │   │   ├───gravatar.service.test.ts
│   │   │   └───image.utils.test.ts
│   │   ├───test/
│   │   │   ├───article.generator.mock.ts
│   │   │   ├───author.generator.mock.ts
│   │   │   ├───category.generator.mock.ts
│   │   │   ├───image.generator.mock.ts
│   │   │   └───tag.generator.mock.ts
│   │   ├───collection.entity.ts
│   │   ├───date.ts
│   │   ├───gravatar.service.ts
│   │   ├───image.utils.ts
│   │   └───remark-reading-time.mjs
│   ├───consts.ts
│   ├───content.config.ts
│   └───env.d.ts
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
├───astro.config.mjs
├───biome.json
├───lychee.toml
├───package.json
├───pnpm-lock.yaml
├───renovate.json
├───tsconfig.json
├───vitest.config.ts
├───worker-configuration.d.ts
└───wrangler.jsonc

```
