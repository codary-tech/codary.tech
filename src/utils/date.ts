/**
 * Formats dates for displaying on the website
 */
export function formatDate(date: Date, locale = "en") {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};

	return new Intl.DateTimeFormat(locale, options).format(date);
}
