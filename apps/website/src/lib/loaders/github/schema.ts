import { z } from "astro/zod";

const LicenseSchema = z.object({
	key: z.string().optional(),
	name: z.string().optional(),
	url: z.string().nullable().optional(),
	spdx_id: z.string().nullable().optional(),
	node_id: z.string().optional(),
	html_url: z.string().optional(),
});

const PermissionsSchema = z.object({
	admin: z.boolean().optional(),
	pull: z.boolean().optional(),
	triage: z.boolean().optional(),
	push: z.boolean().optional(),
	maintain: z.boolean().optional(),
});

const OwnerSchema = z.object({
	name: z.string().nullable().optional(),
	email: z.string().nullable().optional(),
	login: z.string(),
	id: z.number(),
	node_id: z.string(),
	avatar_url: z.string(),
	gravatar_id: z.string().nullable(),
	url: z.string(),
	html_url: z.string(),
	followers_url: z.string(),
	following_url: z.string(),
	gists_url: z.string(),
	starred_url: z.string(),
	subscriptions_url: z.string(),
	organizations_url: z.string(),
	repos_url: z.string(),
	events_url: z.string(),
	received_events_url: z.string(),
	type: z.string(),
	site_admin: z.boolean(),
	starred_at: z.string().optional(),
});

export const RepoSchema = z.object({
	id: z.number(),
	node_id: z.string(),
	name: z.string(),
	full_name: z.string(),
	license: LicenseSchema.nullable().optional(),
	forks: z.number().optional(),
	permissions: PermissionsSchema.optional(),
	owner: OwnerSchema,
	private: z.boolean(),
	html_url: z.string(),
	description: z.string().nullable(),
	fork: z.boolean(),
	url: z.string(),
	archive_url: z.string(),
	assignees_url: z.string(),
	blobs_url: z.string(),
	branches_url: z.string(),
	collaborators_url: z.string(),
	comments_url: z.string(),
	commits_url: z.string(),
	compare_url: z.string(),
	contents_url: z.string(),
	contributors_url: z.string(),
	deployments_url: z.string(),
	downloads_url: z.string(),
	events_url: z.string(),
	forks_url: z.string(),
	git_commits_url: z.string(),
	git_refs_url: z.string(),
	git_tags_url: z.string(),
	git_url: z.string().optional(),
	issue_comment_url: z.string(),
	issue_events_url: z.string(),
	issues_url: z.string(),
	keys_url: z.string(),
	labels_url: z.string(),
	languages_url: z.string(),
	merges_url: z.string(),
	milestones_url: z.string(),
	notifications_url: z.string(),
	pulls_url: z.string(),
	releases_url: z.string(),
	ssh_url: z.string().optional(),
	stargazers_url: z.string(),
	statuses_url: z.string(),
	subscribers_url: z.string(),
	subscription_url: z.string(),
	tags_url: z.string(),
	teams_url: z.string(),
	trees_url: z.string(),
	clone_url: z.string().optional(),
	mirror_url: z.string().nullable().optional(),
	hooks_url: z.string(),
	svn_url: z.string().optional(),
	homepage: z.string().nullable().optional(),
	language: z.string().nullable().optional(),
	forks_count: z.number().optional(),
	stargazers_count: z.number().optional(),
	watchers_count: z.number().optional(),
	size: z.number().optional(),
	default_branch: z.string().optional(),
	open_issues_count: z.number().optional(),
	is_template: z.boolean().optional(),
	topics: z.array(z.string()).optional(),
	has_issues: z.boolean().optional(),
	has_projects: z.boolean().optional(),
	has_wiki: z.boolean().optional(),
	has_pages: z.boolean().optional(),
	has_downloads: z.boolean().optional(),
	has_discussions: z.boolean().optional(),
	archived: z.boolean().optional(),
	disabled: z.boolean().optional(),
	visibility: z.string().optional(),
	pushed_at: z.string().nullable().optional(),
	created_at: z.string().nullable().optional(),
	updated_at: z.string().nullable().optional(),
	allow_rebase_merge: z.boolean().optional(),
	temp_clone_token: z.string().nullable().optional(),
	allow_squash_merge: z.boolean().optional(),
	allow_auto_merge: z.boolean().optional(),
	delete_branch_on_merge: z.boolean().optional(),
	allow_update_branch: z.boolean().optional(),
	use_squash_pr_title_as_default: z.boolean().optional(),
	squash_merge_commit_title: z
		.enum(["PR_TITLE", "COMMIT_OR_PR_TITLE"])
		.optional(),
	squash_merge_commit_message: z
		.enum(["PR_BODY", "COMMIT_MESSAGES", "BLANK"])
		.optional(),
	merge_commit_title: z.enum(["PR_TITLE", "MERGE_MESSAGE"]).optional(),
	merge_commit_message: z.enum(["PR_TITLE", "PR_BODY", "BLANK"]).optional(),
	allow_merge_commit: z.boolean().optional(),
	allow_forking: z.boolean().optional(),
	web_commit_signoff_required: z.boolean().optional(),
	open_issues: z.number().optional(),
	watchers: z.number().optional(),
	master_branch: z.string().optional(),
	starred_at: z.string().optional(),
	anonymous_access_enabled: z.boolean().optional(),
});

export type Repo = z.infer<typeof RepoSchema>;
