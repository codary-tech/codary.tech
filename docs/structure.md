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
│   │   ├───cleanup.yml
│   │   ├───codeql.yml
│   │   ├───image-actions.yml
│   │   ├───links.yml
│   │   └───pagespeed-insights.yml
│   ├───FUNDING.yml
│   ├───PULL_REQUEST_TEMPLATE.md
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
│   ├───android-icon.png
│   ├───apple-touch-icon.png
│   ├───favicon.png
│   ├───favicon.svg
│   └───ogp.png
├───src/
│   ├───assets/
│   │   ├───en/
│   │   │   └───hero.svg
│   │   ├───es/
│   │   │   └───hero.svg
│   │   ├───images/
│   │   │   ├───en/
│   │   │   │   ├───first-post/
│   │   │   │   │   └───...
│   │   │   │   ├───second-post/
│   │   │   │   │   └───...
│   │   │   │   └───third-post/
│   │   │   │       └───...
│   │   │   ├───es/
│   │   │   │   ├───first-post/
│   │   │   │   │   └───...
│   │   │   │   ├───second-post/
│   │   │   │   │   └───...
│   │   │   │   └───third-post/
│   │   │   │       └───...
│   │   │   ├───blog-placeholder-1.avif
│   │   │   ├───blog-placeholder-2.avif
│   │   │   ├───blog-placeholder-3.avif
│   │   │   └───blog-placeholder-4.avif
│   │   ├───astro-logo.svg
│   │   └───symbol.svg
│   ├───components/
│   │   ├───i18n/
│   │   │   ├───LocaleHtmlHead.astro
│   │   │   ├───LocaleSelect.astro
│   │   │   ├───LocaleSelectSingle.astro
│   │   │   ├───LocaleSuggest.astro
│   │   │   ├───LocalesHomeList.astro
│   │   │   └───NotTranslateCaution.astro
│   │   ├───Footer.astro
│   │   ├───Header.astro
│   │   ├───OptimizedPicture.astro
│   │   └───PageHeadline.astro
│   ├───data/
│   │   ├───authors/
│   │   │   ├───en/
│   │   │   │   └───john-doe.json
│   │   │   └───es/
│   │   │       └───john-doe.json
│   │   ├───blog/
│   │   │   ├───en/
│   │   │   │   ├───first-post/
│   │   │   │   │   └───...
│   │   │   │   ├───second-post/
│   │   │   │   │   └───...
│   │   │   │   └───third-post/
│   │   │   │       └───...
│   │   │   └───es/
│   │   │       ├───first-post/
│   │   │       │   └───...
│   │   │       ├───second-post/
│   │   │       │   └───...
│   │   │       └───third-post/
│   │   │           └───...
│   │   ├───categories/
│   │   │   ├───en/
│   │   │   │   ├───internet.md
│   │   │   │   └───test.md
│   │   │   └───es/
│   │   │       ├───internet.md
│   │   │       └───test.md
│   │   └───tags/
│   │       ├───en/
│   │       │   ├───ai.md
│   │       │   └───test.md
│   │       └───es/
│   │           ├───ai.md
│   │           └───test.md
│   ├───i18n/
│   │   ├───i18n.ts
│   │   ├───index.ts
│   │   ├───locales.ts
│   │   ├───types.ts
│   │   └───ui.ts
│   ├───layouts/
│   │   ├───Article.astro
│   │   └───Base.astro
│   ├───pages/
│   │   ├───[lang]/
│   │   │   ├───blog/
│   │   │   │   ├───[...id].astro
│   │   │   │   └───index.astro
│   │   │   ├───404.astro
│   │   │   ├───index.astro
│   │   │   ├───monolingual.astro
│   │   │   └───rss.xml.js
│   │   ├───en/
│   │   │   ├───feature.mdx
│   │   │   ├───page.mdx
│   │   │   └───setup.mdx
│   │   ├───es/
│   │   │   ├───feature.mdx
│   │   │   ├───page.mdx
│   │   │   └───setup.mdx
│   │   ├───404.astro
│   │   ├───admin.astro
│   │   ├───index.astro
│   │   └───robots.txt.ts
│   ├───styles/
│   │   ├───global.css
│   │   ├───layout.css
│   │   └───reset.css
│   ├───consts.ts
│   ├───content.config.ts
│   └───env.d.ts
├───.gitignore
├───.lycheeignore
├───.npmrc
├───.pre-commit-config.yaml
├───LICENSE
├───README.md
├───SECURITY.md
├───astro.config.mjs
├───biome.json
├───package.json
├───pnpm-lock.yaml
├───renovate.json
└───tsconfig.json

```
