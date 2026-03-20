import {
	type RESTGetListWebhookLogsData,
	type RESTGetListWebhookLogsQueryParams,
	type RESTGetWebhookLogData,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import { BaseManager } from './base';

/**
 * Webhook logs resource operations.
 */
export class LogManager extends BaseManager {
	/**
	 * Deletes an API key by id.
	 */
	public async list(
		id: Snowflake,
		options?: RESTGetListWebhookLogsQueryParams,
	) {
		return await this.rest.get<RESTGetListWebhookLogsData>(
			Routes.webhooks.logs(id, options),
		);
	}

	/**
	 * Fetch for a single webhook log.
	 */
	public async get(id: Snowflake) {
		return await this.rest.get<RESTGetWebhookLogData>(Routes.logs.get(id));
	}
}
