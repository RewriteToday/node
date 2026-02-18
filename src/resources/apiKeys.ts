import {
	type RESTGetListAPIKeysData,
	type RESTGetListAPIKeysQueryParams,
	type RESTPostCreateAPIKeyBody,
	type RESTPostCreateAPIKeyData,
	Routes,
} from '@rewritejs/types';
import { Base } from './base';

export class APIKeys extends Base {
	public async create(options: RESTPostCreateAPIKeyBody & { project: string }) {
		const data = await this.rest.post<RESTPostCreateAPIKeyData>(
			Routes.apiKeys.create(options.project),
			options,
		);

		return data;
	}

	public async delete(id: string, project: string) {
		await this.rest.delete(Routes.apiKeys.delete(project, id));
	}

	public async list(project: string, query?: RESTGetListAPIKeysQueryParams) {
		const data = await this.rest.get<RESTGetListAPIKeysData>(
			Routes.apiKeys.list(project, query),
		);

		return data;
	}
}
