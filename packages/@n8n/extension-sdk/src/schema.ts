import { z } from 'zod';

/**
 * Schema for the extension configuration.
 */
export const extensionManifestSchema = z.object({
	/**
	 * Name of the extension package.
	 */
	name: z.string(),

	/**
	 * The display name of the extension.
	 */
	displayName: z.string(),

	/**
	 * Description of the extension package.
	 */
	description: z.string(),

	/**
	 * Publisher of the extension.
	 */
	publisher: z.string(),

	/**
	 * Version of the extension package.
	 */
	version: z.string(),

	/**
	 * Category the extension belongs to.
	 */
	categories: z.array(z.string()),

	/**
	 * Setup paths for backend and frontend code entry points.
	 */
	entry: z.object({
		/**
		 * Path to the backend entry file.
		 */
		backend: z.string(),

		/**
		 * Path to the frontend entry file.
		 */
		frontend: z.string(),
	}),

	/**
	 * Minimum SDK version required to run the extension.
	 */
	minSDKVersion: z.string(),

	/**
	 * Permissions object specifying allowed access for frontend and backend.
	 */
	permissions: z.object({
		frontend: z.array(z.string()),
		backend: z.array(z.string()),
	}),

	/**
	 * List of events that the extension listens to.
	 */
	events: z.array(z.string()),

	/**
	 * Define extension points for existing functionalities.
	 */
	extends: z.object({
		views: z.object({
			workflows: z.object({
				header: z.string(),
			}),
		}),
	}),
});

/**
 * TypeScript type inferred from the schema
 */
export type ExtensionManifest = z.infer<typeof extensionManifestSchema>;
