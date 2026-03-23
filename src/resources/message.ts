import {
	type RESTGetListMessagesData,
	type RESTGetListMessagesQueryParams,
	type RESTGetMessageData,
	type RESTPostCancelMessageData,
	type RESTPostSendBatchMessagesBody,
	type RESTPostSendBatchMessagesData,
	type RESTPostSendMessageData,
	Routes,
} from '@rewritetoday/types';
import type {
	SendBatchMessageOptions,
	SendMessageOptions,
} from '../types/message';
import { BaseManager } from './base';

export class MessageManager extends BaseManager {
	public async send({ idempotencyKey, ...body }: SendMessageOptions) {
		const headers = {} as Record<string, string>;

		if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey;

		return await this.rest.post<RESTPostSendMessageData>(
			Routes.messages.send(),
			body,
			{ headers },
		);
	}

	public async list(options?: RESTGetListMessagesQueryParams) {
		return await this.rest.get<RESTGetListMessagesData>(
			Routes.messages.list(options),
		);
	}

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

	public async cancel(id: string) {
		return await this.rest.post<RESTPostCancelMessageData>(
			Routes.messages.cancel(id),
		);
	}

	public async get(id: string) {
		return await this.rest.get<RESTGetMessageData>(Routes.messages.get(id));
	}
}
