/// <reference types="astro/client" />
/// <reference types="../worker-configuration" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {
		user: {
			id: string;
			email: string;
			role?: string;
			[key: string]: string | number | boolean | undefined;
		} | null;
		isAuthenticated: boolean;
	}
}
