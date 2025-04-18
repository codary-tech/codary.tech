import { hasApps } from "../apps/app.service";
import { hasArticles } from "../article";
import { hasNewsletters } from "../newsletter";
import type { MenuItem } from "./menu.type";

const hasNewsletter = await hasNewsletters();
const hasArticle = await hasArticles();
const hasApp = await hasApps();

// Define menu items with translation keys and conditions
export const mainMenuItems: MenuItem[] = [
	{
		href: "/newsletter",
		translationKey: "nav.newsletter",
		condition: hasNewsletter,
	},
	{ href: "/news", translationKey: "nav.news", condition: hasArticle },
	{ href: "/apps", translationKey: "nav.apps", condition: hasApp }, // Coming soon
	{ href: "/podcast", translationKey: "nav.podcast", condition: false }, // Coming soon
];

export const dropdownMenuItems: MenuItem[] = [
	{
		href: "/alternatives",
		translationKey: "nav.alternatives",
		condition: false,
	}, // Coming soon
	{ href: "/resources", translationKey: "nav.resources", condition: false }, // Coming soon
	{ href: "/surveys", translationKey: "nav.surveys", condition: false }, // Coming soon
];
// Navigation links array with translation keys and conditions
export const navLinks: MenuItem[] = [
	{
		href: "/about/",
		translationKey: "footer.about",
		ariaLabelKey: "footer.aria.about",
		condition: true,
	},
	{
		href: "/contact/",
		translationKey: "footer.contact",
		ariaLabelKey: "footer.aria.contact",
		condition: true,
	},
	{
		href: "/sponsor/",
		translationKey: "footer.sponsors",
		ariaLabelKey: "footer.aria.sponsors",
		condition: false,
	},
	{
		href: "/support/",
		translationKey: "footer.donate",
		ariaLabelKey: "footer.aria.donate",
		condition: true,
	},
	{
		href: "#/portal",
		translationKey: "footer.subscribe",
		ariaLabelKey: "footer.aria.subscribe",
		condition: false, // Could be dynamically set based on user login status
	},
	{
		href: "/rss.xml",
		translationKey: "footer.rss",
		ariaLabelKey: "footer.aria.rss",
		target: "_blank",
		condition: true,
	},
	{
		href: "/privacy-policy/",
		translationKey: "footer.privacyPolicy",
		ariaLabelKey: "footer.aria.privacyPolicy",
		condition: true,
	},
];
