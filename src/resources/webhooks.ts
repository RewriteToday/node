import {
	type RESTGetListWebhooksData,
	type RESTGetListWebhooksQueryParams,
	type RESTGetWebhookData,
	type RESTPatchUpdateWebhookBody,
	type RESTPatchUpdateWebhookData,
	type RESTPostCreateWebhookBody,
	type RESTPostCreateWebhookData,
	Routes,
} from '@rewritejs/types';
import { Base } from './base';

export class Webhooks extends Base {
	public async create(
		options: RESTPostCreateWebhookBody & { project: string },
	) {
		const data = await this.rest.post<RESTPostCreateWebhookData>(
			Routes.webhooks.create(options.project),
			options,
		);

		return data;
	}

	public async update(
		id: string,
		options: RESTPatchUpdateWebhookBody & { project: string },
	) {
		const data = await this.rest.patch<RESTPatchUpdateWebhookData>(
			Routes.webhooks.update(options.project, id),
			options,
		);

		return data;
	}

	public async delete(id: string, project: string) {
		await this.rest.delete(Routes.webhooks.delete(project, id));
	}

	public async list(project: string, query?: RESTGetListWebhooksQueryParams) {
		const data = await this.rest.get<RESTGetListWebhooksData>(
			Routes.webhooks.list(project, query),
		);

		return data;
	}

	public async get(id: string, project: string) {
		const data = await this.rest.get<RESTGetWebhookData>(
			Routes.webhooks.get(project, id),
		);

		return data;
	}
}
