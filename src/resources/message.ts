import {
	type RESTGetListMessagesData,
	type RESTGetListMessagesQueryParams,
	type RESTGetMessageData,
	type RESTPostCancelMessageData,
	type RESTPostSendBatchMessagesBody,
	type RESTPostSendBatchMessagesData,
	type RESTPostSendMessageData,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import type {
	SendBatchMessageOptions,
	SendMessageOptions,
} from '../types/message';
import { BaseManager } from './base';

/**
 * Message resource operations.
 */
export class MessageManager extends BaseManager {
	/**
	 * Sends a single message.
	 */
	public async send({ idempotencyKey, ...body }: SendMessageOptions) {
		const headers = {} as Record<string, string>;

		if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey;

		return await this.rest.post<RESTPostSendMessageData>(
			Routes.messages.send(),
			body,
			{ headers },
		);
	}

	/**
	 * Lists messages for a project.
	 */
	public async list(options?: RESTGetListMessagesQueryParams) {
		return await this.rest.get<RESTGetListMessagesData>(
			Routes.messages.list(options),
		);
	}

	/**
	 * Sends a batch of messages.
	 */
	public async batch(
		body: RESTPostSendBatchMessagesBody,
		{ idempotencyKey }: SendBatchMessageOptions,
	) {
		const headers = {} as Record<string, string>;

		if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey;

		return await this.rest.post<RESTPostSendBatchMessagesData>(
			Routes.messages.batch(),
			body,
			{ headers },
		);
	}

	/**
	 * Cancels a message by id.
	 */
	public async cancel(id: Snowflake) {
		return await this.rest.post<RESTPostCancelMessageData>(
			Routes.messages.cancel(id),
		);
	}

	/**
	 * Fetches a message by id.
	 */
	public async get(id: Snowflake) {
		return await this.rest.get<RESTGetMessageData>(Routes.messages.get(id));
	}
}
