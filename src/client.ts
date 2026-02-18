import { REST } from '@rewritejs/rest';
import { APIKeys } from './resources/apiKeys';
import { Projects } from './resources/projects';
import { Templates } from './resources/templates';
import { Webhooks } from './resources/webhooks';
import type { RewriteOptions } from './types';

export class Rewrite {
	public readonly rest: REST;
	private readonly secret: string;

	public readonly apiKeys: APIKeys;
	public readonly projects: Projects;
	public readonly templates: Templates;
	public readonly webhooks: Webhooks;

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
