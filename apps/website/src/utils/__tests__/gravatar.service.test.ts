import crypto from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { getGravatarUrl } from "../gravatar.service";

// Mock the crypto module
vi.mock("node:crypto", () => {
	const digestMock = vi
		.fn()
		.mockReturnValue("0bc83cb571cd1c50ba6f3e8a78ef1346");
	const updateMock = vi.fn(() => ({ digest: digestMock }));
	const hashMock = vi.fn(() => ({ update: updateMock }));

	return {
		default: {
			createHash: hashMock,
		},
	};
});

describe("getGravatarUrl", () => {
	it("should generate a Gravatar URL with default parameters", () => {
		const email = "test@example.com";
		const result = getGravatarUrl(email);

		expect(crypto.createHash).toHaveBeenCalledWith("md5");
		expect(crypto.createHash("md5").update).toHaveBeenCalledWith(
			"test@example.com",
		);
		expect(
			crypto.createHash("md5").update("test@example.com").digest,
		).toHaveBeenCalledWith("hex");
		expect(result).toBe(
			"https://www.gravatar.com/avatar/0bc83cb571cd1c50ba6f3e8a78ef1346?s=200&d=identicon&r=g",
		);
	});

	it("should normalize email by trimming whitespace and converting to lowercase", () => {
		const email = "  TEST@EXAMPLE.COM  ";
		getGravatarUrl(email);

		expect(crypto.createHash("md5").update).toHaveBeenCalledWith(
			"test@example.com",
		);
	});

	it("should accept custom size parameter", () => {
		const email = "test@example.com";
		const result = getGravatarUrl(email, 300);

		expect(result).toBe(
			"https://www.gravatar.com/avatar/0bc83cb571cd1c50ba6f3e8a78ef1346?s=300&d=identicon&r=g",
		);
	});

	it("should accept custom defaultImage parameter", () => {
		const email = "test@example.com";
		const result = getGravatarUrl(email, 200, "robohash");

		expect(result).toBe(
			"https://www.gravatar.com/avatar/0bc83cb571cd1c50ba6f3e8a78ef1346?s=200&d=robohash&r=g",
		);
	});

	it("should accept custom rating parameter", () => {
		const email = "test@example.com";
		const result = getGravatarUrl(email, 200, "identicon", "pg");

		expect(result).toBe(
			"https://www.gravatar.com/avatar/0bc83cb571cd1c50ba6f3e8a78ef1346?s=200&d=identicon&r=pg",
		);
	});

	it("should properly encode the defaultImage parameter", () => {
		const email = "test@example.com";
		const result = getGravatarUrl(email, 200, "url with spaces");

		expect(result).toBe(
			"https://www.gravatar.com/avatar/0bc83cb571cd1c50ba6f3e8a78ef1346?s=200&d=url%20with%20spaces&r=g",
		);
	});
});
