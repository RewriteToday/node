import { REST } from '@rewritejs/rest';
import type { RewriteOptions } from './types';
import { Templates } from './resources/templates';

export class Rewrite {
	public readonly rest: REST;
	private readonly secret: string;
	
	public readonly templates: Templates;

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
		
		this.templates = new Templates(this.rest);
	}
}
