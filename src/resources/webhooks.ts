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
import { Base } from './base';

/**
 * Webhook resource operations.
 */
export class Webhooks extends Base {
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
