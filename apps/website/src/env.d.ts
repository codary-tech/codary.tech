/// <reference types="astro/client" />

declare namespace App {
	interface Locals {
		user: {
			id: string;
			email: string;
			role?: string;
			[key: string]: string | number | boolean | undefined;
		} | null;
		isAuthenticated: boolean;
	}
}
