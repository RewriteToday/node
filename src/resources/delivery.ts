import {
	type RESTGetDeliveryData,
	type RESTGetListDeliveriesData,
	type RESTGetListDeliveriesQueryParams,
	type RESTGetListWebhookDeliveriesData,
	type RESTGetListWebhookDeliveriesQueryParams,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import { BaseManager } from './base';

/**
 * Webhook delivery resource operations.
 */
export class DeliveryManager extends BaseManager {
	public async list(options?: RESTGetListDeliveriesQueryParams) {
		return await this.rest.get<RESTGetListDeliveriesData>(
			Routes.deliveries.list(options),
		);
	}

	public async get(id: Snowflake) {
		return await this.rest.get<RESTGetDeliveryData>(Routes.deliveries.get(id));
	}

	public async byWebhook(
		id: Snowflake,
		options?: RESTGetListWebhookDeliveriesQueryParams,
	) {
		return await this.rest.get<RESTGetListWebhookDeliveriesData>(
			Routes.deliveries.byWebhook(id, options),
		);
	}
}
