import { describe, expect, it } from "vitest";
import { formatDate } from "../date";

describe("formatDate", () => {
	it("should format a date with default locale", () => {
		const testDate = new Date("2023-01-15");
		const result = formatDate(testDate);

		// Expected format: "Jan 15, 2023" (or similar, depending on environment)
		expect(result).toMatch(/Jan 15, 2023/);
	});

	it("should format a date with custom locale", () => {
		const testDate = new Date("2023-01-15");
		const result = formatDate(testDate, "es");

		// Expected format: "15 ene 2023" (or similar for Spanish locale)
		expect(result).not.toMatch(/Jan 15, 2023/);
		expect(result).toContain("2023");
	});

	it("should handle different date values", () => {
		const testDate = new Date("2022-12-31");
		const result = formatDate(testDate);

		expect(result).toMatch(/Dec 31, 2022/);
	});

	it("should use the provided options for formatting", () => {
		const testDate = new Date("2023-05-20");
		const result = formatDate(testDate);

		// Should include month in short format
		expect(result).toMatch(/May/);
		// Should include day and year
		expect(result).toMatch(/20/);
		expect(result).toMatch(/2023/);
	});
});
