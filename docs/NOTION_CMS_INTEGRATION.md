# Notion CMS Integration for Astro Blog

This guide explains how to use Notion as a CMS for your blog posts in the Astro website.

## Overview

The Notion CMS integration allows you to:
- Write and manage blog posts in Notion
- Automatically fetch published posts during build time
- Render blog posts as static pages with type-safe Zod validation
- Keep existing Markdown-based articles workflow intact

## Setup Instructions

### 1. Create a Notion Integration

1. Go to [Notion Developer Portal](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Give it a name (e.g., "Codary Blog")
4. Select the workspace where your blog database lives
5. Under "Capabilities", ensure "Read content" is enabled
6. Copy the "Internal Integration Token"

### 2. Create a Blog Database in Notion

Create a new database in Notion with the following properties:

| Property Name | Property Type | Required | Description |
|--------------|---------------|----------|-------------|
| Title | Title | Yes | The blog post title |
| Slug | Text or Formula | Yes | URL-friendly slug (e.g., "my-blog-post") |
| Published | Checkbox | Yes | Whether the post is published |
| Published Date | Date | Yes | Publication date |
| Excerpt | Text | No | Short description/summary |
| Tags | Multi-select | No | Post tags/categories |
| Cover | File or URL | No | Cover image URL |
| Content | Text | No | Post content (optional, for future use) |

**Important**: Share this database with your integration:
1. Click "..." in the top right of your database
2. Select "Add connections"
3. Find and select your integration

### 3. Configure Environment Variables

Add these variables to your `.env` file:

```env
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
```

To find your database ID:
1. Open the database in Notion
2. Copy the URL - it will look like: `https://www.notion.so/workspace/DATABASE_ID?v=...`
3. The `DATABASE_ID` is the part between the last `/` and `?`

### 4. Test the Integration

Run the development server:

```bash
pnpm dev
```

Visit `http://localhost:4321/en/blog` to see your blog posts from Notion.

## How It Works

### Content Collection

The blog posts are loaded as an Astro Content Collection using a custom loader:

```typescript
// src/content.config.ts
const blog = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_TOKEN,
    databaseId: import.meta.env.NOTION_DATABASE_ID,
  }),
  schema: NotionBlogPostSchema,
});
```

### Data Fetching

- Posts are fetched at **build time** using the Notion API
- Only posts with `Published = true` are included
- Posts are automatically sorted by `Published Date` (descending)
- No runtime dependency on Notion API (pure static output)

### Type Safety

All blog posts are validated against a Zod schema:

```typescript
{
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  date: string;
  tags?: string[];
  cover?: string | null;
  published: boolean;
  content?: string;
}
```

## Pages

Two pages are created for the blog:

1. **Blog Index** (`/en/blog`): Lists all published posts
2. **Individual Post** (`/en/blog/[slug]`): Displays a single post

## Deployment

### GitHub Actions Workflow

To automatically rebuild when Notion content changes, you can set up a GitHub Action:

```yaml
name: Rebuild Blog

on:
  schedule:
    - cron: "0 * * * *" # Rebuild every hour
  workflow_dispatch: # Allow manual triggers

jobs:
  rebuild:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: corepack enable pnpm
      - run: pnpm install
      - run: pnpm build
      - # Deploy steps here
```

### Environment Variables in CI/CD

Make sure to add `NOTION_TOKEN` and `NOTION_DATABASE_ID` as secrets in your CI/CD platform.

## Architecture

The implementation follows Astro's Content Layer pattern:

```
src/lib/loaders/notion/
├── index.ts         # Main loader implementing Astro Loader interface
├── helper.ts        # API transformation utilities
├── schema.ts        # Zod schema definition
└── __tests__/       # Unit tests
    └── helper.test.ts
```

## Customization

### Adding New Fields

1. Add the property to your Notion database
2. Update the schema in `src/lib/loaders/notion/schema.ts`
3. Update the transformer in `src/lib/loaders/notion/helper.ts`

### Styling

The blog pages use Tailwind CSS. Customize the styling in:
- `src/pages/[lang]/blog/index.astro` - Blog listing
- `src/pages/[lang]/blog/[...slug].astro` - Individual posts

## Troubleshooting

### "Blog collection not configured" error
- Ensure `NOTION_TOKEN` and `NOTION_DATABASE_ID` are set in your environment
- Verify the database is shared with your integration

### Posts not appearing
- Check that the `Published` checkbox is enabled in Notion
- Verify the `Published Date` is set and valid
- Check build logs for API errors

### Type errors
- Ensure all required fields (Title, Slug, Published Date) are filled in Notion
- Run `pnpm check` to validate TypeScript types

## Testing

Unit tests are located in `src/lib/loaders/notion/__tests__/helper.test.ts`:

```bash
pnpm test
```

## Future Enhancements

Potential improvements:
- Fetch and render full Notion page content (blocks)
- Multi-language support with locale-specific databases
- Rich media support (images, embeds, etc.)
- Incremental builds with change detection
- Notion webhooks for instant rebuilds
