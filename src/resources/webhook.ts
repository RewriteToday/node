import { createHmac, timingSafeEqual } from 'node:crypto';
import {
	type RESTDeleteWebhookData,
	type RESTGetListWebhooksData,
	type RESTGetListWebhooksQueryParams,
	type RESTGetWebhookData,
	type RESTPatchUpdateWebhookBody,
	type RESTPatchUpdateWebhookData,
	type RESTPostCreateWebhookBody,
	type RESTPostCreateWebhookData,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import type { VerifyWebhookOptions } from '../types/webhook';
import { BaseManager } from './base';

/**
 * Webhook resource operations.
 */
export class WebhookManager extends BaseManager {
	public verify({
		headers,
		payload,
		secret = process.env.REWRITE_WEBHOOK_SECRET,
	}: VerifyWebhookOptions) {
		if (!secret)
			throw new Error('Rewrite could not find a webhook secret to verify.');

		const value = secret.startsWith('whsec_')
			? secret.slice('whsec_'.length)
			: secret;

		const key = secret.startsWith('rw_whsec_')
			? Buffer.from(secret)
			: /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}(?:==)?|[A-Za-z0-9+/]{3}=?)?$/.test(
						value,
					)
				? Buffer.from(value, 'base64')
				: null;

		const signature = headers['svix-signature']?.split(',')[1];

		if (!key || !headers['svix-id'] || !headers['svix-timestamp'] || !signature)
			return false;

		const expected = createHmac('sha256', key)
			.update(`${headers['svix-id']}.${headers['svix-timestamp']}.${payload}`)
			.digest('base64');

		return (
			signature.length === expected.length &&
			timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
		);
	}

	/**
	 * Creates a webhook for a project.
	 */
	public async create(options: RESTPostCreateWebhookBody) {
		return await this.rest.post<RESTPostCreateWebhookData>(
			Routes.webhooks.create(),
			options,
		);
	}

	/**
	 * Updates a webhook by id.
	 */
	public async update(id: Snowflake, options: RESTPatchUpdateWebhookBody) {
		return await this.rest.patch<RESTPatchUpdateWebhookData>(
			Routes.webhooks.update(id),
			options,
		);
	}

	/**
	 * Deletes a webhook by id.
	 */
	public async delete(id: Snowflake) {
		return await this.rest.delete<RESTDeleteWebhookData>(
			Routes.webhooks.delete(id),
		);
	}

	/**
	 * Lists webhooks for a project.
	 */
	public async list(options?: RESTGetListWebhooksQueryParams) {
		return await this.rest.get<RESTGetListWebhooksData>(
			Routes.webhooks.list(options),
		);
	}

	/**
	 * Fetches a webhook by id.
	 */
	public async get(id: Snowflake) {
		return await this.rest.get<RESTGetWebhookData>(Routes.webhooks.get(id));
	}
}
