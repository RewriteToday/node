import {
	type RESTDeleteAPIKeyData,
	type RESTDeleteAPIKeysData,
	type RESTGetAPIKeyData,
	type RESTGetListAPIKeyLogsData,
	type RESTGetListAPIKeyLogsQueryParams,
	type RESTGetListAPIKeysData,
	type RESTGetListAPIKeysQueryParams,
	type RESTPatchUpdateAPIKeyBody,
	type RESTPatchUpdateAPIKeyData,
	type RESTPostCreateAPIKeyBody,
	type RESTPostCreateAPIKeyData,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import { BaseManager } from './base';

/**
 * API key resource operations.
 */
export class APIKeyManager extends BaseManager {
	public async list(options?: RESTGetListAPIKeysQueryParams) {
		return await this.rest.get<RESTGetListAPIKeysData>(
			Routes.apiKeys.list(options),
		);
	}

	public async create(options: RESTPostCreateAPIKeyBody) {
		return await this.rest.post<RESTPostCreateAPIKeyData>(
			Routes.apiKeys.create(),
			options,
		);
	}

	public async sweep(options: { ids: Snowflake[] }) {
		return await this.deleteWithBody<RESTDeleteAPIKeysData>(
			Routes.apiKeys.sweep(),
			options,
		);
	}

	public async get(id: Snowflake) {
		return await this.rest.get<RESTGetAPIKeyData>(Routes.apiKeys.get(id));
	}

	public async update(id: Snowflake, options: RESTPatchUpdateAPIKeyBody) {
		return await this.rest.patch<RESTPatchUpdateAPIKeyData>(
			Routes.apiKeys.update(id),
			options,
		);
	}

	public async delete(id: Snowflake) {
		return await this.rest.delete<RESTDeleteAPIKeyData>(
			Routes.apiKeys.delete(id),
		);
	}

	public async logs(id: Snowflake, options?: RESTGetListAPIKeyLogsQueryParams) {
		return await this.rest.get<RESTGetListAPIKeyLogsData>(
			Routes.apiKeys.logs(id, options),
		);
	}
}
