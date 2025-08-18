// Copy URL helper for SocialMediaShare component
// This file is served statically from /scripts/copy-url.js
(() => {
	const copyButton = document.getElementById("copy-url-button");
	const copyIcon = document.getElementById("copy-icon");
	const copiedIcon = document.getElementById("copied-icon");

	if (!copyButton) return;

	copyButton.addEventListener("click", async () => {
		// Use a different name to avoid shadowing server-side props
		const pageUrl = window.location.href;

		try {
			await navigator.clipboard.writeText(pageUrl);

			copyIcon?.classList.add("hidden");
			copiedIcon?.classList.remove("hidden");

			setTimeout(() => {
				copyIcon?.classList.remove("hidden");
				copiedIcon?.classList.add("hidden");
			}, 2000);
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error("Failed to copy URL: ", err);
		}
	});
})();
