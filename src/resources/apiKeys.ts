import {
	type RESTGetListAPIKeysData,
	type RESTGetListAPIKeysQueryParams,
	type RESTPostCreateAPIKeyBody,
	type RESTPostCreateAPIKeyData,
	Routes,
} from '@rewritejs/types';
import { Base } from './base';

/**
 * API key resource operations.
 */
export class APIKeys extends Base {
	/**
	 * Creates an API key for a project.
	 */
	public async create(options: RESTPostCreateAPIKeyBody & { project: string }) {
		const data = await this.rest.post<RESTPostCreateAPIKeyData>(
			Routes.apiKeys.create(options.project),
			options,
		);

		return data;
	}

	/**
	 * Deletes an API key by id.
	 */
	public async delete(id: string, project: string) {
		await this.rest.delete(Routes.apiKeys.delete(project, id));
	}

	/**
	 * Lists API keys for a project.
	 */
	public async list(project: string, query?: RESTGetListAPIKeysQueryParams) {
		const data = await this.rest.get<RESTGetListAPIKeysData>(
			Routes.apiKeys.list(project, query),
		);

		return data;
	}
}
