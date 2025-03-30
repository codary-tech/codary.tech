# GitHub Copilot Instructions for Codary.tech

## Project Overview

This project is built using Astro and Tailwind CSS v4. It's a website for Codary.tech that focuses on modern web development practices and performance.

## Technologies

- **Astro**: Used as the main framework for building the site
- **Tailwind CSS v4**: Used for styling with the latest features
- **JavaScript/TypeScript**: For interactive components
- **Biome**: Used for linting, formatting, and organizing imports
- **Supabase**: Used for authentication and storing sensitive and dynamic data
- **Vitest**: Used for unit testing

## Code Style and Conventions

- Use 2 spaces for indentation
- Follow camelCase for JavaScript/TypeScript variables and functions
- Follow PascalCase for component names
- Use meaningful variable and function names
- Add comments for complex logic
- Separate concerns between UI components and business logic
- Prefer `for...of` loops instead of `forEach` for array iteration in JavaScript/TypeScript
- Code formatting follows Biome configuration:
- Tabs for indentation
- Double quotes for strings in JavaScript/TypeScript

## Astro-Specific Guidelines

- Prefer `.astro` files for page templates and layouts
- Use island architecture - minimize JavaScript where possible
- For interactive components, use client directives sparingly (`client:load`, `client:idle`, etc.)
- Leverage Astro's built-in features for optimization

## Tailwind CSS v4 Guidelines

- Use Tailwind utility classes directly in markup
- Follow mobile-first responsive design approach
- Use Tailwind's new color system and features specific to v4
- Extract common UI patterns to components
- Avoid custom CSS unless absolutely necessary

## Supabase Guidelines

- Use Supabase client for authentication flows
- Store sensitive user data in Supabase tables with proper RLS policies
- Implement row-level security for all tables containing user data
- Use Supabase storage for user-generated content when appropriate
- Leverage Supabase real-time subscriptions for dynamic data updates
- Keep Supabase API keys and sensitive configuration in environment variables
- Create typed interfaces that match your Supabase table schemas

## Unit Testing Guidelines

- Use **Vitest** as the testing framework for all unit and component tests
- Place test files in a `__tests__` directory adjacent to the files being tested
- Name test files with the `.test.ts` or `.test.js` suffix
- Follow the AAA pattern (Arrange, Act, Assert) in your test structure
- Mock external dependencies and services when appropriate
- Use descriptive test names that explain the expected behavior
- Group related tests using `describe` blocks
- Test both happy path and error scenarios
- Keep tests independent of each other
- Use `beforeEach` and `afterEach` for setup and teardown
- Use test coverage reports to ensure adequate test coverage
- For component testing, use the provided test helpers and utilities
- Prefer using assertions that provide meaningful error messages
- Write integration tests for critical user flows

## Project Structure

- `/src/pages/` - All routes and pages
- `/src/components/` - Reusable UI components
- `/src/layouts/` - Page layouts and templates
- `/src/styles/` - Global styles and Tailwind configuration
- `/public/` - Static assets like images and fonts

## Common Patterns

- For SEO optimization, use Astro's head management
- For data fetching, use Astro's built-in fetch capabilities
- For dynamic routes, follow Astro's file-based routing conventions
- Component props should be well-typed (if using TypeScript)

## Performance Considerations

- Keep client-side JavaScript minimal
- Optimize images using Astro's image optimization
- Leverage Astro's partial hydration for interactive components
- Consider loading strategies for third-party resources

## Accessibility

- Ensure proper semantic HTML structure
- Maintain sufficient color contrast as per WCAG guidelines
- Provide appropriate ARIA attributes where needed
- Ensure keyboard navigation works correctly

## Layout Guidelines - Optimizing the `<head>` Element

The `<head>` of a web page is fundamental for performance and SEO optimization. Poor organization can negatively affect loading speed and search engine indexing.

### 1. **Correct Order of Elements**

The order of elements in the `<head>` is crucial to prevent rendering blocks. Follow this sequence:

1. Meta declarations (`charset`, `http-equiv`, and `viewport`)
2. `<title>` to define the page title
3. Preconnection with `preconnect` to speed up connections to external domains
4. Asynchronous loading of critical scripts with `<script src="" async></script>`
5. CSS, including rules with `@import` if necessary
6. Synchronized scripts if essential
7. Deferred JavaScript loading with `<script src="" defer></script>`
8. Pre-fetching of future resources (`prefetch` or `prerender`)
9. SEO metadata, Open Graph, favicon, etc.

```html
<head>
  <!-- 1. Meta declarations -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 2. Title -->
  <title>Page Title</title>

  <!-- 3. Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com">

  <!-- 4. Async scripts -->
  <script src="critical.js" async></script>

  <!-- 5-7. CSS and synchronous resources -->
  <link rel="stylesheet" href="styles.css">

  <!-- 8-9. Deferred scripts and prefetch -->
  <script src="main.js" defer></script>
  <link rel="prefetch" href="next-page.html">

  <!-- 10. Other metadata -->
  <meta name="description" content="Page description">
  <link rel="icon" href="favicon.ico">
</head>
```

### 2. **Eliminate Unnecessary Elements**

- Avoid loading scripts in `<head>` if they're not critical
- Move low-priority styles inside the `<body>`
- Reduce the loading of internal and external resources in the `<head>`
- Minimize redirects and unnecessary loads

### 3. **Proper Use of Meta Tags**

- Define the page title with `<title>` before any other script
- Include essential meta tags like `description`, `robots`, and Open Graph
- Ensure that `<meta charset>` is within the first 1024 bytes of the document

### 4. **Optimize Loading of Scripts and Styles**

- Avoid using `@import` within CSS files, as it blocks rendering
- Use `<script async>` for non-critical scripts and `<script defer>` for those dependent on DOM
- Host critical files locally to reduce loading times

### 5. **Use the Preload Scanner**

- Avoid `<meta http-equiv="Content-Security-Policy">` in the `<head>`, as it disables the Preload Scanner
- Preconnect (`preconnect`) to external domains with high priority

When suggesting code, please follow these guidelines and the project's established patterns.
