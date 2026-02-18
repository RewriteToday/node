import { REST } from '@rewritejs/rest';
import { APIKeys } from './resources/apiKeys';
import { Projects } from './resources/projects';
import { Templates } from './resources/templates';
import { Webhooks } from './resources/webhooks';
import type { RewriteOptions } from './types';

/**
 * Main SDK client for the Rewrite API.
 */
export class Rewrite {
	/** Low-level REST client instance. */
	public readonly rest: REST;
	
	/** Resolved API secret used for authentication. */
	private readonly secret: string;

	/** API keys resource client. */
	public readonly apiKeys: APIKeys;
	
	/** Projects resource client. */
	public readonly projects: Projects;
	
	/** Templates resource client. */
	public readonly templates: Templates;
	
	/** Webhooks resource client. */
	public readonly webhooks: Webhooks;

	/**
	 * Creates a new Rewrite client instance.
	 */
	public constructor(options: RewriteOptions | string) {
		const resolved =
			typeof options === 'string' ? { secret: options } : options;

		if (typeof resolved.secret !== 'string')
			throw new Error('Expected a string for the secret');

		this.secret = resolved.secret;

		this.rest = new REST({
			...resolved.rest,
			auth: this.secret,
		});

		this.apiKeys = new APIKeys(this.rest);
		this.projects = new Projects(this.rest);
		this.templates = new Templates(this.rest);
		this.webhooks = new Webhooks(this.rest);
	}
}
