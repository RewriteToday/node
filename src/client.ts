import { REST } from '@rewritetoday/rest';
import { APIKeys } from './resources/apiKeys';
import { Logs } from './resources/logs';
import { Messages } from './resources/message';
import { OTP } from './resources/otp';
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

	/** OTP resource client. */
	public readonly otp: OTP;

	/** Webhook logs resource client. */
	public readonly logs: Logs;

	/** API key resource client. */
	public readonly apiKeys: APIKeys;

	/** Messages resource client. */
	public readonly messages: Messages;

	/** Webhook resource client. */
	public readonly webhooks: Webhooks;

	/** Template resource client. */
	public readonly templates: Templates;

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

		this.otp = new OTP(this.rest);
		this.logs = new Logs(this.rest);
		this.apiKeys = new APIKeys(this.rest);
		this.webhooks = new Webhooks(this.rest);
		this.messages = new Messages(this.rest);
		this.templates = new Templates(this.rest);
	}
}
