import { REST } from '@rewritetoday/rest';
import { APIKeyManager } from './resources/api-key';
import { LogManager } from './resources/logs';
import { MessageManager } from './resources/message';
import { OTPManager } from './resources/otp';
import { TemplateManager } from './resources/template';
import { WebhookManager } from './resources/webhook';
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
	public readonly otp: OTPManager;

	/** Webhook logs resource client. */
	public readonly logs: LogManager;

	/** API key resource client. */
	public readonly apiKeys: APIKeyManager;

	/** Messages resource client. */
	public readonly messages: MessageManager;

	/** Webhook resource client. */
	public readonly webhooks: WebhookManager;

	/** Template resource client. */
	public readonly templates: TemplateManager;

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

		this.otp = new OTPManager(this.rest);
		this.logs = new LogManager(this.rest);
		this.apiKeys = new APIKeyManager(this.rest);
		this.webhooks = new WebhookManager(this.rest);
		this.messages = new MessageManager(this.rest);
		this.templates = new TemplateManager(this.rest);
	}
}
