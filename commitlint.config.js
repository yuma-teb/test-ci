module.exports = {
	extends: ["@commitlint/config-conventional"],
	/*
	 * Array of functions that return true if commitlint should ignore the given message.
	 * Given array is merged with predefined functions, which consist of matchers like:
	 *
	 * - 'Merge pull request', 'Merge X into Y' or 'Merge branch X'
	 * - 'Revert X'
	 * - 'v1.2.3' (ie semver matcher)
	 * - 'Automatic merge X' or 'Auto-merged X into Y'
	 *
	 * To see full list, check https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/is-ignored/src/defaults.ts.
	 * To disable those ignores and run rules always, set `defaultIgnores: false` as shown below.
	 */
	ignores: [(commit) => commit.trim() === ""],
	/*
	 * Whether commitlint uses the default ignore rules, see the description above.
	 */
	defaultIgnores: true,
	formatter: "@commitlint/format",
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"init",
				// Changes that affect the build system or dependency-only changes
				"build",
				// Changes to CI workflows
				"ci",
				// Any configuration for developments
				"chore",
				// Documentation-only changes
				"docs",
				// A new feature
				"feat",
				//A bug fix
				"fix",
				// A code change that improves performance
				"perf",
				// A code change that neither fixes a bug nor adds a feature
				"refactor",
				// A commit that reverts a previous commit
				"revert",
				// Changes that do not affect the meaning of the code
				"style",
				// Adding missing tests or correcting existing tests
				"test",
				// Used for automated releases-only
				"release",
			],
		],
		"scope-empty": [1, "never"],
		"type-case": [1, "always", "lowercase"],
		"scope-case": [1, "always", "lowercase"],
	},
	prompt: {
		settings: {},
		messages: {
			skip: ":skip",
			max: "upper %d chars",
			min: "%d chars at least",
			emptyWarning: "can not be empty",
			upperLimitWarning: "over limit",
			lowerLimitWarning: "below limit",
		},
		questions: {
			type: {
				description: "Select the type of change that you're committing:",
				enum: {
					feat: {
						description: "A new feature",
						title: "Features",
						emoji: "✨",
					},
					fix: {
						description: "A bug fix",
						title: "Bug Fixes",
						emoji: "🐛",
					},
					docs: {
						description: "Documentation only changes",
						title: "Documentation",
						emoji: "📚",
					},
					style: {
						description:
							"Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
						title: "Styles",
						emoji: "💎",
					},
					refactor: {
						description:
							"A code change that neither fixes a bug nor adds a feature",
						title: "Code Refactoring",
						emoji: "📦",
					},
					perf: {
						description: "A code change that improves performance",
						title: "Performance Improvements",
						emoji: "🚀",
					},
					test: {
						description: "Adding missing tests or correcting existing tests",
						title: "Tests",
						emoji: "🚨",
					},
					build: {
						description:
							"Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
						title: "Builds",
						emoji: "🛠️",
					},
					ci: {
						description:
							"Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
						title: "Continuous Integrations",
						emoji: "➰",
					},
					chore: {
						description: "Other changes that don't modify src or test files",
						title: "Chores",
						emoji: "⌛",
					},
					revert: {
						description: "Reverts a previous commit",
						title: "Reverts",
						emoji: "🗑️",
					},
				},
			},
			scope: {
				description:
					"What is the scope of this change (e.g. component or file name)",
			},
			subject: {
				description:
					"Write a short, imperative tense description of the change",
			},
			body: {
				description: "Provide a longer description of the change",
			},
			isBreaking: {
				description: "Are there any breaking changes?",
			},
			breakingBody: {
				description:
					"A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself",
			},
			breaking: {
				description: "Describe the breaking changes",
			},
			isIssueAffected: {
				description: "Does this change affect any open issues?",
			},
			issuesBody: {
				description:
					"If issues are closed, the commit requires a body. Please enter a longer description of the commit itself",
			},
			issues: {
				description: 'Add issue references (e.g. "fix #123", "re #123".)',
			},
		},
	},
};
